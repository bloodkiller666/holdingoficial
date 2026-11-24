"use client";

import Image from "next/image";
import Link from "@/components/Link";
import { useI18n } from "@/lib/i18n";
import { IMG, r2 } from "@/lib/r2";

const WA = "https://api.whatsapp.com/send?phone=51966561059";

const social = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/tdm-asfaltos/posts/?feedView=all", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.700V21h-4z" },
  { name: "YouTube", href: "https://www.youtube.com/@tdm.asfaltos", d: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z" },
  { name: "Instagram", href: "https://www.instagram.com/tdm.asfaltos/", d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" },
  { name: "WhatsApp", href: WA, d: "M12 2a10 10 0 0 0-8.600 15l-1.400 5 5.100-1.300A10 10 0 1 0 12 2zm5.300 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.9 2.100c.1.200.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l2 1c.3.100.5.200.5.300.1.200.1.700-.1 1.300z" },
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <>
      <footer className="bg-[#0b2a5a] text-white dark:bg-[#060b18]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr] lg:px-10">
          <div>
            <Image src={r2(IMG.logo)} alt="TDM Asfaltos" width={72} height={72} unoptimized className="h-16 w-16" />
            <h3 className="mt-6 font-display text-xl font-bold text-brand">{t.footer.hq}</h3>
            <address className="mt-3 space-y-1.5 not-italic text-white/85">
              <p>Alameda Marqués de la Bula 339 Chorrillos - Lima</p>
              <p><a href="tel:019041898" className="hover:text-brand">01-9041898</a> · <a href={WA} className="hover:text-brand">+51 966 561 059</a></p>
              <p><a href="mailto:contactenos@tdmasfaltos.com" className="hover:text-brand">contactenos@tdmasfaltos.com</a></p>
            </address>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-brand">TDM Asfaltos</h3>
            <ul className="mt-3 space-y-2">
              {t.footer.links.map((l, i) => (
                <li key={l}><Link href={i === 0 ? "/nosotros" : i === 1 ? "/caso-de-exito" : i === 2 ? "/sostenibilidad" : i === 3 ? "/unete-a-nosotros" : i === 4 ? "/politicas-de-privacidad" : "/libro-de-reclamaciones"} className="text-white/85 transition hover:text-brand">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-5 py-5 text-sm text-white/70 lg:px-10">
            <p>{t.footer.rights}</p>
            <a href="https://digitalwerk.pe" target="_blank" rel="noreferrer" className="hover:text-brand">Digitalwerk</a>
          </div>
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label={t.footer.help} className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 text-white shadow-xl shadow-black/30 transition hover:scale-105">
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/50" />
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d={social[3].d} /></svg>
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-bold transition-all duration-300 group-hover:max-w-40 group-hover:pr-2 sm:block">{t.footer.help}</span>
      </a>
    </>
  );
}
