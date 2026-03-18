"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

type Utm = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

function titleFromSlug(slug: string) {
  return (slug || "landing")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function LandingPage() {
  const params = useParams<{ slug?: string | string[] }>();
  const raw = params?.slug;

  const slugText = Array.isArray(raw) ? raw.join("/") : (raw ?? "");
  const title = titleFromSlug(Array.isArray(raw) ? raw.join(" ") : (raw ?? "landing"));

  useEffect(() => {
    const search = window.location.search || "";
    const p = new URLSearchParams(search);

    const utm: Utm = {
      utm_source: p.get("utm_source") ?? undefined,
      utm_medium: p.get("utm_medium") ?? undefined,
      utm_campaign: p.get("utm_campaign") ?? undefined,
      utm_term: p.get("utm_term") ?? undefined,
      utm_content: p.get("utm_content") ?? undefined,
    };

    const hasAny = Object.values(utm).some(Boolean);
    if (hasAny) {
      localStorage.setItem("proyecta_utm", JSON.stringify(utm));
    }
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-gray-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600">
          Landing • /lp/{slugText}
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold">{title}</h1>

        <p className="mt-6 text-lg text-white/90 max-w-3xl">
          Esta es una plantilla base para campañas. Aquí vamos a personalizar el mensaje
          según el tipo de proyecto (residencial o corporativo), y después conectaremos
          el formulario para capturar leads con UTMs.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/contacto"
            className="inline-flex justify-center bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-md text-white font-semibold"
          >
            Solicitar Cotización
          </a>
          <a
            href="/lp"
            className="inline-flex justify-center border border-gray-300 hover:bg-gray-50 transition px-6 py-3 rounded-md font-semibold"
          >
            Volver a landings
          </a>
        </div>
      </div>
    </main>
  );
}
