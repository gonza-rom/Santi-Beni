"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip, useMap } from "react-leaflet";
import { stages } from "@/lib/data";
import { legColor, nextRoute, stageRoutes, type LatLng } from "@/lib/route";
const done: LatLng[] = stages.flatMap(s => stageRoutes[s.slug] ?? []);
const last = done[done.length - 1];
const pin = (s: typeof stages[number]) => { const r = stageRoutes[s.slug]; return r[Math.floor((r.length - 1) / 2)] ?? r[0]; };
const icon = (n: number, active: boolean, color: string) => L.divIcon({ className: "", iconSize: [26, 26], iconAnchor: [13, 13],
  html: `<div style="width:26px;height:26px;border-radius:50%;background:${active ? "#0B1F3A" : color};color:#fff;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font:700 11px 'DM Sans',sans-serif;transform:scale(${active ? 1.3 : 1})">${n}</div>` });
const flag = L.divIcon({ className: "", iconSize: [24, 24], iconAnchor: [12, 12], html: `<div style="font-size:20px;line-height:24px">🏁</div>` });
function Fit({ all, sel }: { all: boolean; sel: string | null }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
    const r = sel ? stageRoutes[sel] : null;
    if (r && r.length > 1) map.flyToBounds(r, { padding: [40, 40], maxZoom: 9, duration: 0.8 });
    else if (r) map.flyTo(r[0], 8, { duration: 0.8 });
    else map.fitBounds(all ? [...done, ...nextRoute.map(n => n.p)] : done, { padding: [20, 20] });
  }, [all, sel, map]);
  // Reajusta cuando el contenedor cambia de tamaño (carga, rotación, layout responsive)
  useEffect(() => {
    const ro = new ResizeObserver(() => { map.invalidateSize(); if (!sel) map.fitBounds(all ? [...done, ...nextRoute.map(n => n.p)] : done, { padding: [20, 20] }); });
    ro.observe(map.getContainer()); return () => ro.disconnect();
  }, [all, sel, map]);
  return null;
}
export default function RouteMap({ sel, all, onSelect }: { sel: string | null; all: boolean; onSelect: (slug: string) => void }) {
  return <MapContainer center={[-40, -68]} zoom={4} scrollWheelZoom={false} className="h-full w-full" attributionControl>
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' maxZoom={18} />
    <Fit all={all} sel={sel} />
    <Polyline positions={[last, ...nextRoute.map(n => n.p)]} pathOptions={{ color: "#0B1F3A", weight: 2, dashArray: "6 8", opacity: 0.6 }} />
    {stages.map(s => { const r = stageRoutes[s.slug]; return r.length > 1 && <Polyline key={s.slug} positions={r} eventHandlers={{ click: () => onSelect(s.slug) }} pathOptions={{ color: legColor[s.leg], weight: sel === s.slug ? 6 : 3.5, opacity: sel && sel !== s.slug ? 0.45 : 0.95 }} />; })}
    {stages.map((s, i) => <Marker key={s.slug} position={pin(s)} icon={icon(i + 1, sel === s.slug, legColor[s.leg])} zIndexOffset={sel === s.slug ? 1000 : 0} eventHandlers={{ click: () => onSelect(s.slug) }}>
      <Popup><strong>Etapa {i + 1}: {s.title}</strong><br />{s.place} · {s.episodes.length} videos<br /><a href={`/recorrido/${s.slug}`}>Ver etapa →</a></Popup></Marker>)}
    {all && nextRoute.map(n => <Marker key={n.name} position={n.p} icon={n.name === "Alaska" ? flag : L.divIcon({ className: "", iconSize: [12, 12], iconAnchor: [6, 6], html: `<div style="width:12px;height:12px;border-radius:50%;background:#fff;border:2px solid #0B1F3A"></div>` })}><Tooltip direction="right" permanent={n.name === "Alaska"}>{n.name} · próximamente</Tooltip></Marker>)}
  </MapContainer>;
}
