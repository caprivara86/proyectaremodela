import { NextResponse } from "next/server";

type UTM = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

type LeadPayload = {
  nombre?: string;
  telefono?: string;
  email?: string;
  tipoProyecto?: string;
  mensaje?: string;
  source?: string;
  utm?: UTM;
};

function isNonEmptyString(v: unknown, maxLen = 500): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= maxLen;
}

function sanitizeString(v: unknown, maxLen = 500): string | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  if (!s) return undefined;
  return s.slice(0, maxLen);
}

function pickUtm(v: unknown): UTM | undefined {
  if (!v || typeof v !== "object") return undefined;
  const o = v as Record<string, unknown>;
  const utm: UTM = {
    utm_source: sanitizeString(o.utm_source, 200),
    utm_medium: sanitizeString(o.utm_medium, 200),
    utm_campaign: sanitizeString(o.utm_campaign, 200),
    utm_content: sanitizeString(o.utm_content, 200),
    utm_term: sanitizeString(o.utm_term, 200),
  };
  // Remove empty object
  const hasAny = Object.values(utm).some(Boolean);
  return hasAny ? utm : undefined;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    const nombre = sanitizeString(body.nombre, 120);
    const telefono = sanitizeString(body.telefono, 40);
    const email = sanitizeString(body.email, 120);
    const tipoProyecto = sanitizeString(body.tipoProyecto, 80);
    const mensaje = sanitizeString(body.mensaje, 2000);
    const source = sanitizeString(body.source, 80) ?? "website_contact_page";
    const utm = pickUtm(body.utm);

    // Validación mínima: nombre + (telefono o email)
    if (!isNonEmptyString(nombre, 120)) {
      return NextResponse.json(
        { ok: false, error: "nombre requerido" },
        { status: 400 }
      );
    }
    if (!isNonEmptyString(telefono, 40) && !isNonEmptyString(email, 120)) {
      return NextResponse.json(
        { ok: false, error: "telefono o email requerido" },
        { status: 400 }
      );
    }

    // TODO (siguiente etapa): persistir en Supabase (tabla leads)
    // Por ahora: solo confirmamos recepción + devolvemos el payload normalizado.
    return NextResponse.json({
      ok: true,
      receivedAt: new Date().toISOString(),
      lead: { nombre, telefono, email, tipoProyecto, mensaje, source, utm },
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "JSON inválido o error interno" },
      { status: 400 }
    );
  }
}
