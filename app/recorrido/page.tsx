import type { Metadata } from "next";
import Explorer from "@/components/trips/Explorer";
import { PageHero, Wrap } from "@/components/ui/ui";
export const metadata: Metadata = { title: "Recorrido", description: "Mapa y etapas del viaje de Ushuaia a Alaska en una Honda Wave 110cc." };
export default function Recorrido() { return <><PageHero kicker="RECORRIDO" title="De Ushuaia a Alaska, etapa por etapa" photoKey="moto" sub="Explorá el mapa, filtrá por región y descubrí la historia de cada tramo." /><Wrap className="py-16"><Explorer /></Wrap></>; }
