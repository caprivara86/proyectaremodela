import Image from "next/image";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

const categories = [
  {
    title: "Corporativo",
    desc: "Adecuaciones empresariales con control financiero, cronogramas definidos y cumplimiento contractual.",
    img: "/projects/corporativas/corporativo2.jpeg",
    tags: ["Control presupuestal", "Cronograma", "Cumplimiento"],
  },
  {
    title: "Franquicias y Retail",
    desc: "Ejecución bajo lineamientos de marca para expansión acelerada y conceptos comerciales.",
    img: "/projects/corporativas/bridgestone1.jpeg",
    tags: ["Lineamientos de marca", "Coordinación", "Entrega"],
  },
  {
    title: "Residencial (nivel medio y alto)",
    desc: "Remodelaciones integrales con acabados de alto estándar, planeación estructurada y supervisión constante.",
    img: "/projects/residenciales/residencial1.jpeg",
    tags: ["Acabados premium", "Supervisión", "Garantía"],
  },
];

const highlights = [
  { k: "300+", v: "Proyectos ejecutados" },
  { k: "85+", v: "Clientes satisfechos" },
  { k: "5,450+", v: "Horas creando resultados" },
];

export default function Proyectos() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/corporativas/bridgestone1.jpeg"
            alt="Proyectos Proyecta"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
              Proyectos · CDMX y Estado de México
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Proyectos que trascienden
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80">
              Hemos participado en la ejecución integral de proyectos corporativos, comerciales y residenciales de alto impacto,
              cuidando presupuesto, tiempos y estándares de marca.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/contacto"
                className="inline-flex justify-center rounded-md bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition"
              >
                Solicitar cotización
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Áreas de experiencia</h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Ejecutamos con metodología: diagnóstico, planeación, supervisión y entrega con control de cambios.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-5">
              <div className="text-sm font-semibold text-gray-900">Portafolio en crecimiento</div>
              <div className="mt-1 text-gray-600">Solicita ejemplos por tipo de proyecto</div>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {categories.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-56">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-white text-xl font-semibold">{c.title}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white border border-white/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600">{c.desc}</p>
                  <div className="mt-6">
                    <a
                      href="/contacto"
                      className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800 transition"
                    >
                      Cotizar este tipo de proyecto <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MÉTRICAS */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.v} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 text-center">
                <div className="text-4xl font-bold text-blue-700">{h.k}</div>
                <div className="mt-3 text-gray-600">{h.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl border border-gray-200 bg-white p-10 md:p-12 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">¿Te mostramos ejemplos similares a tu proyecto?</h3>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Dinos el tipo de obra, ubicación y tiempos. Te compartimos referencias y una ruta de trabajo clara.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contacto"
              className="inline-flex justify-center rounded-md bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 transition"
            >
              Contactar
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-md border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}