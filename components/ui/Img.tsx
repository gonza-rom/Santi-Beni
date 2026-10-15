"use client";
import { useState } from "react";
export default function Img({ src, alt, className = "", eager = false }: { src?: string; alt: string; className?: string; eager?: boolean }) {
  const [bad, setBad] = useState(!src);
  if (bad) return (
    <div role="img" aria-label={alt} className={`relative overflow-hidden bg-gradient-to-br from-oliva via-tierra to-carbon ${className}`}>
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#BFD7F5">
        {[0,30,60,90,120].map(o => <path key={o} d={`M-20 ${200+o}C80 ${130+o} 140 ${230+o} 230 ${150+o}S360 ${70+o} 430 ${130+o}`} />)}
      </svg>
      <span className="absolute bottom-2 left-3 text-[10px] uppercase tracking-widest text-arena/80">Foto pendiente</span>
    </div>);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setBad(true)} className={`object-cover ${className}`} />;
}
