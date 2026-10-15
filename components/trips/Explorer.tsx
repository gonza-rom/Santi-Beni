"use client";
import Link from "next/link";
import { useState } from "react";
import Img from "@/components/ui/Img";
import dynamic from "next/dynamic";
import { ep, legs, photo, stageCaps, stageRange, stages, ytThumb } from "@/lib/data";
import { legColor, nextRoute } from "@/lib/route";
const RouteMap = dynamic(() => import("./RouteMap"), { ssr: false, loading: () => <div className="flex h-full items-center justify-center text-sm text-gris">Cargando mapa…</div> });
export default function Explorer() {
  const [f, setF] = useState<string>("Todas"); const [sel, setSel] = useState<string | null>(null); const [all, setAll] = useState(false);
  const pick = (slug: string) => { setSel(slug); document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "center" }); };
  const list = stages.filter(s => f === "Todas" || s.leg === f);
  const total = stages.reduce((n, s) => n + s.episodes.length, 0);
  return <div className="grid gap-10 lg:grid-cols-5">
    <div className="min-w-0 lg:col-span-2 lg:sticky lg:top-24 lg:self-start"><div className="relative z-0 -mx-5 h-[60vh] max-h-[460px] min-h-[320px] sm:mx-0 lg:max-h-none overflow-hidden bg-arena/40 lg:h-[min(calc(100vh-9rem),720px)]"><RouteMap sel={sel} all={all} onSelect={pick} /></div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gris">{legs.map(l => <span key={l} className="inline-flex items-center gap-1.5"><span className="inline-block h-1 w-4 rounded" style={{ background: legColor[l] }} />{l}</span>)}<span className="inline-flex items-center gap-1.5"><span className="inline-block w-4 border-t-2 border-dashed border-carbon/60" />Próximamente</span></div>
        <div className="flex gap-2"><button onClick={() => { setSel(null); setAll(false); }} className={`min-h-[36px] border px-3 text-xs ${!all && !sel ? "border-carbon bg-carbon text-white" : "border-tierra/40"}`}>Ruta hecha</button><button onClick={() => { setSel(null); setAll(true); }} className={`min-h-[36px] border px-3 text-xs ${all && !sel ? "border-carbon bg-carbon text-white" : "border-tierra/40"}`}>Hasta Alaska 🏁</button></div></div>
      <p className="mt-2 text-xs text-gris">{stages.length} etapas · {total} videos. Trazado aproximado según los lugares de cada capítulo. Tocá un número o una etapa para verla en el mapa.</p></div>
    <div className="min-w-0 lg:col-span-3"><div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="group" aria-label="Filtrar">{["Todas", ...legs].map(r => <button key={r} onClick={() => setF(r)} aria-pressed={f === r} className={`min-h-[44px] shrink-0 whitespace-nowrap border px-4 text-sm ${f === r ? "border-carbon bg-carbon text-white" : "border-tierra/40 hover:bg-arena/40"}`}>{r}</button>)}</div>
      <ol data-reveal-group className="space-y-10">{list.map(s => { const i = stages.indexOf(s); return <li key={s.slug} id={s.slug} onClick={() => setSel(s.slug)} className={`min-w-0 scroll-mt-24 border-l-2 pl-5 ${sel === s.slug ? "border-tierra" : "border-arena"}`}>
        <div className="grid gap-4 sm:grid-cols-5"><Link href={`/recorrido/${s.slug}`} className="overflow-hidden sm:col-span-2"><Img src={photo(s.photo)} alt={s.title} className="aspect-[4/3] w-full transition-transform duration-700 hover:scale-105" /></Link>
          <div className="sm:col-span-3"><p className="text-xs tracking-widest text-tierra">ETAPA {i + 1} · {s.leg.toUpperCase()}</p><h3 className="serif text-2xl"><Link href={`/recorrido/${s.slug}`} className="hover:underline">{s.title}</Link></h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-gris">{s.place} · {stageRange(s)}{stageCaps(s) && ` · ${stageCaps(s)}`}</p><p className="mt-2 text-sm text-gris">{s.desc}</p>
            <Link href={`/recorrido/${s.slug}`} className="mt-3 inline-block font-medium text-tierra">Ver los {s.episodes.length} videos →</Link></div></div>
        <div className="mt-4 flex snap-x gap-2 overflow-x-auto pb-2">{s.episodes.map(id => { const e = ep(id); return <Link key={id} href={`/recorrido/capitulo/${id}`} title={e.title} className="group relative w-28 shrink-0 snap-start sm:w-32"><Img src={ytThumb(id)} alt="" className="aspect-video w-full opacity-90 group-hover:opacity-100" /><span className="absolute bottom-1 left-1 bg-carbon/85 px-1.5 text-[10px] text-white">{e.cap ? `Cap. ${e.cap}` : "Especial"}</span></Link>; })}</div></li>; })}</ol>
      <div className="mt-12 bg-arena/40 p-6"><p className="text-xs uppercase tracking-widest text-tierra">Próximamente</p><p className="mt-2 text-gris">{nextRoute.map(n => n.name).join(" → ")} 🏁</p></div></div></div>;
}
