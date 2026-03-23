import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guías de Construcción y Remodelación | Costos, Ideas y Planeación",
  description:
    "Artículos sobre costos de remodelación, materiales, planeación y consejos para proyectos residenciales, comerciales y corporativos en CDMX.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/blog",
  },
};

const posts = [
  {
    title: "Cuánto cuesta remodelar una cocina en CDMX",
    href: "/blog/costo-remodelar-cocina-cdmx",
    category: "Costos",
    description:
      "Factores que influyen en el presupuesto, materiales, alcances y recomendaciones para planear mejor tu proyecto.",
  },
  {
    title: "Cuánto cuesta remodelar un baño en CDMX",
    href: "/blog/costo-remodelar-bano-cdmx",
    category: "Costos",
    description:
      "Guía práctica para entender partidas, acabados, instalaciones y decisiones que cambian el costo final.",
  },
  {
    title: "Cuánto cuesta remodelar un departamento en CDMX",
    href: "/blog/costo-remodelar-departamento-cdmx",
    category: "Costos",
    description:
      "Una visión general sobre presupuesto, alcances, tiempos de obra y control de costos en remodelación integral.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-transparent text-white">
      <section className="border-b border-neutral-200 bg-[radial-gradient(circle_at_top,rgba(120,120,120,0.12),transparent_40%),linear-gradient(to_bottom,#fafafa,#ffffff)]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Guías de construcción
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-neutral-950 md:text-6xl">
              Costos, ideas y planificación para remodelar en CDMX
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
              Una colección de guías pensadas para ayudarte a entender costos, alcances,
              materiales y decisiones clave antes de iniciar una remodelación residencial,
              comercial o corporativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="rounded-full border border-neutral-300 bg-white px-4 py-2">
                Costos de remodelación
              </span>
              <span className="rounded-full border border-neutral-300 bg-white px-4 py-2">
                Planeación de obra
              </span>
              <span className="rounded-full border border-neutral-300 bg-white px-4 py-2">
                Materiales y acabados
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white">
              Artículos destacados
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Contenido útil para decidir mejor
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 opacity-90" />

              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {post.category}
                </p>
                <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500 transition group-hover:border-neutral-300 group-hover:text-neutral-700">
                  Leer guía
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-950">
                {post.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {post.description}
              </p>

              <div className="mt-8 inline-flex items-center text-sm font-medium text-neutral-900">
                Ver artículo
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}