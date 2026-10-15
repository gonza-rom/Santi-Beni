import type { Metadata } from "next";
import Link from "next/link";
import Img from "@/components/ui/Img";
import { PageHero, Wrap } from "@/components/ui/ui";
import { photo, posts } from "@/lib/data";
export const metadata: Metadata = { title: "Diario de ruta", description: "Historias, consejos, camping y todo sobre la moto en el viaje de Ushuaia a Alaska." };
export default function Diario() {
  return <><PageHero kicker="DIARIO" title="Diario de ruta" photoKey="ripio" sub="Historias, consejos y lo que pasa entre kilómetro y kilómetro." /><Wrap className="py-16">
  <div data-reveal-group className="space-y-14">{posts.map((p, i) => <Link key={p.slug} href={`/diario/${p.slug}`} className={`group grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
    <div className="overflow-hidden"><Img src={photo(p.photo)} alt="" className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-105" /></div>
    <div><p className="text-xs tracking-widest text-tierra">{p.category.toUpperCase()} · {p.date.toUpperCase()}</p><h2 className="serif mt-2 text-3xl group-hover:underline">{p.title}</h2><p className="mt-3 text-gris">{p.summary}</p><span className="mt-4 inline-block font-medium text-tierra">Leer →</span></div></Link>)}</div></Wrap></>;
}
