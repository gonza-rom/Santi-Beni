"use client";
import { useState } from "react";
import { support } from "@/lib/data";
export default function AliasBox() {
  const [ok, setOk] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(support.alias); setOk(true); setTimeout(() => setOk(false), 2500); } catch { /* sin permiso de portapapeles */ } };
  return <div className="border border-arena bg-white p-6 shadow-sm"><span className="text-[10px] uppercase tracking-widest text-tierra">Alias {support.platform}</span>
    <p className="serif mt-3 break-all text-2xl sm:text-3xl">{support.alias}</p>
    <button onClick={copy} className="mt-5 min-h-[44px] w-full bg-tierra px-5 text-sm font-medium text-white hover:bg-carbon sm:w-auto">{ok ? "✓ Alias copiado" : "Copiar alias"}</button>
    <p className="mt-3 text-xs text-gris">Abrí {support.platform} o tu banco, elegí “Transferir” y pegá el alias. ¡Gracias por sumar kilómetros!</p></div>;
}
