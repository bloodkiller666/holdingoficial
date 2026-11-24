export type FormType = "contact" | "brochure" | "complaint";

/** Envía un formulario al servidor (`/api/forms`). Devuelve `ok` y, para reclamos, el código de registro. */
export async function submitForm(type: FormType, locale: string, data: Record<string, string>): Promise<{ ok: boolean; code?: string }> {
  try {
    const res = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, locale, data }),
    });
    if (!res.ok) return { ok: false };
    const json = (await res.json()) as { ok?: boolean; code?: string };
    return { ok: !!json.ok, code: json.code };
  } catch {
    return { ok: false };
  }
}
