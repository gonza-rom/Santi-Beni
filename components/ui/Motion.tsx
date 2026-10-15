"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
// Elementos que se animan solos al entrar en pantalla, además de los marcados con data-reveal
const AUTO = "main h2, main article p, main [data-reveal-group] > *, main dl > div";
// Animaciones al hacer scroll: revela elementos, parallax suave, barra de progreso y botón "volver arriba".
export function ScrollFX() {
  const path = usePathname(); const [pct, setPct] = useState(0); const [top, setTop] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    const scan = () => {
      document.querySelectorAll<HTMLElement>(AUTO).forEach(el => { if (!el.closest("[data-noreveal]") && !el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", ""); });
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach(g => Array.from(g.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--d", `${Math.min(i, 8) * 90}ms`)));
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(el => io.observe(el));
    };
    scan(); const mo = new MutationObserver(scan); mo.observe(document.querySelector("main")!, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [path]);
  useEffect(() => {
    let raf = 0;
    const f = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const h = document.documentElement; const y = h.scrollTop; setPct(y / Math.max(1, h.scrollHeight - h.clientHeight)); setTop(y > 900);
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach(el => el.style.setProperty("--py", `${Math.min(y, 1200) * 0.25}px`));
    }); };
    f(); window.addEventListener("scroll", f, { passive: true }); return () => { window.removeEventListener("scroll", f); cancelAnimationFrame(raf); };
  }, [path]);
  return <>
    <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-tierra to-arena" style={{ transform: `scaleX(${pct})` }} />
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Volver arriba" className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-tierra text-xl text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-carbon ${top ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>↑</button></>;
}
// Número que cuenta desde 0 cuando aparece en pantalla. Acepta formatos como "69,7 K", "+21.000" o "50".
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/); const ref = useRef<HTMLSpanElement>(null); const [n, setN] = useState<number | null>(null);
  const dec = m && m[2].includes(",") ? m[2].split(",")[1].length : 0; const target = m ? parseFloat(m[2].replace(/\./g, "").replace(",", ".")) : 0;
  useEffect(() => {
    if (!m || !ref.current) return; let raf = 0; setN(0);
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); const t0 = performance.now();
      const step = (t: number) => { const p = Math.min(1, (t - t0) / 1600); setN(target * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); });
    io.observe(ref.current); return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!m) return <>{value}</>;
  return <span ref={ref}>{m[1]}{(n ?? target).toLocaleString("es-AR", { minimumFractionDigits: dec, maximumFractionDigits: dec })}{m[3]}</span>;
}
