import type { Metadata } from "next";
import Explorer from "@/components/trips/Explorer";
import { PageHero, Wrap } from "@/components/ui/ui";
import { stageCaps, stageRange } from "@/lib/data";
import { getLive, REVALIDATE } from "@/lib/live";
export const metadata: Metadata = { title: "Recorrido", description: "Mapa y etapas del viaje de Ushuaia a Alaska en una Honda Wave 110cc." };
export const revalidate = REVALIDATE;
export default async function Recorrido() {
  const { stages, episodes } = await getLive();
  const list = stages.map(s => ({ ...s, range: stageRange(s, episodes), caps: stageCaps(s, episodes), eps: s.episodes.map(id => ({ id, cap: episodes[id].cap, title: episodes[id].title })) }));
  return <><PageHero kicker="RECORRIDO" title="El recorrido, video por video" photoKey="v04" sub="Todos los capítulos de YouTube ordenados por etapa: de Córdoba a Ushuaia, el regreso y el camino a Alaska." /><Wrap className="py-16"><Explorer stages={list} /></Wrap></>;
}
