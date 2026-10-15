import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/ui/Img";
import { Kicker, PageHero, Wrap } from "@/components/ui/ui";
import { capLabel, ep, fmtDate, fmtViews, photo, site, stageCaps, stageRange, stages, ytThumb } from "@/lib/data";
export const generateStaticParams = () => stages.map(s => ({ slug: s.slug }));
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => { const s = stages.find(x => x.slug === params.slug); return { title: s?.title ?? "Etapa", description: s?.desc }; };
export default function Etapa({ params }: { params: { slug: string } }) {
  const i = stages.findIndex(x => x.slug === params.slug); if (i < 0) notFound();
  const s = stages[i]; const eps = s.episodes.map(ep);
  const views = eps.reduce((n, e) => n + e.views, 0);
  return <><PageHero kicker={`ETAPA ${i + 1} · ${s.leg.toUpperCase()}`} title={s.title} photoKey={s.photo} sub={s.desc} />
  <Wrap className="grid gap-12 py-16 md:grid-cols-3"><div className="md:col-span-2"><Kicker>Resumen de la etapa</Kicker>{s.text.map((t, j) => <p key={j} className="mt-5 max-w-2xl text-lg leading-relaxed">{t}</p>)}
    <div className="mt-10 grid grid-cols-2 gap-3">{s.gallery.map(k => <Img key={k} src={photo(k)} alt={`Foto de ${s.title}`} className="aspect-[4/3] w-full" />)}</div></div>
    <aside><h2 className="serif text-2xl">Datos de la etapa</h2><dl className="mt-4 divide-y divide-arena">{[{ label: "Zona", value: s.place }, { label: "Fechas", value: stageRange(s) }, ...(stageCaps(s) ? [{ label: "Capítulos", value: stageCaps(s) }] : []), { label: "Videos", value: String(eps.length) }, { label: "Vistas totales", value: fmtViews(views) }, ...s.data].map(d => <div key={d.label} className="flex justify-between gap-4 py-3"><dt className="text-gris">{d.label}</dt><dd className="text-right">{d.value}</dd></div>)}</dl>
      <h2 className="serif mt-10 text-2xl">Otras etapas</h2><ol className="mt-3 space-y-2 text-sm">{stages.map((o, j) => <li key={o.slug}>{o.slug === s.slug ? <span className="font-medium">{j + 1}. {o.title}</span> : <Link className="text-tierra underline" href={`/recorrido/${o.slug}`}>{j + 1}. {o.title}</Link>}</li>)}</ol></aside></Wrap>

  <section className="bg-arena/40 py-16"><Wrap><div className="flex flex-wrap items-end justify-between gap-4"><div><Kicker>Los videos de esta etapa</Kicker><h2 className="serif mt-3 text-4xl">Capítulo por capítulo</h2></div><a href={site.youtube} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-tierra">Canal completo en YouTube ↗</a></div>
    <ol className="mt-10 space-y-8">{eps.map(e => <li key={e.id}><Link href={`/recorrido/capitulo/${e.id}`} className="group grid gap-5 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:grid-cols-5 sm:p-5">
      <div className="relative overflow-hidden sm:col-span-2"><Img src={ytThumb(e.id)} alt="" className="aspect-video w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-0 flex items-center justify-center bg-carbon/20 text-4xl text-white">▶</span><span className="absolute bottom-2 right-2 bg-carbon/85 px-1.5 py-0.5 text-xs text-white">{e.duration}</span></div>
      <div className="sm:col-span-3"><p className="text-xs tracking-widest text-tierra">{capLabel(e).toUpperCase()} · {fmtDate(e.date).toUpperCase()} · {fmtViews(e.views)} VISTAS</p><h3 className="serif mt-1 text-2xl group-hover:underline">{e.title}</h3><p className="mt-2 line-clamp-4 whitespace-pre-line text-sm text-gris">{e.summary}</p><span className="mt-3 inline-block text-sm font-medium text-tierra">Ver capítulo →</span></div></Link></li>)}</ol></Wrap></section>

  <Wrap className="flex justify-between gap-4 py-8 text-sm">{i > 0 ? <Link href={`/recorrido/${stages[i - 1].slug}`} className="text-tierra">← {stages[i - 1].title}</Link> : <span />}{i < stages.length - 1 ? <Link href={`/recorrido/${stages[i + 1].slug}`} className="text-right text-tierra">{stages[i + 1].title} →</Link> : <span />}</Wrap></>;
}
