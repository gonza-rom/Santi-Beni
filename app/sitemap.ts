import { allStageEpisodes, posts, site, stages } from "@/lib/data";
export default function sitemap() {
  const r = ["", "/historia", "/recorrido", "/diario", "/videos", "/galeria", "/apoyar", "/contacto", ...stages.map(s => `/recorrido/${s.slug}`), ...allStageEpisodes.map(id => `/recorrido/capitulo/${id}`), ...posts.map(p => `/diario/${p.slug}`)];
  return r.map(p => ({ url: site.url + p }));
}
