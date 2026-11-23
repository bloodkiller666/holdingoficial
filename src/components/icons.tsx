type P = { className?: string; size?: number };
const base = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true });

export const PhoneIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const MailIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const PinIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></svg>
);
export const NavIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="m3 11 18-8-8 18-2-8z" /></svg>
);
export const ArrowLeftIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const ShareIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.600 13.500 6.800 4M15.400 6.500l-6.800 4" /></svg>
);

const fill = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true });

export const LinkedInIcon = ({ className, size }: P) => (
  <svg {...fill(size)} className={className}><path d="M4.980 3.500a2.500 2.500 0 1 1 0 5 2.500 2.500 0 0 1 0-5zM3 9.500h4V21H3zM9.500 9.500h3.800v1.600h.1c.5-1 1.800-2 3.800-2 4 0 4.800 2.600 4.800 6V21h-4v-5c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V21h-4z" /></svg>
);
export const InstagramIcon = ({ className, size }: P) => (
  <svg {...fill(size)} className={className}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
);
export const TikTokIcon = ({ className, size }: P) => (
  <svg {...fill(size)} className={className}><path d="M16.600 5.800A4.300 4.300 0 0 1 15.500 3h-3.100v12.400a2.600 2.600 0 1 1-2.600-2.600c.3 0 .5 0 .8.100V9.700a5.700 5.700 0 1 0 4.900 5.600V9.100a7.300 7.300 0 0 0 4.200 1.300V7.300a4.300 4.300 0 0 1-3.100-1.500z" /></svg>
);
export const WhatsAppIcon = ({ className, size }: P) => (
  <svg {...fill(size)} className={className}><path d="M12 2a10 10 0 0 0-8.600 15l-1.400 5 5.100-1.300A10 10 0 1 0 12 2zm5.300 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.9 2.100c.1.200.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l2 1c.3.100.5.200.5.300.1.200.1.700-.1 1.300z" /></svg>
);
