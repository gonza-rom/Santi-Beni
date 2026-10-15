import type { Metadata } from "next";
import Explorer from "@/components/trips/Explorer";
import { PageHero, Wrap } from "@/components/ui/ui";
export const metadata: Metadata = { title: "Recorrido", description: "Mapa y etapas del viaje de Ushuaia a Alaska en una Honda Wave 110cc." };
export default function Recorrido() { return <><PageHero kicker="RECORRIDO" title="El recorrido, video por video" photoKey="moto" sub="Todos los capítulos de YouTube ordenados por etapa: de Córdoba a Ushuaia, el regreso y el camino a Alaska." /><Wrap className="py-16"><Explorer /></Wrap></>; }
