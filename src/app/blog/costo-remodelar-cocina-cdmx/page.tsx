import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuánto cuesta remodelar una cocina en CDMX | Guía 2026",
  description:
    "Conoce cuánto cuesta remodelar una cocina en CDMX, qué factores influyen en el presupuesto y cómo planear mejor tu proyecto.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/blog/costo-remodelar-cocina-cdmx",
  },
};

export default function CostoRemodelarCocinaPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-neutral-900">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-neutral-900">Blog</Link></li>
            <li>/</li>
            <li className="text-neutral-900">Costo de remodelar cocina en CDMX</li>
          </ol>
        </nav>

        <article className="space-y-8">
          <header>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Costos de remodelación
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Cuánto cuesta remodelar una cocina en CDMX
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              El costo de remodelar una cocina en CDMX depende del tamaño del espacio, los materiales,
              la carpintería, las instalaciones y el nivel de acabados que se busque.
            </p>
          </header>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Precio promedio de remodelar una cocina en CDMX</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Un presupuesto puede variar ampliamente según el alcance del proyecto. No cuesta lo mismo
              renovar acabados y mobiliario que hacer una remodelación integral con cambios de distribución,
              instalaciones, cubiertas y carpintería a medida.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Factores que influyen en el costo</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Los factores principales suelen ser el tamaño de la cocina, los materiales seleccionados,
              el tipo de cubierta, el mobiliario, la iluminación, la mano de obra y si hay cambios en
              instalaciones hidráulicas, sanitarias o eléctricas.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Materiales y acabados</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              La elección de porcelánicos, cubiertas de cuarzo o granito, herrajes, gabinetes y luminarias
              impacta directamente en el resultado estético, la durabilidad y el presupuesto total.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Ejemplo de presupuesto</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Un ejemplo realista debe considerar demolición, preparación, albañilería, instalaciones,
              acabados, carpintería, cubierta, iluminación y supervisión. La mejor forma de obtener una
              cifra útil es evaluar el inmueble y definir alcances concretos.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Consejos para planear la remodelación</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Definir objetivos, presupuesto, tiempos y nivel de acabados desde el inicio ayuda a evitar
              cambios costosos durante la ejecución. También conviene trabajar con una empresa que supervise
              calidad, tiempos y control de materiales.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Enlaces relacionados</h2>
            <ul className="mt-4 space-y-3">
              <li><Link href="/remodelacion-residencial/cocina" className="underline underline-offset-4">Remodelación de cocina</Link></li>
              <li><Link href="/proyectos/proyecto-remodelacion-polanco" className="underline underline-offset-4">Proyecto de remodelación en Polanco</Link></li>
              <li><Link href="/contacto" className="underline underline-offset-4">Solicitar propuesta</Link></li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
