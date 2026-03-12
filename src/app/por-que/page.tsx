import Image from "next/image";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación. ¿Me pueden apoyar?");

const logos = [
  { src: "/projects/socios comerciales/acuariomichin.jpg", alt: "Acuario Michin" },
  { src: "/projects/socios comerciales/cmrlogo.png", alt: "CMR" },
  { src: "/projects/socios comerciales/codere.png", alt: "Codere" },
  { src: "/projects/socios comerciales/gmlogo.jpg", alt: "GM" },
  { src: "/projects/socios comerciales/hawkerslogo.jpg", alt: "Hawkers" },
  { src: "/projects/socios comerciales/JAC_logo.jpg", alt: "JAC" },
  { src: "/projects/socios comerciales/Liverpool_logo.svg.png", alt: "Liverpool" },
];

export default function PorQue() {
  return (
    <main className="min-h-screen bg-transparent text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/corporativas/bridgestone1.jpeg"
            alt="Proyecta Remodelación"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
              Por qué Proyecta · Metodología + Control + Ejecución
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Experiencia que trasciende lo convencional
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80">
              Somos un brazo externo ejecutor de proyectos con completo control financiero.
              Lograr alto impacto en remodelación no es solo habilidad técnica: es experiencia,
              dedicación y una metodología clara de ejecución y control.
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

      {/* VALOR */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Calidad y excelencia en cada detalle</h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Materiales premium, mano de obra experta y comunicación transparente para entregar resultados duraderos.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm px-6 py-5">
              <div className="text-sm font-semibold text-gray-900">Ejecución con control</div>
              <div className="mt-1 text-gray-600">Presupuesto · tiempos · estándares</div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              <div className="text-sm font-semibold text-blue-700">Materiales premium</div>
              <h3 className="mt-2 text-xl font-semibold">Resultados duraderos</h3>
              <p className="mt-3 text-gray-600">
                Utilizamos materiales y técnicas de construcción para asegurar calidad real y acabados de alto estándar.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              <div className="text-sm font-semibold text-blue-700">Mano de obra experta</div>
              <h3 className="mt-2 text-xl font-semibold">Precisión en la ejecución</h3>
              <p className="mt-3 text-gray-600">
                Equipo altamente capacitado con atención meticulosa a los detalles, supervisión y orden en obra.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              <div className="text-sm font-semibold text-blue-700">Comunicación transparente</div>
              <h3 className="mt-2 text-xl font-semibold">Certeza y seguimiento</h3>
              <p className="mt-3 text-gray-600">
                Reporteo, acuerdos claros y control de cambios para que el proyecto avance con visibilidad y confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Metodología de ejecución y control</h2>
              <p className="mt-4 text-gray-600">
                Para hacer una verdadera diferencia, seguimos un proceso que protege presupuesto, tiempos y calidad.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { n: "01", t: "Diagnóstico y alcance", d: "Entendemos necesidades, condiciones del sitio y objetivos del proyecto." },
                  { n: "02", t: "Planeación y presupuesto", d: "Definimos cronograma, costos, alcances y prioridades." },
                  { n: "03", t: "Ejecución supervisada", d: "Coordinación de obra, proveedores y control de cambios." },
                  { n: "04", t: "Entrega y cierre", d: "Revisión final, calidad de acabados y entrega conforme a objetivos." },
                ].map((s) => (
                  <div key={s.n} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-700">
                        {s.n}
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{s.t}</div>
                        <div className="mt-2 text-gray-600">{s.d}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="/projects/restaurantes/restaurante2.jpeg"
                  alt="Ejecución Proyecta"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-2xl font-bold">Control financiero real</div>
                  <div className="mt-2 text-white/85">
                    Presupuesto, tiempos y estándares de marca protegidos por metodología.
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm font-semibold text-gray-900">Por qué amamos lo que hacemos</div>
                <p className="mt-3 text-gray-600">
                  Cada proyecto es una aventura única. Tenemos el privilegio de ser parte de la historia de cada hogar,
                  negocio o empresa, desde el primer boceto hasta el último toque.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <div className="text-3xl font-bold text-blue-700">300+</div>
                    <div className="mt-2 text-sm text-gray-600">Proyectos</div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <div className="text-3xl font-bold text-blue-700">85+</div>
                    <div className="mt-2 text-sm text-gray-600">Clientes</div>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <div className="text-3xl font-bold text-blue-700">5,450+</div>
                    <div className="mt-2 text-sm text-gray-600">Horas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Trayectoria con empresas líderes</h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">
            Marcas y empresas que han confiado en nuestra ejecución, control y estándares.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center opacity-90">
            {logos.map((l) => (
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                width={160}
                height={80}
                className="mx-auto object-contain"
              />
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/contacto"
              className="inline-flex justify-center rounded-md bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition"
            >
              Quiero cotizar mi proyecto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}