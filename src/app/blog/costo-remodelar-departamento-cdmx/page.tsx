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
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,#111827_0%,#0f172a_45%,#020617_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]" />

      <section className="mx-auto max-w-4xl px-6 py-14 md:px-8 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="transition hover:text-white">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="transition hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-white/85">Costo de remodelar departamento en CDMX</li>
          </ol>
        </nav>

        <article className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10">
          <header className="border-b border-white/10 pb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.30em] text-white/60">
              Costos de remodelación
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Cuánto cuesta remodelar un departamento en CDMX
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              El costo de remodelar un departamento en CDMX depende del metraje, el alcance del proyecto,
              la distribución, materiales, instalaciones y el nivel de acabados que se busque.
            </p>
          </header>

          <div className="mt-10 space-y-6">
            <section className="rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Precio promedio de remodelar un departamento en CDMX
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                El presupuesto puede variar mucho entre una renovación superficial y una remodelación integral.
                Cambiar pisos, cocina, baños, carpintería, pintura e instalaciones modifica considerablemente
                la inversión total.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Factores que influyen en el costo
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                El metraje, el estado actual del inmueble, el nivel de intervención, la carpintería,
                los acabados, la iluminación y los cambios en instalaciones eléctricas, hidráulicas o sanitarias
                suelen ser determinantes.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Materiales y acabados
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                Pisos, recubrimientos, pintura, carpintería, cubiertas, luminarias y herrajes influyen tanto
                en el presupuesto como en la percepción final del espacio y su durabilidad.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Ejemplo de presupuesto
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                Una estimación realista debe considerar demolición, preparación, albañilería, instalaciones,
                acabados, cocina, baños, carpintería, pintura, iluminación y supervisión de obra.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Consejos para planear la remodelación
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                Antes de remodelar conviene definir prioridades, presupuesto, cronograma y nivel de acabados.
                Una buena planeación ayuda a reducir desviaciones y mejorar el resultado final.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/10 p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Enlaces relacionados
              </h2>
              <ul className="mt-4 space-y-3 text-white/85">
                <li><Link href="/remodelacion-residencial/departamento" className="underline decoration-white/30 underline-offset-4 transition hover:text-white">Remodelación de departamentos</Link></li>
                <li><Link href="/proyectos/proyecto-remodelacion-interlomas" className="underline decoration-white/30 underline-offset-4 transition hover:text-white">Proyecto de remodelación en Interlomas</Link></li>
                <li><Link href="/contacto" className="underline decoration-white/30 underline-offset-4 transition hover:text-white">Solicitar propuesta</Link></li>
              </ul>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}