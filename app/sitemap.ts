import { posts, site } from "@/lib/data";
import { getLive } from "@/lib/live";
export default async function sitemap() {
  const { stages, allIds } = await getLive();
  const r = ["", "/historia", "/recorrido", "/diario", "/videos", "/galeria", "/apoyar", "/contacto", ...stages.map(s => `/recorrido/${s.slug}`), ...allIds.map(id => `/recorrido/capitulo/${id}`), ...posts.map(p => `/diario/${p.slug}`)];
  return r.map(p => ({ url: site.url + p }));
}
