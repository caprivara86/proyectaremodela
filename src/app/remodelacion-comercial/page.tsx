export default function RemodelacionComercialPage() {
  return (
    <main className="bg-transparent text-gray-900">
      <section className="bg-neutral-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Remodelación comercial en CDMX y Estado de México
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Remodelación comercial para locales, franquicias y espacios de atención al cliente
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-8">
            Ejecutamos proyectos de remodelación comercial para negocios, restaurantes, tiendas,
            franquicias y espacios de servicio, con atención en CDMX y Estado de México, cuidando
            imagen de marca, operación, presupuesto y tiempos de entrega.
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
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/50 px-6 py-3.5 font-semibold text-white hover:bg-white/15 transition"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-white">Imagen de marca</h2>
            <p className="mt-3 text-white/90 leading-7">
              Desarrollamos adecuaciones comerciales alineadas a lineamientos visuales y experiencia del cliente.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-white">Operación funcional</h2>
            <p className="mt-3 text-white/90 leading-7">
              Diseñamos y ejecutamos espacios pensados para flujo operativo, atención y desempeño comercial.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-white">Cumplimiento de tiempos</h2>
            <p className="mt-3 text-white/90 leading-7">
              Priorizamos cronogramas y control de obra para reducir afectaciones en apertura o continuidad de operación.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Empresa de remodelación comercial en CDMX y Estado de México
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              En Proyecta Remodelación y Mantenimiento desarrollamos proyectos de remodelación comercial
              para negocios que requieren espacios funcionales, atractivos y alineados a objetivos de operación.
              Atendemos locales comerciales, tiendas, restaurantes, cafeterías, franquicias y conceptos boutique.
            </p>
            <p>
              Nuestro servicio integra planeación, adecuaciones, control de presupuesto, supervisión de obra
              y acabados, buscando que cada espacio comercial proyecte confianza, eficiencia e identidad de marca.
            </p>
            <p>
              Si buscas una empresa de remodelación comercial en CDMX o Estado de México, te ayudamos a
              ejecutar tu proyecto con metodología, control y enfoque en resultados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


