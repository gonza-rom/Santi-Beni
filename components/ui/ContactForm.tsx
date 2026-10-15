"use client";
import { useState } from "react";
import { site } from "@/lib/data";
// Sin backend: abre el cliente de correo con el mensaje armado para Santi.
export default function ContactForm() {
  const [err, setErr] = useState<Record<string, string>>({}); const [done, setDone] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const d = new FormData(e.currentTarget); const n: Record<string, string> = {};
    if (!String(d.get("nombre")).trim()) n.nombre = "Ingresá tu nombre";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(d.get("email")))) n.email = "Ingresá un email válido";
    if (!String(d.get("mensaje")).trim()) n.mensaje = "Escribí un mensaje";
    setErr(n); if (Object.keys(n).length) return;
    const body = `Hola Santi! Soy ${d.get("nombre")} (${d.get("email")}).\n\n${d.get("mensaje")}`;
    setDone(true); window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`[Web] ${d.get("tipo")}`)}&body=${encodeURIComponent(body)}`;
  }
  const c = "mt-1 w-full border border-tierra/40 bg-white px-3 py-3";
  return <form onSubmit={submit} noValidate className="space-y-5">
    <label className="block">Nombre<input name="nombre" className={c} />{err.nombre && <span className="text-sm text-red-800">{err.nombre}</span>}</label>
    <label className="block">Email<input name="email" type="email" className={c} />{err.email && <span className="text-sm text-red-800">{err.email}</span>}</label>
    <label className="block">Motivo<select name="tipo" className={c}><option>Consulta general</option><option>Colaboración con marca / sponsor</option><option>Prensa</option><option>Consejo de ruta o lugar para acampar</option></select></label>
    <label className="block">Mensaje<textarea name="mensaje" rows={5} className={c} />{err.mensaje && <span className="text-sm text-red-800">{err.mensaje}</span>}</label>
    <button className="min-h-[44px] bg-carbon px-8 text-white hover:bg-tierra">Enviar mensaje</button>
    <p className="text-xs text-gris">Se abrirá tu app de correo con el mensaje listo para enviar a {site.email}.</p>
    {done && <p role="status" className="text-sm text-oliva">✓ Abrimos tu correo. Si no se abrió, escribí directo a {site.email}.</p>}</form>;
}
