import type { Metadata } from "next";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import { PageHero, Social, Wrap } from "@/components/ui/ui";
import { shots } from "@/lib/gallery";
export const metadata: Metadata = { title: "Galería", description: "Fotos del viaje de Santi Beni en su Honda Wave 110cc: ruta, camping, nieve y la Wavelona." };
export default function Galeria() {
  return <><PageHero kicker="📸 GALERÍA" title="El viaje en fotos" photoKey="v39" sub={`${shots.length} fotos de la ruta, los acampes, la nieve y la Wavelona. Tocá una para verla en grande.`} />
  <Wrap className="py-14"><PhotoGrid /><div className="mt-16 border-t border-arena pt-10 text-center"><p className="serif text-2xl">Más fotos todos los días en Instagram</p><Social className="mt-6 justify-center text-carbon" /></div></Wrap></>;
}
