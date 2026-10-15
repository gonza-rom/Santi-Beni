import Link from "next/link";
import Img from "./Img";
import { photo, site } from "@/lib/data";
export const Kicker = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => <p className={`text-xs uppercase tracking-[.3em] ${light ? "text-arena" : "text-tierra"}`}>{children}</p>;
export const Btn = ({ href, children, dark = false, external = false }: { href: string; children: React.ReactNode; dark?: boolean; external?: boolean }) => {
  const c = `inline-flex min-h-[44px] items-center px-6 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${dark ? "bg-tierra text-white hover:bg-arena hover:text-carbon" : "border border-white/70 text-white hover:bg-white hover:text-carbon"}`;
  return external ? <a href={href} target="_blank" rel="noopener noreferrer" className={c}>{children}</a> : <Link href={href} className={c}>{children}</Link>;
};
export function PageHero({ kicker, title, photoKey, sub }: { kicker: string; title: string; photoKey: string; sub?: string }) {
  return <section data-noreveal className="relative flex min-h-[55vh] items-end overflow-hidden"><div data-parallax className="absolute inset-0"><Img src={photo(photoKey)} alt="" eager className="kenburns h-full w-full" /></div><div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/40 to-carbon/20" />
    <div className="fade relative mx-auto w-full max-w-6xl px-5 pb-12 pt-32 text-white"><p className="mb-3 text-xs uppercase tracking-[.3em] text-arena">{kicker}</p><h1 className="serif max-w-3xl text-4xl leading-tight sm:text-6xl">{title}</h1>{sub && <p className="mt-4 max-w-2xl text-lg text-crema/85">{sub}</p>}</div></section>;
}
export const Wrap = ({ children, className = "", ...rest }: React.HTMLAttributes<HTMLDivElement> & { "data-reveal-group"?: boolean }) => <div {...rest} className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>;
export const Social = ({ className = "" }: { className?: string }) => <div className={`flex flex-wrap gap-3 ${className}`}>
  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 border border-current px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-tierra hover:bg-tierra hover:text-white">Instagram {site.igHandle} ↗</a>
  <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 border border-current px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-tierra hover:bg-tierra hover:text-white">YouTube ↗</a>
  <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 border border-current px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-tierra hover:bg-tierra hover:text-white">TikTok ↗</a></div>;
export const VideoEmbed = ({ id, title }: { id: string; title: string }) => <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} loading="lazy" className="aspect-video w-full bg-carbon" allow="encrypted-media; picture-in-picture" allowFullScreen />;
