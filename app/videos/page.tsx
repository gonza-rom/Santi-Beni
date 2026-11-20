import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/videos/Gallery";
import Img from "@/components/ui/Img";
import { Kicker, PageHero, Social, Wrap } from "@/components/ui/ui";
import { capLabel, fmtDate, fmtViews, guides, series, site, ytList, ytThumb, ytWatch } from "@/lib/data";
import { getLive, REVALIDATE } from "@/lib/live";
import { ArrowUpRight, Play, YouTube } from "@/components/ui/Icons";
export const revalidate = REVALIDATE;
export const metadata: Metadata = { title: "Videos", description: "Videos del viaje de Ushuaia a Alaska en una Honda Wave 110cc, guías para viajar en baja cilindrada y viajes anteriores." };
export default async function Videos() {
  const { top, allIds } = await getLive();
  const most = top.map(e => ({ id: e.id, title: e.title, desc: `${capLabel(e)} · ${fmtDate(e.date)}`, views: fmtViews(e.views), kind: "YouTube" as const }));
  return <><PageHero kicker="VIDEOS" title="Videos destacados" photoKey="santi" sub="Los capítulos más vistos de la Wavelona, guías para viajar en moto y las series completas." />
  <Wrap className="py-16"><Kicker>Los más vistos · solo la Wavelona</Kicker><div className="mt-6"><Gallery videos={most} /></div>
    <div className="mt-12 bg-carbon p-8 text-center text-crema md:p-12"><p className="serif text-3xl">¿Querés verlos todos en orden?</p><p className="mt-3 text-crema/70">En el recorrido están los {allIds.length} videos de la serie, ordenados por etapa y con su resumen.</p><Link href="/recorrido" className="mt-6 inline-flex min-h-[44px] items-center bg-tierra px-6 text-sm font-medium text-white hover:bg-arena hover:text-carbon">Ver el recorrido capítulo por capítulo</Link></div>
    <div className="mt-16 flex flex-wrap items-end justify-between gap-4"><div><Kicker>Guías</Kicker><h2 className="serif mt-3 text-3xl">{guides.title}</h2></div><a href={ytList(guides.list)} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-tierra inline-flex items-center gap-1.5"><YouTube className="h-4 w-4" />Ver la lista en YouTube <ArrowUpRight /></a></div>
    <div data-reveal-group className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">{guides.videos.map(v => <a key={v.id} href={`${ytWatch(v.id)}&list=${guides.list}`} target="_blank" rel="noopener noreferrer" className="group"><div className="relative overflow-hidden"><Img src={ytThumb(v.id)} alt="" className="aspect-video w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-0 flex items-center justify-center bg-carbon/25 text-white transition-colors group-hover:bg-carbon/10"><Play className="h-10 w-10 drop-shadow" /></span></div><h3 className="mt-2 text-sm font-medium leading-snug group-hover:underline">{v.title}</h3></a>)}</div>
    <Kicker><span className="mt-16 block">Series</span></Kicker><h2 className="serif mt-3 text-3xl">Para ver de corrido en YouTube</h2>
    <div data-reveal-group className="mt-6 grid gap-6 md:grid-cols-3">{series.map(s => <a key={s.list} href={ytList(s.list)} target="_blank" rel="noopener noreferrer" className="group block bg-white shadow-sm transition-shadow hover:shadow-md"><div className="relative overflow-hidden"><Img src={ytThumb(s.thumb)} alt="" className="aspect-video w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-y-0 right-0 flex w-1/3 flex-col items-center justify-center bg-carbon/80 text-white"><Play className="h-8 w-8" /><span className="mt-1 text-[10px] uppercase tracking-widest">Serie</span></span></div><div className="p-4"><h3 className="serif text-xl group-hover:underline">{s.title}</h3><p className="mt-1 text-sm text-gris">{s.desc}</p><span className="mt-3 inline-block text-sm font-medium text-tierra inline-flex items-center gap-1.5"><YouTube className="h-4 w-4" />Ver la serie en YouTube <ArrowUpRight /></span></div></a>)}</div>
    <div className="mt-16 border-t border-arena pt-10 text-center"><p className="serif text-2xl">¿Querés ver más?</p><p className="mt-2 text-sm text-gris">Shorts, reels y el día a día en las redes. Canal: <a href={site.youtube} className="text-tierra underline" target="_blank" rel="noopener noreferrer">@SANTIBENIMOTOVIAJERO</a></p><Social className="mt-6 justify-center text-carbon" /></div></Wrap></>;
}
