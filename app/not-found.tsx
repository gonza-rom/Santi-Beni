import Img from "@/components/ui/Img";
import { Btn } from "@/components/ui/ui";
import { photo } from "@/lib/data";
export default function NF() {
  return <section data-noreveal className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center text-white"><Img src={photo("ripio")} alt="" className="kenburns absolute inset-0 h-full w-full" /><div className="absolute inset-0 bg-carbon/80" />
    <div className="fade relative"><p className="text-xs tracking-[.3em] text-arena">ERROR 404</p><h1 className="serif my-4 text-5xl sm:text-6xl">Este camino no existe</h1><p className="mx-auto mb-8 max-w-md text-crema/80">Parece que nos perdimos de noche en el ripio. Volvamos a la ruta principal.</p><div className="flex flex-wrap justify-center gap-3"><Btn href="/" dark>Volver al inicio</Btn><Btn href="/recorrido">Ver el recorrido</Btn></div></div></section>;
}
