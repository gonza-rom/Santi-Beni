import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/ui/Img";
import { PageHero, Social, VideoEmbed, Wrap } from "@/components/ui/ui";
import { photo, posts } from "@/lib/data";
export const generateStaticParams = () => posts.map(p => ({ slug: p.slug }));
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => { const p = posts.find(x => x.slug === params.slug); return { title: p?.title ?? "Entrada", description: p?.summary }; };
export default function Post({ params }: { params: { slug: string } }) {
  const p = posts.find(x => x.slug === params.slug); if (!p) notFound();
  const more = posts.filter(x => x.slug !== p.slug).slice(0, 3);
  return <><PageHero kicker={`${p.category.toUpperCase()} · ${p.date.toUpperCase()}`} title={p.title} photoKey={p.photo} />
  <Wrap className="py-16"><article className="mx-auto max-w-2xl"><p className="serif text-2xl leading-relaxed text-gris">{p.summary}</p>{p.body.map((t, i) => <p key={i} className="mt-6 text-lg leading-8">{t}</p>)}
    {p.video && <div className="mt-10"><VideoEmbed id={p.video} title={p.title} /></div>}
    <div className="mt-12 border-t border-arena pt-8"><p className="text-sm text-gris">¿Te gustó? Seguí el viaje en redes:</p><Social className="mt-4 text-carbon" /></div>
    <Link href="/diario" className="mt-10 inline-block font-medium text-tierra">← Volver al diario</Link></article>
    <h2 className="serif mt-20 text-3xl">Seguir leyendo</h2><div data-reveal-group className="mt-6 grid gap-6 md:grid-cols-3">{more.map(m => <Link key={m.slug} href={`/diario/${m.slug}`} className="group"><div className="overflow-hidden"><Img src={photo(m.photo)} alt="" className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-105" /></div><p className="mt-3 text-xs tracking-widest text-tierra">{m.category.toUpperCase()}</p><h3 className="serif text-xl group-hover:underline">{m.title}</h3></Link>)}</div></Wrap></>;
}
