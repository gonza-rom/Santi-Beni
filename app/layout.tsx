import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollFX } from "@/components/ui/Motion";
import { site } from "@/lib/data";
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: "Santi Beni · Motoviajero", template: "%s · Santi Beni" }, description: "De Ushuaia a Alaska en una Honda Wave 110cc. Moto, camping y trekking: la aventura es el coraje de animarse.", openGraph: { title: "Santi Beni · Motoviajero", description: "De Ushuaia a Alaska en una Wave 110cc.", type: "website", locale: "es_AR", images: ["/images/ushuaia-alaska.jpg"] }, twitter: { card: "summary_large_image", images: ["/images/ushuaia-alaska.jpg"] } };
export const viewport: Viewport = { themeColor: "#0B1F3A" };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="es" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@500;700&display=swap" /></head>
    <body><a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a><Header /><main id="contenido">{children}</main><Footer /><ScrollFX /></body></html>;
}
