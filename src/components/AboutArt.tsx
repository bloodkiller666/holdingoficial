/** Ilustraciones SVG de la página Nosotros (colores de marca, sin imágenes externas). */

const O = "#ff6e00";
const B = "#034ea2";
const L = "#3571b4";

export function ProfessionalsArt() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden className="h-full w-full">
      <circle cx="80" cy="80" r="66" fill="currentColor" opacity=".06" />
      {/* persona central */}
      <circle cx="80" cy="62" r="17" fill="#fff" stroke={B} strokeWidth="3" />
      <path d="M52 124c0-16 12-28 28-28s28 12 28 28" fill="#fff" stroke={B} strokeWidth="3" strokeLinecap="round" />
      {/* casco */}
      <path d="M62 58c0-11 8-18 18-18s18 7 18 18z" fill={O} />
      <rect x="57" y="57" width="46" height="6" rx="3" fill={O} />
      <path d="M80 40v17" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".85" />
      {/* personas laterales */}
      <circle cx="40" cy="78" r="11" fill="#fff" stroke={L} strokeWidth="2.5" />
      <path d="M22 118c0-10 8-18 18-18 4 0 7 1 10 3" stroke={L} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="78" r="11" fill="#fff" stroke={L} strokeWidth="2.5" />
      <path d="M138 118c0-10-8-18-18-18-4 0-7 1-10 3" stroke={L} strokeWidth="2.5" strokeLinecap="round" />
      {/* chip de verificación */}
      <circle cx="108" cy="44" r="12" fill={B} />
      <path d="m102.500 44.500 4 4 7-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProductsArt() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden className="h-full w-full">
      <circle cx="80" cy="80" r="66" fill="currentColor" opacity=".06" />
      <path d="M18 112h124" stroke={B} strokeWidth="3" strokeLinecap="round" opacity=".25" />
      {/* tanque */}
      <rect x="26" y="58" width="76" height="38" rx="19" fill="#fff" stroke={B} strokeWidth="3" />
      <path d="M44 58v38M62 58v38M80 58v38" stroke={B} strokeWidth="2" opacity=".25" />
      <rect x="40" y="48" width="14" height="10" rx="3" fill={B} />
      {/* gota */}
      <path d="M64 68c-5 6-7 9-7 12a7 7 0 0 0 14 0c0-3-2-6-7-12z" fill={O} />
      {/* chasis y cabina */}
      <path d="M22 96h112v10H22z" fill={B} />
      <path d="M104 62h20c5 0 8 3 10 8l6 14c1 2 1 4 1 6v6h-37z" fill={O} />
      <path d="M112 68h10c3 0 5 1 6 4l4 10h-20z" fill="#fff" opacity=".9" />
      {/* ruedas */}
      {[40, 66, 120].map((x) => (
        <g key={x}>
          <circle cx={x} cy="110" r="10" fill={B} />
          <circle cx={x} cy="110" r="4" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

export function LabsArt() {
  return (
    <svg viewBox="0 0 160 160" fill="none" aria-hidden className="h-full w-full">
      <circle cx="80" cy="80" r="66" fill="currentColor" opacity=".06" />
      {/* base */}
      <rect x="44" y="120" width="72" height="9" rx="4.500" fill={B} />
      <path d="M80 120v-8" stroke={B} strokeWidth="3" />
      {/* brazo */}
      <path d="M108 118c14-4 20-20 14-34-5-12-17-20-31-18" stroke={B} strokeWidth="6" strokeLinecap="round" />
      {/* tubo */}
      <g transform="rotate(-28 80 64)">
        <rect x="64" y="22" width="24" height="64" rx="6" fill="#fff" stroke={B} strokeWidth="3" />
        <rect x="68" y="14" width="16" height="12" rx="3" fill={O} />
        <rect x="68" y="86" width="16" height="10" rx="3" fill={B} />
        <circle cx="76" cy="52" r="5" fill={L} opacity=".5" />
      </g>
      {/* muestra */}
      <circle cx="58" cy="102" r="8" fill={O} opacity=".9" />
      <circle cx="58" cy="102" r="3" fill="#fff" />
      {/* destellos */}
      <path d="M124 38v10M119 43h10" stroke={O} strokeWidth="3" strokeLinecap="round" />
      <path d="M34 58v7M30.500 61.500h7" stroke={L} strokeWidth="2.500" strokeLinecap="round" />
    </svg>
  );
}

/** Sello de certificación (ISO) o escudo OEA, con anillo de texto. */
export function Seal({ code, id }: { code: string; id: string }) {
  const oea = code === "OEA";
  const parts = code.split(" ");
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="h-full w-full">
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff9a3d" />
          <stop offset="1" stopColor={O} />
        </linearGradient>
        <linearGradient id={`b-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity=".04" />
        </linearGradient>
        <path id={`p-${id}`} d="M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1-160 0" />
      </defs>
      {/* dentado exterior */}
      <g stroke="#fff" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: 48 }).map((_, i) => {
          const a = (i * 7.5 * Math.PI) / 180;
          const p = (r: number, f: (x: number) => number) => (100 + f(a) * r).toFixed(2);
          return <line key={i} x1={p(94, Math.cos)} y1={p(94, Math.sin)} x2={p(98, Math.cos)} y2={p(98, Math.sin)} />;
        })}
      </g>
      <circle cx="100" cy="100" r="90" fill={`url(#b-${id})`} stroke="#fff" strokeOpacity=".45" strokeWidth="1.500" />
      <circle cx="100" cy="100" r="68" stroke={`url(#g-${id})`} strokeWidth="2.500" />
      <text fontFamily="Cairo, sans-serif" fontSize="11.500" fontWeight="700" letterSpacing="3.200" fill="#fff" fillOpacity=".75">
        <textPath href={`#p-${id}`} startOffset="0">
          {oea ? "• OPERADOR ECONÓMICO AUTORIZADO • TDM ASFALTOS " : "• SISTEMA DE GESTIÓN CERTIFICADO • TDM ASFALTOS "}
        </textPath>
      </text>
      {oea ? (
        <g>
          <path d="M100 52l30 11v26c0 20-12 36-30 44-18-8-30-24-30-44V63z" fill={`url(#g-${id})`} />
          <path d="m86 96 10 10 20-22" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="100" y="152" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="17" fontWeight="800" fill="#fff" letterSpacing="2">OEA</text>
        </g>
      ) : (
        <g>
          <text x="100" y="94" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="30" fontWeight="800" fill="#fff" letterSpacing="2">{parts[0]}</text>
          <text x="100" y="128" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="38" fontWeight="800" fill={O}>{parts[1]}</text>
          <path d="M82 142h36" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

export const StatTonsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.600" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-full w-full">
    <path d="M6 36l8-24h20l8 24" />
    <path d="M24 12v6M24 24v6" />
    <path d="M4 40h40" />
  </svg>
);

export const StatAwardIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.600" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-full w-full">
    <circle cx="24" cy="20" r="11" />
    <path d="m19.500 20 3.500 3.500 6-7" />
    <path d="m17 30-3 14 10-5 10 5-3-14" />
  </svg>
);

export const DownloadIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);
