import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollFX } from "@/components/ui/Motion";
import { site } from "@/lib/data";
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: "Santi Beni · De Ushuaia a Alaska en una Wave 110cc", template: "%s · Santi Beni Motoviajero" }, description: "Santi, un cordobés que dejó todo para unir Ushuaia con Alaska en su Honda Wave 110cc. Moto, camping y trekking por América.", openGraph: { title: "Santi Beni · De Ushuaia a Alaska en una Wave 110cc", description: "Santi, un cordobés que dejó todo para unir Ushuaia con Alaska en su Honda Wave 110cc. Moto, camping y trekking por América.", url: "/", siteName: "Santi Beni Motoviajero", type: "website", locale: "es_AR", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Santi Beni Motoviajero: de Ushuaia a Alaska en una Wave 110cc" }] }, twitter: { card: "summary_large_image", title: "Santi Beni · De Ushuaia a Alaska en una Wave 110cc", description: "Santi, un cordobés que dejó todo para unir Ushuaia con Alaska en su Honda Wave 110cc. Moto, camping y trekking por América.", images: ["/og.jpg"] } };
export const viewport: Viewport = { themeColor: "#0B1F3A" };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="es" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@500;700&display=swap" /></head>
    <body><a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a><Header /><main id="contenido">{children}</main><Footer /><ScrollFX /></body></html>;
}
