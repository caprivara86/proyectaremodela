export default function RemodelacionCorporativaPage() {
  return (
    <main className="bg-transparent text-gray-900">
      <section className="bg-neutral-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Remodelación corporativa en CDMX y Estado de México
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Adecuación y remodelación de oficinas y espacios corporativos
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-8">
            Desarrollamos proyectos de remodelación corporativa para oficinas,
            espacios de trabajo y áreas empresariales en CDMX y Estado de México,
            cuidando funcionalidad, imagen institucional, control presupuestal
            y cumplimiento de tiempos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white hover:bg-blue-800 transition"
            >
              Solicitar cotización
            </a>

            <a
              href="/proyectos"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white hover:bg-white/15 transition"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Espacios de trabajo eficientes</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Diseñamos y ejecutamos oficinas que favorecen productividad,
              colaboración y flujo operativo.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Imagen corporativa</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Adecuamos espacios alineados a identidad de marca y cultura organizacional.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Control de proyecto</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Ejecutamos con planeación, supervisión técnica y control de presupuesto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Empresa de remodelación corporativa en CDMX y Estado de México
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              En Proyecta Remodelación y Mantenimiento desarrollamos proyectos
              de adecuación corporativa para oficinas, centros administrativos,
              espacios de atención y áreas operativas empresariales.
            </p>

            <p>
              Nuestro enfoque combina planeación técnica, ejecución estructurada
              y supervisión constante para garantizar que cada espacio cumpla
              con necesidades funcionales, imagen institucional y eficiencia operativa.
            </p>

            <p>
              Si buscas una empresa de remodelación corporativa en CDMX o Estado
              de México, te ayudamos a desarrollar tu proyecto con control,
              metodología profesional y resultados duraderos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
