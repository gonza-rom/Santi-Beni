import Link from "next/link";
import Img from "@/components/ui/Img";
import AliasBox from "@/components/donations/AliasBox";
import { CountUp } from "@/components/ui/Motion";
import { Btn, Kicker, Social, VideoEmbed, Wrap } from "@/components/ui/ui";
import { now, photo, posts, site, stages, stats, videos, ytThumb } from "@/lib/data";
export default function Home() {
  return <>
  <section data-noreveal className="relative flex min-h-screen items-end overflow-hidden"><div data-parallax className="absolute inset-0"><Img src={photo("hero")} alt="La Honda Wave cargada frente a un túnel de roca roja" eager className="kenburns h-full w-full" /></div>
    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-carbon/20" />
    <Wrap className="fade relative w-full pb-24 pt-40 text-white"><p className="mb-4 text-xs tracking-[.35em] text-arena">🌎 {site.motto.toUpperCase()}</p>
      <h1 className="serif max-w-4xl text-5xl leading-[1.05] sm:text-7xl">De Ushuaia a Alaska en una Wave 110cc</h1>
      <p className="mt-6 text-lg text-crema/90">Moto • Camping • Trekking — un viaje por América contado kilómetro a kilómetro</p>
      <div className="mt-8 flex flex-wrap gap-3"><Btn href="/historia" dark>Conocé mi historia</Btn><Btn href="/apoyar">Aportá al viaje</Btn></div></Wrap>
    <a href="#presentacion" aria-label="Bajar" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-white">↓</a></section>

  <section className="border-b border-arena bg-white"><Wrap data-reveal-group className="grid grid-cols-2 divide-arena py-8 text-center md:grid-cols-4 md:divide-x">{stats.map(s => <div key={s.label} className="py-3"><p className="serif text-3xl text-tierra sm:text-4xl"><CountUp value={s.value} /></p><p className="mt-1 text-xs uppercase tracking-widest text-gris">{s.label}</p></div>)}</Wrap>
    <div className="overflow-hidden border-t border-arena bg-carbon py-3 text-sm uppercase tracking-[.3em] text-arena" aria-hidden><div className="marquee">{[0, 1].map(k => <span key={k} className="flex shrink-0">{["Ushuaia → Alaska", "Honda Wave 110cc", "Moto • Camping • Trekking", "La aventura es el coraje de animarse", "Bajo presupuesto", "Hecho en Córdoba"].map(t => <span key={t} className="px-8">{t} <span className="text-tierra">✦</span></span>)}</span>)}</div></div></section>

  <section id="presentacion" className="py-24"><Wrap className="grid items-center gap-12 md:grid-cols-5">
    <div data-reveal="left" className="md:col-span-3"><Kicker>Hola, soy Santi 👋</Kicker><h2 className="serif mt-5 text-4xl sm:text-5xl">Un cordobés, una Wave 110cc y el sueño de unir Ushuaia con Alaska</h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-gris">Un día decidí dejarlo todo: renuncié a mi trabajo, vendí mis cosas y me subí a “La Wavelona”, mi Honda Wave 110cc. Sin lujos ni motos de alta cilindrada: viajo con bajo presupuesto, acampando y aprendiendo mecánica en el camino. Ya recorrí más de 21.000 km por la Patagonia, Chile y los Andes, y ahora voy rumbo al norte. Destino final: Alaska.</p>
      <div className="mt-8 flex flex-wrap items-center gap-6"><Link href="/historia" className="inline-block border-b-2 border-tierra pb-1 font-medium text-tierra hover:text-carbon">Leer la historia completa →</Link><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-gris hover:text-tierra">Más activo en Instagram: {site.igHandle} ↗</a></div></div>
    <div data-reveal="right" className="overflow-hidden md:col-span-2"><Img src={photo("portrait")} alt="Santi sonriendo en la nieve de la cordillera" className="aspect-[3/4] w-full transition-transform duration-[1.5s] hover:scale-105" /></div></Wrap></section>

  <section className="bg-arena/40 py-24"><Wrap><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><Kicker>El recorrido</Kicker><h2 className="serif mt-3 text-4xl sm:text-5xl">Cada destino, una historia</h2></div><Link href="/recorrido" className="font-medium text-tierra underline underline-offset-4">Ver mapa y todas las etapas</Link></div>
    <div data-reveal-group className="grid gap-6 md:grid-cols-3">{["carretera-austral", "cruce-de-los-andes-y-vuelta-a-casa", "la-rioja-y-mina-la-mexicana"].map(k => stages.find(s => s.slug === k)!).map((s, i) => <Link key={s.slug} href={`/recorrido/${s.slug}`} className={`group block ${i === 1 ? "md:mt-12" : ""}`}>
      <div className="overflow-hidden"><Img src={photo(s.photo)} alt={s.title} className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-105" /></div>
      <p className="mt-4 text-xs uppercase tracking-widest text-tierra">{s.place}</p><h3 className="serif mt-1 text-2xl">{s.title}</h3><p className="mt-2 text-sm text-gris">{s.desc}</p><span className="mt-3 inline-block text-sm font-medium text-tierra">Descubrir etapa →</span></Link>)}</div></Wrap></section>

  <section className="bg-carbon py-24 text-crema"><Wrap className="grid items-center gap-10 md:grid-cols-2"><div data-reveal="zoom"><Img src={photo(now.photo)} alt={now.place} className="aspect-[16/10] w-full" /></div>
    <div><Kicker light><span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-arena" />Ahora mismo</Kicker><h2 className="serif mt-5 text-4xl sm:text-5xl">Por dónde anda la aventura</h2>
      <dl className="mt-6 space-y-2 text-crema/80"><div><dt className="inline text-arena">Lugar: </dt><dd className="inline">{now.place}</dd></div><div><dt className="inline text-arena">En qué ando: </dt><dd className="inline">{now.detail}</dd></div><div><dt className="inline text-arena">Actualizado: </dt><dd className="inline">{now.date}</dd></div></dl>
      <div className="mt-8 flex flex-wrap gap-3"><Btn href="/recorrido" dark>Ver recorrido</Btn><Btn href={site.instagram} external>Seguilo en vivo en Instagram</Btn></div></div></Wrap></section>

  <section className="py-24"><Wrap><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><Kicker>Diario y videos</Kicker><h2 className="serif mt-3 text-4xl sm:text-5xl">Del diario y la cámara</h2></div><Link href="/diario" className="font-medium text-tierra underline underline-offset-4">Ver todo el diario</Link></div>
    <div data-reveal-group className="grid gap-6 md:grid-cols-3 md:grid-rows-2"><Link href={`/diario/${posts[0].slug}`} className="group relative min-h-[420px] md:col-span-2 md:row-span-2"><div className="absolute inset-0 overflow-hidden"><Img src={photo(posts[0].photo)} alt="" className="h-full w-full transition-transform duration-700 group-hover:scale-105" /></div><div className="absolute inset-0 bg-gradient-to-t from-carbon/90 to-transparent" /><div className="absolute bottom-0 p-6 text-white"><span className="text-xs tracking-widest text-arena">{posts[0].category.toUpperCase()}</span><h3 className="serif text-3xl group-hover:underline">{posts[0].title}</h3><p className="mt-2 max-w-lg text-sm text-crema/80">{posts[0].summary}</p></div></Link>
      <Link href={`/diario/${posts[1].slug}`} className="border-t-2 border-tierra pt-4"><span className="text-xs tracking-widest text-tierra">{posts[1].category.toUpperCase()}</span><h3 className="serif text-2xl hover:underline">{posts[1].title}</h3><p className="mt-2 text-sm text-gris">{posts[1].summary}</p></Link>
      <Link href="/videos" className="group relative min-h-[200px]"><div className="absolute inset-0 overflow-hidden"><Img src={ytThumb(videos[1].id)} alt="" className="h-full w-full transition-transform duration-700 group-hover:scale-105" /></div><div className="absolute inset-0 bg-carbon/50 transition-colors group-hover:bg-carbon/30" /><span className="absolute bottom-4 left-4 text-white">▶ Ver todos los videos</span></Link></div></Wrap></section>

  <section className="bg-carbon py-24 text-crema"><Wrap className="grid items-center gap-10 lg:grid-cols-5"><div className="lg:col-span-2"><Kicker light>▶ El video más visto</Kicker><h2 className="serif mt-4 text-4xl">{videos[0].title}</h2><p className="mt-4 text-crema/70">{videos[0].desc} Más de {videos[0].views} reproducciones.</p><div className="mt-8 flex flex-wrap gap-3"><Btn href="/videos" dark>Ver más videos</Btn><Btn href={site.youtube} external>Suscribirme</Btn></div></div><div data-reveal="right" className="lg:col-span-3"><VideoEmbed id={videos[0].id} title={videos[0].title} /></div></Wrap></section>

  <section className="bg-arena/40 py-20"><Wrap className="text-center"><Kicker>🎥 Creador de reels</Kicker><h2 className="serif mt-3 text-4xl">Seguí la aventura en tiempo real</h2><p className="mx-auto mt-4 max-w-xl text-gris">En Instagram y TikTok subo el día a día del viaje; en YouTube, un capítulo nuevo cada semana.</p><div data-reveal><Social className="mt-8 justify-center text-carbon" /></div></Wrap></section>

  <section className="relative overflow-hidden py-28"><Img src={photo("cordillera2")} alt="" className="absolute inset-0 h-full w-full scale-110" /><div className="absolute inset-0 bg-carbon/80" />
    <Wrap className="relative grid items-center gap-10 text-white md:grid-cols-2"><div><Kicker light>Aportar</Kicker><h2 className="serif mt-3 text-4xl sm:text-5xl">Ayudame a seguir haciendo kilómetros</h2><p className="mt-5 text-crema/85">Si disfrutás acompañándome en esta aventura, podés colaborar con lo que quieras. Cada aporte se transforma en nafta, repuestos y nuevos caminos para compartir.</p>
      <div className="mt-8"><Btn href="/apoyar">Más formas de apoyar</Btn></div></div><div data-reveal="zoom" className="text-carbon"><AliasBox /></div></Wrap></section></>;
}
