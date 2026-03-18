import Image from "next/image";

const WHATSAPP_PHONE = "525551054340";
const WHATSAPP_TEXT = encodeURIComponent("Hola, quiero una cotización para una remodelación integral. ¿Me pueden apoyar?");

export default function RemodelacionIntegralPage() {
  return (
    <main className="relative min-h-screen text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/projects/proyectos-especiales/remodelacion-acuario-michin.jpeg"
          alt="Remodelación integral"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <section className="relative overflow-hidden px-6 py-24 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] md:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects/proyectos-especiales/remodelacion-acuario-michin.jpeg"
          alt="Remodelación integral"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
              Remodelación integral en CDMX y Estado de México
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Remodelación integral con control de obra, calidad y cumplimiento real
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75 md:text-xl">
              Desarrollamos proyectos residenciales, comerciales y corporativos con planeación técnica,
              supervisión profesional, control presupuestal y acabados de alto estándar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-4 text-base font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] transition hover:bg-blue-800"
              >
                Solicitar cotización
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 px-7 py-4 text-base font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] transition hover:bg-white/15"
              >
                WhatsApp directo
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-bold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">300+</div>
                <p className="mt-2 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">Proyectos ejecutados</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-bold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">850+</div>
                <p className="mt-2 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">Clientes satisfechos</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-bold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">2010–2026</div>
                <p className="mt-2 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">Experiencia acumulada en ejecución y remodelación</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-transparent px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-white/15 bg-black/25 p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.20)]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/60">
                Ideal para
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] md:text-5xl">
                Proyectos residenciales, comerciales y corporativos
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-white/15 bg-black/25 p-6">
                <Image
                  src="/projects/residenciales/residencial1.jpeg"
                  alt="Remodelación residencial"
                  width={600}
                  height={400}
                  className="mb-4 rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Residencial</h3>
                <p className="mt-3 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                  Casas, departamentos y residencias con enfoque en funcionalidad, estética y acabados premium.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-black/25 p-6">
                <Image
                  src="/projects/showroom/showroom1.jpeg"
                  alt="Remodelación comercial"
                  width={600}
                  height={400}
                  className="mb-4 rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Comercial</h3>
                <p className="mt-3 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                  Locales, restaurantes y franquicias con control de tiempos, imagen y operación.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-black/25 p-6">
                <Image
                  src="/projects/corporativas/corporativo2.jpeg"
                  alt="Remodelación corporativa"
                  width={600}
                  height={400}
                  className="mb-4 rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Corporativo</h3>
                <p className="mt-3 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                  Oficinas y adecuaciones empresariales con metodología estructurada y seguimiento puntual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent px-6 py-20">
        <div className="mx-auto max-w-6xl text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/60">
              Qué incluye
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] md:text-5xl">
              Una remodelación integral bien ejecutada no es maquillaje, es método
            </h2>
            <p className="mt-5 text-lg leading-8 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
              Coordinamos alcance, presupuesto, tiempos, supervisión y acabados para reducir fricción
              durante la obra y mejorar el resultado final.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/15 bg-black/25 p-7">
              <h3 className="text-xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Planeación y alcance</h3>
              <p className="mt-3 text-base leading-7 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                Definición clara del proyecto, prioridades, materiales, partidas y objetivos operativos.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-black/25 p-7">
              <h3 className="text-xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Control de obra</h3>
              <p className="mt-3 text-base leading-7 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                Seguimiento técnico, control presupuestal y supervisión para evitar improvisaciones costosas.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-black/25 p-7">
              <h3 className="text-xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Entrega con estándar</h3>
              <p className="mt-3 text-base leading-7 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                Ejecución orientada a funcionalidad, calidad visual y durabilidad real en el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[32px] border border-neutral-200 bg-transparent p-8 md:p-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/60">
                Empresa de remodelación integral
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] md:text-5xl">
                Planeación, control y ejecución con estándar profesional
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/80">
                <p>
                  En Proyecta Remodelación y Mantenimiento desarrollamos proyectos residenciales,
                  comerciales y corporativos con un enfoque integral que combina planeación,
                  control presupuestal, supervisión de obra y acabados de alto estándar.
                </p>
                <p>
                  Ejecutamos remodelaciones de casas, departamentos, oficinas, locales comerciales,
                  franquicias y adecuaciones corporativas, adaptándonos a los objetivos operativos,
                  funcionales y estéticos de cada cliente.
                </p>
                <p>
                  Si buscas una empresa de remodelación en CDMX o Estado de México con experiencia real,
                  metodología de ejecución y cumplimiento de tiempos, te ayudamos a transformar tu espacio
                  con orden, calidad y atención profesional.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200  p-8 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/55">
                Enfoque operativo
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Qué obtiene el cliente al trabajar con nosotros
              </h3>

              <div className="mt-8 space-y-5">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Cobertura estratégica</p>
                  <p className="mt-2 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">
                    Atención en Ciudad de México y Estado de México para proyectos habitacionales,
                    comerciales y corporativos.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Metodología clara</p>
                  <p className="mt-2 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">
                    Definición de alcances, control de presupuesto, seguimiento de obra y comunicación
                    transparente durante todo el proyecto.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">Resultados duraderos</p>
                  <p className="mt-2 text-sm leading-6 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">
                    Soluciones pensadas para funcionar bien, verse bien y sostener su valor con el paso
                    del tiempo. Nada de maquillaje de obra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-6 py-20 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/55">
                Siguiente paso
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Solicita una cotización para tu remodelación integral
              </h2>
              <p className="mt-5 text-lg leading-8 text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)]/75">
                Cuéntanos qué espacio quieres transformar y te orientamos sobre alcance,
                tipo de proyecto y siguiente paso.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-4 text-base font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] transition hover:bg-blue-800"
              >
                Ir a contacto
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 px-7 py-4 text-base font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] transition hover:bg-white/15"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    <a
  href="https://wa.me/525551054340?text=Hola%20quiero%20cotizar%20una%20remodelacion%20integral"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white font-semibold shadow-xl hover:bg-green-700 transition whatsapp-pulse"
>
  WhatsApp
</a>
</main>
  );
}




