import type { Metadata } from "next";
import AliasBox from "@/components/donations/AliasBox";
import Img from "@/components/ui/Img";
import { Kicker, PageHero, Social, Wrap } from "@/components/ui/ui";
import { photo, support } from "@/lib/data";
export const metadata: Metadata = { title: "Aportar al viaje", description: `Colaborá con el viaje de Ushuaia a Alaska. Alias ${support.platform}: ${support.alias}` };
export default function Apoyar() {
  return <><PageHero kicker="APORTAR" title="Vos también sos parte de esta aventura" photoKey="cordillera" sub="Este viaje se sostiene gracias a la comunidad que lo acompaña. Cualquier aporte, por chico que sea, suma kilómetros." />
  <Wrap className="py-16"><div className="grid items-start gap-10 md:grid-cols-2">
    <div><Kicker>Cómo aportar</Kicker><h2 className="serif mt-3 text-3xl">Transferí con {support.platform}</h2>
      <ol className="mt-6 space-y-4">{["Copiá el alias con el botón.", `Abrí ${support.platform} o la app de tu banco.`, "Elegí “Transferir”, pegá el alias y poné el monto que quieras.", "Si querés, mandame un mensaje por Instagram: ¡me encanta saber quién me acompaña!"].map((t, i) => <li key={i} className="flex gap-4"><span className="serif flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tierra text-white">{i + 1}</span><span className="pt-1.5 text-gris">{t}</span></li>)}</ol></div>
    <AliasBox /></div>
  <div className="mt-20 grid gap-10 md:grid-cols-3">{[["⛽ Nafta y aceite", "El combustible es el gasto de todos los días. Con lo que cuesta un café, la Wave recorre más de 100 km."], ["🔧 Mantenimiento", "Cubiertas, cadena, frenos y service. Una moto bien cuidada es la clave para llegar a Alaska."], ["🏕️ Camping y comida", "Carpa, equipo para el frío y algo caliente al final del día en los lugares más remotos."]].map(([t, d]) => <div key={t} className="border-t-2 border-tierra pt-4"><h3 className="serif text-2xl">{t}</h3><p className="mt-2 text-gris">{d}</p></div>)}</div>
  <div className="mt-20 grid items-center gap-10 bg-arena/40 p-8 md:grid-cols-2 md:p-12"><div><Kicker>Otras formas de apoyar</Kicker><h2 className="serif mt-3 text-3xl">No todo es plata</h2>
    <ul className="mt-5 space-y-2 text-gris"><li>❤️ Seguir, comentar y compartir los reels</li><li>▶️ Suscribirte al canal de YouTube</li><li>🤝 Recomendar marcas que quieran sumarse como sponsors</li><li>🏠 Ofrecer un lugar para acampar o un mate en el camino</li></ul><Social className="mt-6 text-carbon" /></div>
    <Img src={photo("santi")} alt="Santi mostrando su equipo de grabación" className="aspect-video w-full" /></div>
  <p className="serif mt-20 text-center text-3xl">¡Gracias por ser parte! 🙌</p>
  <Img src={photo("cordillera2")} alt="La Wave sobre un puente en la cordillera" className="mt-10 aspect-[21/9] w-full" /></Wrap></>;
}
