import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/data";
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: "Santi Beni · Motoviajero", template: "%s · Santi Beni" }, description: "De Ushuaia a Alaska en una Honda Wave 110cc. Moto, camping y trekking: la aventura es el coraje de animarse.", openGraph: { title: "Santi Beni · Motoviajero", description: "De Ushuaia a Alaska en una Wave 110cc.", type: "website", locale: "es_AR", images: ["/images/ushuaia-alaska.jpg"] } };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="es"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@500;700&display=swap" /></head>
    <body><Header /><main>{children}</main><Footer /></body></html>;
}
