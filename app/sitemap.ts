import { stages, posts, site } from "@/lib/data";
export default function sitemap() {
  const r = ["", "/historia", "/recorrido", "/diario", "/videos", "/apoyar", "/contacto", ...stages.map(s => `/recorrido/${s.slug}`), ...posts.map(p => `/diario/${p.slug}`)];
  return r.map(p => ({ url: site.url + p }));
}
