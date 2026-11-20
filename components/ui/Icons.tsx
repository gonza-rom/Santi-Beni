// Íconos SVG del sitio (en lugar de emojis). Heredan el color del texto (currentColor).
type P = { className?: string; title?: string };
const base = (className = "h-4 w-4") => ({ className: `inline-block shrink-0 ${className}`, "aria-hidden": true as const });
const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

// Logos de redes
export const Instagram = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.2-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z" /></svg>;
export const YouTube = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>;
export const TikTok = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.2a6.2 6.2 0 1 0 5.4 6.2V8.7a8 8 0 0 0 4.7 1.5V6.9a4.7 4.7 0 0 1-4.7-4.7v-.2Z" /></svg>;
export const Mail = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;

// Íconos de línea
export const ArrowUpRight = ({ className = "h-3.5 w-3.5" }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M7 17 17 7M8 7h9v9" /></svg>;
export const Play = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5Z" /></svg>;
export const Menu = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Close = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const Globe = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
export const Motorbike = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><circle cx="5.5" cy="16.5" r="3" /><circle cx="18.5" cy="16.5" r="3" /><path d="M8.5 16.5h5l3-6H13l-2-3H8M16.5 10.5 15 7h2.5M5.5 16.5l3-5h4" /></svg>;
export const Tent = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M12 4 3 20h18L12 4ZM12 4v16M9 20l3-6 3 6" /></svg>;
export const Fuel = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M4 10h10M14 8l3 2v7a1.5 1.5 0 0 0 3 0V9l-3-3" /></svg>;
export const Wrench = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" /></svg>;
export const Heart = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M12 20s-7-4.4-9-8.7C1.6 8 3.5 4.5 7 4.5c2 0 3.3 1.1 5 3 1.7-1.9 3-3 5-3 3.5 0 5.4 3.5 4 6.8-2 4.3-9 8.7-9 8.7Z" /></svg>;
export const Handshake = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2l-3-3M14 16l1.5 1.5a1.4 1.4 0 0 0 2-2L13 11l-1.5 1.5a2 2 0 0 1-3-3L12 6l2 1h3l4 4M3 11l4-4 3 1M3 11l6 6 1.5-1.5" /></svg>;
export const Home = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6" /></svg>;
export const Camera = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13" r="4" /></svg>;
export const Video = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></svg>;
export const Flag = ({ className }: P) => <svg {...base(className)} viewBox="0 0 24 24" {...line}><path d="M5 21V4M5 4h12l-2 4 2 4H5" /></svg>;
