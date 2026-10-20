import { revalidatePath } from "next/cache";
// Fuerza a la web a releer YouTube y la planilla de "Ahora mismo" sin esperar las 6 horas.
// Uso: abrir https://<tu-web>/api/revalidate?secret=<REVALIDATE_SECRET>
export async function GET(req: Request) {
  const secret = new URL(req.url).searchParams.get("secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) return Response.json({ ok: false, error: "secret inválido" }, { status: 401 });
  revalidatePath("/", "layout");
  return Response.json({ ok: true, actualizado: new Date().toISOString() });
}
