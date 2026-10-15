"use client";
import { useCallback, useEffect, useState } from "react";
import { shotSrc, shots } from "@/lib/gallery";
const tags = ["Todas", ...Array.from(new Set(shots.map(s => s.tag)))];
const PAGE = 36; // fotos por tanda, para que cargue rápido en el celular
// Galería en columnas con filtro por categoría y visor a pantalla completa (teclado y gestos)
export default function PhotoGrid() {
  const [f, setF] = useState("Todas"); const [cur, setCur] = useState<number | null>(null); const [x0, setX0] = useState<number | null>(null); const [n, setN] = useState(PAGE);
  const list = shots.filter(s => f === "Todas" || s.tag === f);
  const go = useCallback((d: number) => setCur(c => c === null ? c : (c + d + list.length) % list.length), [list.length]);
  useEffect(() => {
    if (cur === null) return; document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setCur(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k); return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [cur, go]);
  const s = cur !== null ? list[cur] : null;
  return <>
    <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filtrar fotos">{tags.map(t => <button key={t} onClick={() => { setF(t); setN(PAGE); }} aria-pressed={f === t} className={`min-h-[44px] shrink-0 border px-4 text-sm ${f === t ? "border-carbon bg-carbon text-white" : "border-tierra/40 hover:bg-arena/40"}`}>{t} <span className="opacity-60">{t === "Todas" ? shots.length : shots.filter(s => s.tag === t).length}</span></button>)}</div>
    <div className="columns-2 gap-3 md:columns-3 lg:columns-4">{list.slice(0, n).map((p, i) => <button key={p.id} onClick={() => setCur(i)} data-reveal className="group relative mb-3 block w-full overflow-hidden break-inside-avoid" aria-label={`Ver foto: ${p.caption}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={shotSrc(p.id, true)} alt={p.caption} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon/80 to-transparent p-3 pt-8 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">{p.caption}</span></button>)}</div>
    {n < list.length && <div className="mt-8 text-center"><button onClick={() => setN(n + PAGE)} className="min-h-[44px] bg-carbon px-8 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-tierra">Ver más fotos ({list.length - n} restantes)</button></div>}
    {s && <div role="dialog" aria-modal="true" aria-label={s.caption} className="page-in fixed inset-0 z-50 flex flex-col bg-carbon/95 text-white" onClick={() => setCur(null)}
      onTouchStart={e => setX0(e.touches[0].clientX)} onTouchEnd={e => { if (x0 !== null) { const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); } setX0(null); }}>
      <div className="flex items-center justify-between p-4 text-sm"><span>{cur! + 1} / {list.length}</span><button autoFocus onClick={() => setCur(null)} className="min-h-[44px] border border-white/60 px-4 hover:bg-white hover:text-carbon">Cerrar ✕</button></div>
      <div className="relative flex flex-1 items-center justify-center px-2 sm:px-16" onClick={e => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={s.id} src={shotSrc(s.id)} alt={s.caption} className="page-in max-h-[78vh] max-w-full object-contain" />
        <button onClick={() => go(-1)} aria-label="Anterior" className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl hover:bg-white/25 sm:flex">‹</button>
        <button onClick={() => go(1)} aria-label="Siguiente" className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl hover:bg-white/25 sm:flex">›</button></div>
      <p className="p-4 pb-6 text-center text-sm text-crema/85">{s.caption} <span className="text-arena">· {s.tag}</span></p></div>}
  </>;
}
