import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos de Remodelación | Casos de Éxito",
  description:
    "Explora proyectos de remodelación residencial, comercial y corporativa ejecutados en CDMX y Estado de México.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/proyectos",
  },
};

const proyectos = [
  {
    title: "Proyecto de remodelación en Polanco",
    href: "/proyectos/proyecto-remodelacion-polanco",
    zone: "Polanco, Ciudad de México",
  },
  {
    title: "Proyecto de remodelación en Santa Fe",
    href: "/proyectos/proyecto-remodelacion-santa-fe",
    zone: "Santa Fe, Ciudad de México",
  },
  {
    title: "Proyecto de remodelación en Interlomas",
    href: "/proyectos/proyecto-remodelacion-interlomas",
    zone: "Interlomas, Estado de México",
  },
  {
    title: "Proyecto de remodelación en Condesa",
    href: "/proyectos/proyecto-remodelacion-condesa",
    zone: "Condesa, Ciudad de México",
  },
];

export default function ProyectosPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Proyectos de remodelación
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Conoce algunos proyectos de remodelación ejecutados en CDMX y Estado
            de México con enfoque en calidad, planeación y control de obra.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {proyectos.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block rounded-3xl border border-neutral-200 p-6 hover:border-neutral-400 transition"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-neutral-600">{p.zone}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
