import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { PageHero, Social, Wrap } from "@/components/ui/ui";
import { site } from "@/lib/data";
export const metadata: Metadata = { title: "Contacto", description: "Contacto, prensa y colaboraciones con Santi Beni, motoviajero." };
export default function Contacto() {
  return <><PageHero kicker="CONTACTO" title="Hablemos de ruta" photoKey="cordillera" sub="Marcas, prensa, consejos de ruta o un lugar para acampar: escribime." /><Wrap className="grid gap-12 py-16 md:grid-cols-3"><div className="md:col-span-2"><ContactForm /></div>
  <aside className="space-y-8"><div><h2 className="serif text-2xl">Email</h2><p className="mt-2 text-sm text-gris">Contacto y colaboraciones.</p><a href={`mailto:${site.email}`} className="mt-2 inline-block break-all text-tierra underline">{site.email}</a></div><div><h2 className="serif text-2xl">Instagram</h2><p className="mt-2 text-sm text-gris">Es donde estoy más activo y respondo más rápido.</p><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-tierra underline">{site.igHandle} ↗</a></div>
    <div><h2 className="serif text-2xl">Colaboraciones</h2><p className="mt-2 text-sm text-gris">Canal de YouTube con 69,7 K suscriptores. Reels, reseñas de equipo, contenido de marca y sponsoreo del viaje Ushuaia – Alaska.</p></div>
    <Social className="text-carbon" /></aside></Wrap></>;
}
