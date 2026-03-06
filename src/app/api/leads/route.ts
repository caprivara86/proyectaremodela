import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM ?? "Proyecta Leads <onboarding@resend.dev>";
    const to = process.env.LEADS_TO ?? "ricardo@proyectaremodela.com";

    if (!apiKey) {
      console.error("❌ Missing env var: RESEND_API_KEY");
      return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 400 });
    }

    const data = await req.json();

    const html = `
      <h2>Nuevo Lead - Proyecta Remodelación</h2>
      <p><b>Nombre:</b> ${data.nombre ?? "-"}</p>
      <p><b>Teléfono:</b> ${data.telefono ?? "-"}</p>
      <p><b>Email:</b> ${data.email ?? "-"}</p>
      <p><b>Tipo de proyecto:</b> ${data.tipoProyecto ?? "-"}</p>
      <p><b>Mensaje:</b> ${data.mensaje ?? "-"}</p>
      <hr/>
      <p><b>Source:</b> ${data.source ?? "-"}</p>
      <pre style="background:#f6f6f6;padding:12px;border-radius:8px;">${JSON.stringify(data.utm ?? null, null, 2)}</pre>
    `;

    const resend = new Resend(apiKey);

    const r = await resend.emails.send({
      from,
      to,
      subject: "Nuevo Lead - Proyecta Remodelación",
      html,
    });

    if ((r as any)?.error) {
      console.error("❌ Resend error:", (r as any).error);
      return Response.json({ error: "Error enviando email (Resend)" }, { status: 502 });
    }

    return Response.json({ ok: true, provider: "resend" });
  } catch (error) {
    console.error("❌ /api/leads error:", error);
    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}