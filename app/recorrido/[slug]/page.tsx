import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/ui/Img";
import { Kicker, PageHero, VideoEmbed, Wrap } from "@/components/ui/ui";
import { photo, site, stages } from "@/lib/data";
export const generateStaticParams = () => stages.map(s => ({ slug: s.slug }));
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => { const s = stages.find(x => x.slug === params.slug); return { title: s?.title ?? "Etapa", description: s?.desc }; };
export default function Etapa({ params }: { params: { slug: string } }) {
  const i = stages.findIndex(x => x.slug === params.slug); if (i < 0) notFound();
  const s = stages[i]; const others = stages.filter(x => x.slug !== s.slug);
  return <><PageHero kicker={`ETAPA ${i + 1} · ${s.chapters.toUpperCase()} · ${s.place.toUpperCase()}`} title={s.title} photoKey={s.photo} sub={s.desc} />
  <Wrap className="grid gap-12 py-16 md:grid-cols-3"><div className="md:col-span-2"><Kicker>Relato de la etapa</Kicker>{s.text.map((t, j) => <p key={j} className="mt-5 max-w-2xl text-lg leading-relaxed">{t}</p>)}
    <div className="mt-10 grid grid-cols-2 gap-3">{s.gallery.map(k => <Img key={k} src={photo(k)} alt={`Foto de ${s.title}`} className="aspect-[4/3] w-full" />)}</div>
    {s.video && <div className="mt-10"><Kicker>Mirá esta etapa</Kicker><div className="mt-3"><VideoEmbed id={s.video} title={s.title} /></div></div>}
    <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-tierra">Ver todos los capítulos en YouTube ↗</a></div>
    <aside><h2 className="serif text-2xl">Datos del trayecto</h2><dl className="mt-4 divide-y divide-arena">{s.data.map(d => <div key={d.label} className="flex justify-between py-3"><dt className="text-gris">{d.label}</dt><dd>{d.value}</dd></div>)}</dl>
      <h2 className="serif mt-10 text-2xl">Otras etapas</h2><ul className="mt-3 space-y-2">{others.map(o => <li key={o.slug}><Link className="text-tierra underline" href={`/recorrido/${o.slug}`}>{o.title}</Link></li>)}</ul></aside></Wrap>
  <Wrap className="flex justify-between gap-4 border-t border-arena py-8 text-sm">{i > 0 ? <Link href={`/recorrido/${stages[i - 1].slug}`} className="text-tierra">← {stages[i - 1].title}</Link> : <span />}{i < stages.length - 1 ? <Link href={`/recorrido/${stages[i + 1].slug}`} className="text-right text-tierra">{stages[i + 1].title} →</Link> : <span />}</Wrap></>;
}
