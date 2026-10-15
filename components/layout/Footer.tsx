import Link from "next/link";
import { nav, site, support } from "@/lib/data";
export default function Footer() {
  return <footer className="bg-carbon text-crema"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
    <div className="md:col-span-2"><p className="serif text-2xl tracking-widest">SANTI BENI</p><p className="text-[10px] tracking-[.4em] text-arena">MOTOVIAJERO</p><p className="mt-4 text-sm text-crema/70">🛵 {site.title}<br />🌎 {site.motto}<br />🏕️ Moto • Camping • Trekking</p></div>
    <nav aria-label="Pie"><ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:block md:space-y-2">{[...nav, ["Aportar", "/apoyar"], ["Contacto", "/contacto"]].map(([l, h]) => <li key={h}><Link href={h} className="hover:text-arena">{l}</Link></li>)}</ul></nav>
    <div className="space-y-3 text-sm"><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-arena">Instagram {site.igHandle} ↗</a><a href={site.youtube} target="_blank" rel="noopener noreferrer" className="block hover:text-arena">YouTube · 69,7 K suscriptores ↗</a><a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="block hover:text-arena">TikTok @santi_beni_motoviajero ↗</a><a href={`mailto:${site.email}`} className="block break-all hover:text-arena">{site.email}</a>
      <p className="pt-3 text-crema/70">Aportar · Alias {support.platform}:<br /><span className="font-medium text-arena">{support.alias}</span></p></div></div>
    <div className="border-t border-white/10 py-4 text-center text-xs text-crema/50">© {new Date().getFullYear()} Santi Beni · Desarrollado por DevHub</div></footer>;
}
