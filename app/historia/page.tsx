import type { Metadata } from "next";
import Img from "@/components/ui/Img";
import { Btn, Kicker, PageHero, Wrap } from "@/components/ui/ui";
import { photo, site } from "@/lib/data";
export const metadata: Metadata = { title: "Historia", description: "Santi Beni, cordobés, dejó todo para unir Ushuaia con Alaska en su Honda Wave 110cc, La Wavelona." };
const chapters: [string, string, string][] = [
  ["La decisión", "ushuaia", "¿Vale la pena venderlo todo por un sueño? Para mí, sí. Renuncié a mi trabajo, vendí mis pertenencias y en octubre de 2025 salí de Córdoba rumbo a Ushuaia: la “prueba piloto” de 13.500 km por Mendoza, Neuquén, la Carretera Austral y Tierra del Fuego."],
  ["El regreso por la Patagonia y Chile", "ripio", "Desde Ushuaia empecé a subir: vientos de 100 km/h, los 73 malditos de la Ruta 40, quedarme sin nafta, una cadena cortada antes de Bariloche y meses recorriendo Chile con amigos motoviajeros como Poli y Walter. Cada problema mecánico fue una lección."],
  ["Los Andes y la vuelta a casa", "moto", "Crucé la cordillera por el Paso Los Libertadores con nieve y volví a Córdoba después de más de 21.000 km. El reencuentro con mi abuela y el abrazo con mi mamá me recordaron por qué hago todo esto."],
  ["Rumbo a Alaska", "hero", "El 19 de agosto de 2026 arrancó la etapa grande: Córdoba, La Rioja, Mina La Mexicana a 4.500 msnm, Catamarca y Tucumán. Comparto todo en YouTube, Instagram y TikTok con una comunidad que no para de crecer."],
];
const gear = [["Moto", "Honda Wave 110cc · “La Wavelona”"], ["Protección", "Defensas, parabrisas alto y faros auxiliares"], ["Carga", "Alforjas laterales, bolso estanco y bidón extra"], ["Camping", "Carpa, cocina y equipo de supervivencia"], ["Cámaras", "GoPro en el casco, drone y micrófonos"], ["Casco", "LS2 doble propósito"]];
export default function Historia() {
  return <><PageHero kicker="HISTORIA" title="La historia detrás del viaje" photoKey="portrait" sub={site.motto} />
  <Wrap className="py-20"><Kicker>Sobre mí</Kicker>
    <p className="serif mt-6 max-w-3xl text-2xl leading-relaxed">¡Hola! Soy Santi, un cordobés que un día decidió dejarlo todo, subirse a su Honda Wave 110cc y salir a cumplir el sueño de unir Ushuaia con Alaska. Mi “Wavelona” y yo demostramos todos los días que para viajar no hace falta una moto gigante: solo ganas de arrancar.</p>
    <p className="mt-6 max-w-3xl leading-relaxed text-gris">Sin lujos ni alta cilindrada: viajo con bajo presupuesto, comparto tips de mecánica y supervivencia para motoviajeros en baja cilindrada, paisajes increíbles, encuentros inesperados y mucho humor.</p>
    {chapters.map(([t, k, d], i) => <div key={t} data-reveal className={`mt-20 grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}><Img src={photo(k)} alt={t} className="aspect-[4/3] w-full" /><div><p className="serif text-5xl text-arena">0{i + 1}</p><h2 className="serif mt-2 text-3xl">{t}</h2><p className="mt-4 leading-relaxed text-gris">{d}</p></div></div>)}
    <h2 className="serif mt-24 text-3xl">Galería</h2><div data-reveal-group className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{["cordillera", "ripio", "cordillera2", "portrait"].map(k => <Img key={k} src={photo(k)} alt="Foto del viaje" className="aspect-square w-full" />)}</div></Wrap>
  <section className="bg-carbon py-20 text-crema"><Wrap className="grid items-center gap-10 md:grid-cols-2"><div><Kicker light>La compañera de ruta</Kicker><h2 className="serif mt-3 text-4xl">La Wavelona: Honda Wave 110cc</h2><p className="mt-4 text-crema/70">Económica, confiable y fácil de reparar en cualquier pueblo. Ya aguantó ripio patagónico, nieve en los Andes, túneles inundados y 4.500 msnm.</p>
    <dl className="mt-8 divide-y divide-white/10">{gear.map(([l, v]) => <div key={l} className="flex justify-between gap-4 py-3 text-sm"><dt className="text-arena">{l}</dt><dd className="text-right">{v}</dd></div>)}</dl></div><Img src={photo("hero")} alt="La Honda Wave preparada para el viaje" className="aspect-square w-full" /></Wrap></section>
  <section className="py-20 text-center"><h2 className="serif text-3xl">¿Seguimos por el camino?</h2><div className="mt-6 flex flex-wrap justify-center gap-3"><Btn href="/recorrido" dark>Explorar el recorrido</Btn><a href={site.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center border border-carbon px-6 text-sm font-medium hover:bg-carbon hover:text-white">Ver el canal de YouTube ↗</a></div></section></>;
}
