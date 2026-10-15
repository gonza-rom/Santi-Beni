import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/videos/Gallery";
import Img from "@/components/ui/Img";
import { Kicker, PageHero, Social, Wrap } from "@/components/ui/ui";
import { allStageEpisodes, episodes, fmtDate, fmtViews, site, ytThumb, ytWatch } from "@/lib/data";
export const metadata: Metadata = { title: "Videos", description: "Videos del viaje de Ushuaia a Alaska en una Honda Wave 110cc, guías para viajar en baja cilindrada y viajes anteriores." };
// Videos del canal que no son capítulos de la serie: guías y viajes anteriores
const extras = Object.values(episodes).filter(e => !allStageEpisodes.includes(e.id));
export default function Videos() {
  return <><PageHero kicker="🎥 VIDEOS" title="Videos destacados" photoKey="santi" sub="Los capítulos más vistos de la serie, guías para viajar en 110 y los viajes de antes." />
  <Wrap className="py-16"><Kicker>Los más vistos</Kicker><div className="mt-6"><Gallery /></div>
    <div className="mt-12 bg-carbon p-8 text-center text-crema md:p-12"><p className="serif text-3xl">¿Querés verlos todos en orden?</p><p className="mt-3 text-crema/70">En el recorrido están los {allStageEpisodes.length} videos de la serie, ordenados por etapa y con su resumen.</p><Link href="/recorrido" className="mt-6 inline-flex min-h-[44px] items-center bg-tierra px-6 text-sm font-medium text-white hover:bg-arena hover:text-carbon">Ver el recorrido capítulo por capítulo</Link></div>
    <Kicker><span className="mt-16 block">Guías y viajes anteriores</span></Kicker><h2 className="serif mt-3 text-3xl">Antes de la serie</h2>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{extras.map(e => <a key={e.id} href={ytWatch(e.id)} target="_blank" rel="noopener noreferrer" className="group"><div className="relative overflow-hidden"><Img src={ytThumb(e.id)} alt="" className="aspect-video w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute bottom-1 right-1 bg-carbon/85 px-1.5 text-[10px] text-white">{e.duration}</span></div><h3 className="mt-2 text-sm font-medium leading-snug group-hover:underline">{e.title}</h3><p className="text-xs text-gris">{fmtDate(e.date)} · {fmtViews(e.views)} vistas</p></a>)}</div>
    <div className="mt-16 border-t border-arena pt-10 text-center"><p className="serif text-2xl">¿Querés ver más?</p><p className="mt-2 text-sm text-gris">Shorts, reels y el día a día en las redes. Canal: <a href={site.youtube} className="text-tierra underline" target="_blank" rel="noopener noreferrer">@SANTIBENIMOTOVIAJERO</a></p><Social className="mt-6 justify-center text-carbon" /></div></Wrap></>;
}
