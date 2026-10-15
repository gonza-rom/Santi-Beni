import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/ui/Img";
import { Kicker, Social, VideoEmbed, Wrap } from "@/components/ui/ui";
import { allStageEpisodes, capLabel, ep, fmtDate, fmtViews, stageOf, stages, ytThumb, ytWatch } from "@/lib/data";
export const generateStaticParams = () => allStageEpisodes.map(id => ({ id }));
export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => { const e = ep(params.id); return e ? { title: `${capLabel(e)}: ${e.title}`, description: e.summary.slice(0, 160), openGraph: { images: [ytThumb(e.id)] } } : { title: "Capítulo" }; };
const secs = (t: string) => t.split(":").reduce((a, b) => a * 60 + +b, 0);
export default function Capitulo({ params }: { params: { id: string } }) {
  const e = ep(params.id); const s = stageOf(params.id); if (!e || !s) notFound();
  const k = allStageEpisodes.indexOf(e.id); const prev = k > 0 ? ep(allStageEpisodes[k - 1]) : null; const next = k < allStageEpisodes.length - 1 ? ep(allStageEpisodes[k + 1]) : null;
  const n = stages.indexOf(s) + 1;
  return <><section className="bg-carbon pb-12 pt-28 text-white"><Wrap><nav className="text-xs uppercase tracking-widest text-arena/80" aria-label="Migas"><Link href="/recorrido" className="hover:text-arena">Recorrido</Link> / <Link href={`/recorrido/${s.slug}`} className="hover:text-arena">Etapa {n}: {s.title}</Link></nav>
    <p className="mt-6 text-xs uppercase tracking-[.3em] text-arena">{capLabel(e)} · {fmtDate(e.date)} · {e.duration} · {fmtViews(e.views)} vistas</p><h1 className="serif mt-3 max-w-4xl text-3xl leading-tight sm:text-5xl">{e.title}</h1>
    <div className="mt-8 max-w-4xl"><VideoEmbed id={e.id} title={e.title} /></div></Wrap></section>
  <Wrap className="grid gap-12 py-14 md:grid-cols-3"><article className="md:col-span-2"><Kicker>De qué trata</Kicker>{e.summary.split("\n\n").map((p, j) => <p key={j} className="mt-5 text-lg leading-8">{p}</p>)}
    <p className="mt-6 text-xs text-gris">Texto tomado de la descripción del video en YouTube.</p>
    <div className="mt-10 flex flex-wrap gap-3"><a href={ytWatch(e.id)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center bg-tierra px-6 text-sm font-medium text-white hover:bg-carbon">Ver en YouTube y comentar ↗</a><Link href="/apoyar" className="inline-flex min-h-[44px] items-center border border-carbon px-6 text-sm font-medium hover:bg-carbon hover:text-white">Aportar 1 litro de nafta ⛽</Link></div></article>
    <aside>{e.timestamps.length > 0 && <><h2 className="serif text-2xl">En este video</h2><ol className="mt-4 divide-y divide-arena text-sm">{e.timestamps.map(([t, l]) => <li key={t + l}><a href={`${ytWatch(e.id)}&t=${secs(t)}s`} target="_blank" rel="noopener noreferrer" className="flex gap-3 py-2.5 hover:text-tierra"><span className="w-12 shrink-0 font-medium text-tierra">{t}</span><span>{l}</span></a></li>)}</ol></>}
      <div className={e.timestamps.length ? "mt-10" : ""}><h2 className="serif text-2xl">Etapa {n}</h2><Link href={`/recorrido/${s.slug}`} className="mt-3 block text-tierra underline">{s.title}</Link><p className="mt-2 text-sm text-gris">{s.desc}</p></div>
      <div className="mt-10"><h2 className="serif text-2xl">Seguí el viaje</h2><Social className="mt-4 text-carbon" /></div></aside></Wrap>
  <Wrap className="grid gap-4 border-t border-arena py-10 sm:grid-cols-2">{prev ? <Link href={`/recorrido/capitulo/${prev.id}`} className="group flex items-center gap-4"><Img src={ytThumb(prev.id)} alt="" className="aspect-video w-32 shrink-0" /><span><span className="text-xs uppercase tracking-widest text-tierra">← Anterior · {capLabel(prev)}</span><span className="serif block group-hover:underline">{prev.title}</span></span></Link> : <span />}
    {next ? <Link href={`/recorrido/capitulo/${next.id}`} className="group flex items-center justify-end gap-4 text-right"><span><span className="text-xs uppercase tracking-widest text-tierra">Siguiente · {capLabel(next)} →</span><span className="serif block group-hover:underline">{next.title}</span></span><Img src={ytThumb(next.id)} alt="" className="aspect-video w-32 shrink-0" /></Link> : <span />}</Wrap></>;
}
