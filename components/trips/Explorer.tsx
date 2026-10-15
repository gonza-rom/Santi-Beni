"use client";
import Link from "next/link";
import { useState } from "react";
import Img from "@/components/ui/Img";
import { nextStops, photo, stages } from "@/lib/data";
const regions = ["Todas", ...Array.from(new Set(stages.map(s => s.region)))];
// Ruta esquemática de sur a norte: etapas hechas (línea llena) + próximos destinos (punteada)
const done = [...stages].reverse(); const path = (pts: { x: number; y: number }[]) => pts.map(p => `${p.x},${p.y}`).join(" ");
export default function Explorer() {
  const [f, setF] = useState("Todas"); const [sel, setSel] = useState<string | null>(null);
  const list = stages.filter(s => f === "Todas" || s.region === f);
  return <div className="grid gap-10 lg:grid-cols-5">
    <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start"><div className="relative aspect-[100/130] bg-carbon" role="img" aria-label="Mapa esquemático del recorrido de Ushuaia a Alaska">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 130" fill="none">
        <g stroke="#BFD7F5" strokeWidth=".3" opacity=".15">{[0, 1, 2, 3, 4, 5, 6].map(i => <ellipse key={i} cx="40" cy="65" rx={10 + i * 8} ry={14 + i * 10} />)}</g>
        <polyline points={path([...done, ...nextStops])} stroke="#BFD7F5" strokeWidth=".5" strokeDasharray="1.5 1.5" opacity=".6" />
        <polyline points={path(done)} stroke="#1E5BD8" strokeWidth="1" />
        {nextStops.map(n => <g key={n.name}><circle cx={n.x} cy={n.y} r="1.4" stroke="#BFD7F5" strokeWidth=".4" fill="#0B1F3A" /><text x={n.x + 2.5} y={n.y + 1} fill="#BFD7F5" fontSize="3" opacity=".8">{n.name}</text></g>)}
      </svg>
      {list.map(s => <button key={s.slug} onClick={() => setSel(s.slug)} aria-label={s.title} title={s.title} style={{ left: `${s.x}%`, top: `${(s.y / 130) * 100}%` }} className={`absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-crema transition-all ${sel === s.slug ? "scale-150 bg-arena" : "bg-tierra"}`} />)}
      <p className="absolute bottom-2 left-3 right-3 text-[10px] uppercase tracking-widest text-arena/80">● Recorrido · ○ Próximos destinos</p></div>
      <p className="mt-2 text-xs text-gris">Mapa esquemático. Tocá un punto para resaltar la etapa.</p></div>
    <div className="lg:col-span-3"><div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar">{regions.map(r => <button key={r} onClick={() => setF(r)} aria-pressed={f === r} className={`min-h-[44px] border px-4 text-sm ${f === r ? "border-carbon bg-carbon text-white" : "border-tierra/40 hover:bg-arena/40"}`}>{r}</button>)}</div>
      <ol className="space-y-8">{list.map(s => <li key={s.slug} onMouseEnter={() => setSel(s.slug)} className={`grid gap-4 border-l-2 pl-5 sm:grid-cols-5 ${sel === s.slug ? "border-tierra" : "border-arena"}`}>
        <Img src={photo(s.photo)} alt={s.title} className="aspect-[4/3] w-full sm:col-span-2" />
        <div className="sm:col-span-3"><p className="text-xs tracking-widest text-tierra">ETAPA {stages.indexOf(s) + 1} · {s.chapters.toUpperCase()} · {s.place.toUpperCase()}</p><h3 className="serif text-2xl">{s.title}</h3><p className="mt-2 text-sm text-gris">{s.desc}</p><Link href={`/recorrido/${s.slug}`} className="mt-3 inline-block font-medium text-tierra">Descubrir etapa →</Link></div></li>)}</ol>
      <div className="mt-12 bg-arena/40 p-6"><p className="text-xs uppercase tracking-widest text-tierra">Próximamente</p><p className="mt-2 text-gris">{nextStops.map(n => n.name).join(" → ")} 🏁</p></div></div></div>;
}
