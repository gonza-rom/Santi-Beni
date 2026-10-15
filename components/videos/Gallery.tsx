"use client";
import { useEffect, useRef, useState } from "react";
import Img from "@/components/ui/Img";
import { videos, ytEmbed, ytThumb, ytWatch } from "@/lib/data";
export default function Gallery() {
  const [cur, setCur] = useState<string | null>(null); const back = useRef<HTMLElement | null>(null);
  const v = videos.find(x => x.id === cur);
  const close = () => { setCur(null); back.current?.focus(); };
  useEffect(() => { if (!cur) return; const k = (e: KeyboardEvent) => { if (e.key === "Escape") close(); }; window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); });
  return <><div data-reveal-group className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{videos.map(x => <button key={x.id} onClick={e => { back.current = e.currentTarget; setCur(x.id); }} className="group text-left"><div className="relative overflow-hidden"><Img src={ytThumb(x.id)} alt="" className="aspect-video w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-0 flex items-center justify-center bg-carbon/30 text-4xl text-white transition-colors group-hover:bg-carbon/10">▶</span><span className="absolute left-3 top-3 bg-carbon/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white">{x.views} vistas</span></div><h3 className="serif mt-3 text-xl">{x.title}</h3><p className="text-sm text-gris">{x.desc}</p></button>)}</div>
  {v && <div role="dialog" aria-modal="true" aria-label={v.title} className="page-in fixed inset-0 z-50 flex items-center justify-center bg-carbon/95 p-5" onClick={close}><div className="w-full max-w-4xl text-white" onClick={e => e.stopPropagation()}>
    <iframe src={`${ytEmbed(v.id)}?autoplay=1`} title={v.title} className="aspect-video w-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4"><div><h3 className="serif text-xl">{v.title}</h3><a href={ytWatch(v.id)} target="_blank" rel="noopener noreferrer" className="text-sm text-arena underline">Ver en YouTube ↗</a></div><button autoFocus onClick={close} className="min-h-[44px] shrink-0 border border-white/60 px-5 hover:bg-white hover:text-carbon">Cerrar</button></div></div></div>}</>;
}
