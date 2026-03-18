import Image from "next/image";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

const services = [
  {
    title: "Remodelación Residencial Premium",
    desc: "Transformamos viviendas de nivel medio y alto con acabados premium, planeación estructurada y supervisión constante.",
    bullets: ["Diagnóstico y alcance", "Presupuesto y cronograma", "Ejecución y acabados", "Entrega y garantía"],
    icon: "🏡",
  },
  {
    title: "Remodelación Comercial / Retail",
    desc: "Adecuación y expansión de negocios, franquicias y conceptos boutique bajo estándares de marca y operación.",
    bullets: ["Lineamientos de marca", "Coordinación de proveedores", "Operación sin fricción", "Control de cambios"],
    icon: "🏬",
  },
  {
    title: "Ejecución Corporativa",
    desc: "Proyectos empresariales con control presupuestal, cronogramas definidos, reporteo y cumplimiento contractual.",
    bullets: ["Control financiero", "Bitácora y reportes", "Supervisión técnica", "Cumplimiento de tiempos"],
    icon: "🏢",
  },
  {
    title: "Mantenimiento Profesional",
    desc: "Mantenimiento preventivo y correctivo para inmuebles corporativos y comerciales con respuesta y seguimiento.",
    bullets: ["Programas preventivos", "Correctivos y urgencias", "Evidencia y cierre", "Atención continua"],
    icon: "🧰",
  },
];

export default function Servicios() {
  return (
    <main className="min-h-screen bg-transparent text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/corporativas/bridgestone1.jpeg"
            alt="Servicios Proyecta"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
              Servicios llave en mano · CDMX y Estado de México
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Nuestros Servicios
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80">
              Ejecutamos proyectos residenciales, comerciales y corporativos con control financiero,
              cumplimiento de tiempos y estándares de obra.
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
                className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-black/50 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Soluciones completas</h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Metodología clara, supervisión y control de cambios para entregar calidad predecible.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-5">
              <div className="text-sm font-semibold text-gray-900">Respuesta rápida</div>
              <div className="mt-1 text-gray-600">55 5105 4340</div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-gray-600">{s.desc}</p>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white text-xs">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="/contacto"
                    className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800 transition"
                  >
                    Solicitar cotización <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">¿Listo para cotizar tu proyecto?</h3>
            <p className="mt-3 text-white/75 max-w-2xl">
              Compártenos el tipo de servicio, ubicación y tiempos. Te respondemos con una ruta clara de trabajo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
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
              className="inline-flex justify-center rounded-md border border-white/25 px-6 py-3 font-semibold text-white hover:bg-black/50 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

