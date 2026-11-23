import { PE } from "country-flag-icons/react/3x2";

/** Banderas disponibles (SVG locales de country-flag-icons). Agrega aquí otros países cuando hagan falta. */
const flags = { PE };

export type CountryCode = keyof typeof flags;

/** Insignia de país sobre una foto: fondo azul marino translúcido para que la bandera y el texto blancos siempre se lean. */
export default function CountryBadge({ code = "PE", name, className = "" }: { code?: CountryCode; name: string; className?: string }) {
  const Flag = flags[code];
  return (
    <span className={`inline-flex items-center gap-2 rounded-full bg-[#0a2a5c]/80 py-1.5 pl-2 pr-3.5 text-xs font-bold text-white shadow-lg shadow-black/25 ring-1 ring-white/25 backdrop-blur-md ${className}`}>
      <Flag aria-hidden className="h-4 w-6 shrink-0 rounded-[3px] shadow-sm ring-1 ring-black/20" />
      {name}
    </span>
  );
}
