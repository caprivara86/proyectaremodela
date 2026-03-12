import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuánto cuesta remodelar un departamento en CDMX | Guía 2026",
  description:
    "Conoce cuánto cuesta remodelar un departamento en CDMX, qué factores influyen en el presupuesto y cómo planear mejor tu proyecto.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/blog/costo-remodelar-departamento-cdmx",
  },
};

export default function CostoRemodelarDepartamentoPage() {
  return (
    <main className="bg-transparent text-neutral-900">
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-neutral-900">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-neutral-900">Blog</Link></li>
            <li>/</li>
            <li className="text-neutral-900">Costo de remodelar departamento en CDMX</li>
          </ol>
        </nav>

        <article className="space-y-8">
          <header>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Costos de remodelación
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Cuánto cuesta remodelar un departamento en CDMX
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              El costo de remodelar un departamento en CDMX depende del metraje, el alcance del proyecto,
              la distribución, materiales, instalaciones y el nivel de acabados que se busque.
            </p>
          </header>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Precio promedio de remodelar un departamento en CDMX</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              El presupuesto puede variar mucho entre una renovación superficial y una remodelación integral.
              Cambiar pisos, cocina, baños, carpintería, pintura e instalaciones modifica considerablemente la inversión total.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Factores que influyen en el costo</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              El metraje, el estado actual del inmueble, el nivel de intervención, la carpintería, los acabados,
              la iluminación y los cambios en instalaciones eléctricas, hidráulicas o sanitarias suelen ser determinantes.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Materiales y acabados</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Pisos, recubrimientos, pintura, carpintería, cubiertas, luminarias y herrajes influyen tanto en
              el presupuesto como en la percepción final del espacio y su durabilidad.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Ejemplo de presupuesto</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Una estimación realista debe considerar demolición, preparación, albañilería, instalaciones,
              acabados, cocina, baños, carpintería, pintura, iluminación y supervisión de obra.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Consejos para planear la remodelación</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Antes de remodelar conviene definir prioridades, presupuesto, cronograma y nivel de acabados.
              Una buena planeación ayuda a reducir desviaciones y mejorar el resultado final.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Enlaces relacionados</h2>
            <ul className="mt-4 space-y-3">
              <li><Link href="/remodelacion-residencial/departamento" className="underline underline-offset-4">Remodelación de departamentos</Link></li>
              <li><Link href="/proyectos/proyecto-remodelacion-interlomas" className="underline underline-offset-4">Proyecto de remodelación en Interlomas</Link></li>
              <li><Link href="/contacto" className="underline underline-offset-4">Solicitar propuesta</Link></li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
