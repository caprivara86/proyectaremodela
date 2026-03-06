export default function RemodelacionResidencialPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-neutral-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Remodelación residencial en CDMX y Estado de México
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Remodelación residencial con control, diseño y ejecución profesional
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-8">
            Desarrollamos proyectos de remodelación integral para casas, departamentos y residencias
            de nivel medio y alto, con atención en CDMX y Estado de México. Ejecutamos cada obra con
            planeación, supervisión puntual, control de presupuesto y acabados de alto estándar.
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
            <h2 className="text-xl font-semibold">Planeación de obra</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Definimos alcances, tiempos, materiales y prioridades para ejecutar con orden y evitar desviaciones innecesarias.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Supervisión profesional</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Damos seguimiento puntual al proyecto para mantener control de calidad, avances y cumplimiento.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">Acabados de alto estándar</h2>
            <p className="mt-3 text-gray-600 leading-7">
              Cuidamos cada detalle para entregar espacios funcionales, estéticos y duraderos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Empresa de remodelación residencial en CDMX y Estado de México
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              En Proyecta Remodelación y Mantenimiento realizamos remodelación residencial para viviendas,
              departamentos, residencias y adecuaciones interiores con enfoque integral. Nuestro servicio
              está orientado a clientes que buscan una empresa confiable para transformar su inmueble con
              mayor control, claridad y calidad de ejecución.
            </p>
            <p>
              Atendemos proyectos de renovación de espacios, redistribución interior, actualización de acabados,
              remodelación de cocinas, baños, áreas sociales, recámaras y mejoras generales de vivienda.
              Adaptamos cada obra al estilo de vida, necesidades funcionales y presupuesto de cada cliente.
            </p>
            <p>
              Si buscas una empresa de remodelación residencial en CDMX o Estado de México, te ayudamos
              a desarrollar tu proyecto con metodología, supervisión profesional y atención personalizada.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
