import { NextResponse } from "next/server";

/**
 * Recibe los formularios del sitio (contacto, brochure y libro de reclamaciones) y los envía por correo con Resend.
 *
 * Variables de entorno:
 *   RESEND_API_KEY   clave de Resend (obligatoria en producción)
 *   FORMS_FROM       remitente verificado en Resend, p. ej. "TDM Asfaltos <web@tdmasfaltos.com>"
 *   FORMS_TO         destinatarios de contacto y brochure, separados por coma (por defecto contactenos@tdmasfaltos.com)
 *   COMPLAINTS_TO    destinatarios del libro de reclamaciones (por defecto, los de FORMS_TO)
 * Sin RESEND_API_KEY y fuera de producción, el envío se imprime en la consola del servidor.
 */

type Type = "contact" | "brochure" | "complaint";
type Fields = Record<string, string>;

const LIMIT = 3000;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Campos obligatorios por tipo de formulario. */
const required: Record<Type, string[]> = {
  contact: ["firstName", "lastName", "email", "phone", "country", "topic", "message"],
  brochure: ["name", "email", "phone"],
  complaint: ["docType", "docNumber", "name", "address", "phone", "email", "goodType", "goodDescription", "claimType", "detail", "request"],
};

const labels: Record<string, string> = {
  firstName: "Nombres", lastName: "Apellidos", email: "Correo", phone: "Teléfono", country: "País", topic: "Consulta", message: "Mensaje",
  name: "Nombre", product: "Brochure", docType: "Tipo de documento", docNumber: "N.º de documento", address: "Domicilio",
  guardian: "Padre/madre o apoderado (menor de edad)", goodType: "Bien contratado", amount: "Monto reclamado", goodDescription: "Descripción del producto o servicio",
  claimType: "Tipo", detail: "Detalle", request: "Pedido del consumidor", date: "Fecha", code: "N.º de registro",
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const table = (rows: [string, string][]) =>
  `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#555;vertical-align:top"><b>${esc(k)}</b></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join("")}</table>`;

// Límite sencillo por IP (en memoria): 6 envíos por minuto.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) for (const [k, v] of hits) if (v.every((t) => now - t > 60_000)) hits.delete(k);
  return recent.length > 6;
}

async function sendMail(opts: { to: string[]; subject: string; html: string; replyTo?: string }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV === "production") throw new Error("RESEND_API_KEY no configurada");
    console.log(`[forms] (sin RESEND_API_KEY) → ${opts.to.join(", ")}\n${opts.subject}\n${opts.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")}`);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.FORMS_FROM ?? "TDM Asfaltos <onboarding@resend.dev>",
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      reply_to: opts.replyTo,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}`);
}

const list = (v: string | undefined, fallback: string[]) => (v ? v.split(",").map((s) => s.trim()).filter(Boolean) : fallback);

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });

  let body: { type?: string; locale?: string; data?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }
  const type = body.type as Type;
  if (!(type in required) || !body.data || typeof body.data !== "object") return NextResponse.json({ ok: false, error: "type" }, { status: 400 });

  // Solo cadenas, recortadas y con tope de longitud
  const data: Fields = {};
  for (const [k, v] of Object.entries(body.data)) if (typeof v === "string") data[k] = v.trim().slice(0, LIMIT);

  // Campo trampa para bots: si viene relleno, fingimos éxito sin enviar nada.
  if (data.website) return NextResponse.json({ ok: true });

  for (const k of required[type]) if (!data[k]) return NextResponse.json({ ok: false, error: `missing:${k}` }, { status: 400 });
  if (!emailRe.test(data.email)) return NextResponse.json({ ok: false, error: "email" }, { status: 400 });

  const from = list(process.env.FORMS_TO, ["contactenos@tdmasfaltos.com"]);
  const when = new Date().toLocaleString("es-PE", { timeZone: "America/Lima", dateStyle: "long", timeStyle: "short" });

  try {
    if (type === "contact") {
      const rows = (["firstName", "lastName", "email", "phone", "country", "topic", "message"] as const).map((k): [string, string] => [labels[k], data[k]]);
      const complaint = data.topicIndex === "4";
      await sendMail({
        to: from,
        replyTo: data.email,
        subject: `${complaint ? "[RECLAMO] " : ""}Contacto web: ${data.topic} — ${data.firstName} ${data.lastName}`,
        html: table([...rows, ["Fecha", when]]),
      });
      return NextResponse.json({ ok: true });
    }

    if (type === "brochure") {
      await sendMail({
        to: from,
        replyTo: data.email,
        subject: `Descarga de brochure: ${data.product ?? ""} — ${data.name}`,
        html: table([["Brochure", data.product ?? "—"], ["Nombre", data.name], ["Correo", data.email], ["Teléfono", data.phone], ["Fecha", when]]),
      });
      return NextResponse.json({ ok: true });
    }

    // Libro de reclamaciones
    const code = `LR-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const rows: [string, string][] = [
      ["N.º de registro", code], ["Fecha", when],
      ["Consumidor", data.name], [labels.docType, `${data.docType} ${data.docNumber}`], [labels.address, data.address],
      ["Teléfono", data.phone], ["Correo", data.email],
      ...(data.guardian ? ([[labels.guardian, data.guardian]] as [string, string][]) : []),
      [labels.goodType, data.goodType], ...(data.amount ? ([[labels.amount, data.amount]] as [string, string][]) : []),
      [labels.goodDescription, data.goodDescription], [labels.claimType, data.claimType], [labels.detail, data.detail], [labels.request, data.request],
    ];
    const html = table(rows);
    await sendMail({
      to: list(process.env.COMPLAINTS_TO, from),
      replyTo: data.email,
      subject: `[Libro de Reclamaciones] ${code} — ${data.claimType}`,
      html: `<p style="font-family:Arial,sans-serif"><b>TDM ASFALTOS S.A.C.</b> · RUC 20514831620<br>Responder al consumidor en un plazo máximo de 30 días calendario.</p>${html}`,
    });
    // Constancia para el consumidor (copia de la hoja de reclamación)
    // Si la constancia falla (p. ej. dominio aún sin verificar en Resend), el reclamo ya llegó a TDM: no se pierde.
    await sendMail({
      to: [data.email],
      subject: `Constancia de tu ${data.claimType.toLowerCase()} — ${code}`,
      html: `<p style="font-family:Arial,sans-serif">Hemos registrado tu hoja de reclamación en el Libro de Reclamaciones de <b>TDM ASFALTOS S.A.C.</b> (RUC 20514831620). Te responderemos en un plazo máximo de 30 días calendario.</p>${html}`,
    }).catch((e) => console.error("[forms] constancia no enviada", e));
    return NextResponse.json({ ok: true, code });
  } catch (e) {
    console.error("[forms]", e);
    return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
  }
}
