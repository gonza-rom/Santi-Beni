import Link from "next/link";
import { nav, site, support } from "@/lib/data";
import { getLive } from "@/lib/live";
import { ArrowUpRight, Globe, Instagram, Mail, Motorbike, Tent, TikTok, YouTube } from "@/components/ui/Icons";
export default async function Footer() {
  const { subs } = await getLive();
  return <footer className="bg-carbon text-crema"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
    <div className="md:col-span-2"><p className="serif text-2xl tracking-widest">SANTI BENI</p><p className="text-[10px] tracking-[.4em] text-arena">MOTOVIAJERO</p><ul className="mt-4 space-y-1.5 text-sm text-crema/70"><li className="flex items-center gap-2"><Motorbike className="h-4 w-4 text-arena" />{site.title}</li><li className="flex items-center gap-2"><Globe className="h-4 w-4 text-arena" />{site.motto}</li><li className="flex items-center gap-2"><Tent className="h-4 w-4 text-arena" />Moto • Camping • Trekking</li></ul></div>
    <nav aria-label="Pie"><ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:block md:space-y-2">{[...nav, ["Aportar", "/apoyar"], ["Contacto", "/contacto"]].map(([l, h]) => <li key={h}><Link href={h} className="hover:text-arena">{l}</Link></li>)}</ul></nav>
    <div className="space-y-3 text-sm"><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-arena"><Instagram className="h-5 w-5" />Instagram {site.igHandle} <ArrowUpRight /></a><a href={site.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-arena"><YouTube className="h-5 w-5" />YouTube · {subs} suscriptores <ArrowUpRight /></a><a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-arena"><TikTok className="h-5 w-5" />TikTok @santi_beni_motoviajero <ArrowUpRight /></a><a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-arena"><Mail className="h-5 w-5 shrink-0" />{site.email}</a>
      <p className="pt-3 text-crema/70">Aportar · Alias {support.platform}:<br /><span className="font-medium text-arena">{support.alias}</span></p></div></div>
    <div className="border-t border-white/10 py-4 text-center text-xs text-crema/50">© {new Date().getFullYear()} Santi Beni · Desarrollado por DevHub</div></footer>;
}
