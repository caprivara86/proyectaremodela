import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuánto cuesta remodelar un baño en CDMX | Guía 2026",
  description:
    "Conoce cuánto cuesta remodelar un baño en CDMX, qué factores influyen en el presupuesto y cómo planear mejor tu proyecto.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/blog/costo-remodelar-bano-cdmx",
  },
};

export default function CostoRemodelarBanoPage() {
  return (
    <main className="bg-transparent text-white">
      <section className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-white">Costo de remodelar baño en CDMX</li>
          </ol>
        </nav>

        <article className="space-y-8">
          <header>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Costos de remodelación
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Cuánto cuesta remodelar un baño en CDMX
            </h1>
            <p className="mt-5 text-lg leading-8 text-white">
              El costo de remodelar un baño en CDMX depende del tamaño del espacio, los recubrimientos,
              la grifería, muebles, cancelería, instalaciones y el nivel de acabados que se requiera.
            </p>
          </header>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Precio promedio de remodelar un baño en CDMX</h2>
            <p className="mt-3 leading-7 text-white">
              El presupuesto cambia mucho según el alcance. No es lo mismo renovar muebles y acabados
              que intervenir instalaciones hidráulicas, sanitarias, pisos, muros y cancelería.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Factores que influyen en el costo</h2>
            <p className="mt-3 leading-7 text-white">
              Los factores principales suelen ser el tamaño del baño, el tipo de recubrimiento, la
              grifería, la cancelería, los muebles, la iluminación y si hay modificaciones en instalaciones.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Materiales y acabados</h2>
            <p className="mt-3 leading-7 text-white">
              Azulejos, porcelánicos, piedra, canceles de cristal, muebles de baño, espejos e iluminación
              decorativa influyen directamente en la durabilidad, el mantenimiento y la percepción final del espacio.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Ejemplo de presupuesto</h2>
            <p className="mt-3 leading-7 text-white">
              Un ejemplo útil debe considerar demolición, albañilería, instalaciones, impermeabilización,
              recubrimientos, muebles, cancelería, accesorios, iluminación y supervisión de obra.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Consejos para planear la remodelación</h2>
            <p className="mt-3 leading-7 text-white">
              Definir desde el inicio el nivel de acabados, la funcionalidad del espacio y el presupuesto
              ayuda a evitar cambios costosos durante la ejecución y mejora el control del proyecto.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Enlaces relacionados</h2>
            <ul className="mt-4 space-y-3">
              <li><Link href="/remodelacion-residencial/bano" className="underline underline-offset-4">Remodelación de baño</Link></li>
              <li><Link href="/proyectos/proyecto-remodelacion-condesa" className="underline underline-offset-4">Proyecto de remodelación en Condesa</Link></li>
              <li><Link href="/contacto" className="underline underline-offset-4">Solicitar propuesta</Link></li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}

