import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuánto cuesta remodelar una casa en CDMX | Guía 2026",
  description:
    "Conoce cuánto cuesta remodelar una casa en CDMX, qué factores influyen en el presupuesto y cómo planear una remodelación integral.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/blog/costo-remodelar-casa-cdmx",
  },
};

export default function CostoRemodelarCasaPage() {
  return (
    <main className="bg-transparent text-neutral-900">
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-neutral-900">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-neutral-900">Blog</Link></li>
            <li>/</li>
            <li className="text-neutral-900">Costo de remodelar casa en CDMX</li>
          </ol>
        </nav>

        <article className="space-y-8">
          <header>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Costos de remodelación
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Cuánto cuesta remodelar una casa en CDMX
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              El costo de remodelar una casa depende del tamaño del inmueble,
              el estado actual de la construcción, el alcance del proyecto,
              los materiales seleccionados y el nivel de acabados.
            </p>
          </header>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Precio promedio de remodelar una casa en CDMX
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Una remodelación puede variar desde intervenciones ligeras en
              acabados hasta remodelaciones integrales que incluyen cocina,
              baños, instalaciones, carpintería, pisos y redistribución
              arquitectónica.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Factores que influyen en el costo
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Los factores principales suelen ser el metraje, el estado de la
              estructura, los cambios de distribución, las instalaciones,
              los acabados y el tipo de materiales utilizados.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Remodelación parcial vs remodelación integral
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Una remodelación parcial puede enfocarse en áreas específicas
              como cocina o baños, mientras que una remodelación integral
              implica intervenir varias áreas del inmueble para modernizar
              completamente la vivienda.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Planeación del proyecto
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Una buena planeación considera diagnóstico del inmueble,
              definición de alcances, presupuesto, cronograma y supervisión
              profesional durante toda la ejecución de obra.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Enlaces relacionados
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/remodelacion-residencial/casa-completa" className="underline underline-offset-4">
                  Remodelación de casa completa
                </Link>
              </li>
              <li>
                <Link href="/proyectos/proyecto-remodelacion-polanco" className="underline underline-offset-4">
                  Proyecto de remodelación en Polanco
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="underline underline-offset-4">
                  Solicitar propuesta
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
