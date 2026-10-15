import type { Metadata } from "next";
import Gallery from "@/components/videos/Gallery";
import { PageHero, Social, Wrap } from "@/components/ui/ui";
export const metadata: Metadata = { title: "Videos", description: "Videos y reels del viaje de Ushuaia a Alaska en una Honda Wave 110cc." };
export default function Videos() { return <><PageHero kicker="🎥 VIDEOS" title="Videos destacados" photoKey="santi" sub="Los videos largos de cada etapa en YouTube y el día a día en reels de Instagram." /><Wrap className="py-16"><Gallery /><div className="mt-16 border-t border-arena pt-10 text-center"><p className="serif text-2xl">¿Querés ver más?</p><Social className="mt-6 justify-center text-carbon" /></div></Wrap></>; }
