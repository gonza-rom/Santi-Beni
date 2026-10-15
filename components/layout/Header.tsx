"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
export default function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false); const [sc, setSc] = useState(false); const [hide, setHide] = useState(false);
  // Se oculta al bajar y vuelve a aparecer al subir
  useEffect(() => { let last = window.scrollY; const f = () => { const y = window.scrollY; setSc(y > 40); if (y > 400 && y > last + 4) setHide(true); else if (y < last - 4) setHide(false); last = y; }; f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [path]);
  const solid = sc || open || path !== "/";
  return <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${solid ? "bg-carbon/95 shadow-lg backdrop-blur" : "bg-transparent"} ${hide && !open ? "-translate-y-full" : ""}`}>
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 text-white">
      <Link href="/" className="flex items-center gap-3 leading-none"><img src="/images/logo-header.png" alt="" className="h-12 w-12 transition-transform duration-500 hover:rotate-12" /><span className="block"><span className="serif block text-xl tracking-widest">SANTI BENI</span><span className="text-[10px] tracking-[.4em] text-arena">{site.tag}</span></span></Link>
      <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Principal">{nav.map(([l, h]) => <Link key={h} href={h} className={`link-u pb-0.5 hover:text-arena ${path === h || (h !== "/" && path.startsWith(h)) ? "text-arena" : ""}`}>{l}</Link>)}
        <Link href="/apoyar" className="bg-tierra px-4 py-2 font-medium hover:bg-arena hover:text-carbon">Aportar al viaje</Link></nav>
      <button className="flex h-11 w-11 items-center justify-center md:hidden" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="text-2xl">{open ? "✕" : "☰"}</span></button>
    </div>
    {open && <nav className="flex flex-col gap-1 bg-carbon px-5 pb-6 text-white md:hidden" aria-label="Móvil">{[...nav, ["Contacto", "/contacto"], ["Aportar al viaje", "/apoyar"]].map(([l, h]) => <Link key={h} href={h} className="border-b border-white/10 py-3">{l}</Link>)}</nav>}
  </header>;
}
