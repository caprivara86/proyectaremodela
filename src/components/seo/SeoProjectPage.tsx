import Link from "next/link";

type SeoProjectPageProps = {
  title: string;
  description: string;
  h1: string;
  zone: string;
  projectType: string;
  materials: string[];
  duration: string;
  parentHref?: string;
  parentLabel?: string;
  relatedLinks?: { href: string; label: string }[];
};

export default function SeoProjectPage({
  title,
  description,
  h1,
  zone,
  projectType,
  materials,
  duration,
  parentHref = "/proyectos",
  parentLabel = "Proyectos",
  relatedLinks = [],
}: SeoProjectPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.proyectaremodela.com" },
      { "@type": "ListItem", position: 2, name: parentLabel, item: `https://www.proyectaremodela.com${parentHref}` },
      { "@type": "ListItem", position: 3, name: h1 },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    about: [projectType, zone, "remodelación"],
    author: { "@type": "Organization", name: "Proyecta Remodelación y mantenimiento" },
    publisher: {
      "@type": "Organization",
      name: "Proyecta Remodelación y mantenimiento",
      url: "https://www.proyectaremodela.com",
    },
    mainEntityOfPage: "https://www.proyectaremodela.com",
  };

  return (
    <main className="bg-transparent text-neutral-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-neutral-900">Inicio</Link></li>
            <li>/</li>
            <li><Link href={parentHref} className="hover:text-neutral-900">{parentLabel}</Link></li>
            <li>/</li>
            <li className="text-neutral-900">{h1}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Caso de éxito</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{h1}</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">{description}</p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-6">
            <section className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Tipo de remodelación</h2>
              <p className="mt-3 leading-7 text-neutral-600">{projectType}</p>
            </section>

            <section className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Zona</h2>
              <p className="mt-3 leading-7 text-neutral-600">{zone}</p>
            </section>

            <section className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Materiales y acabados</h2>
              <ul className="mt-3 space-y-2 text-neutral-600">
                {materials.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Duración del proyecto</h2>
              <p className="mt-3 leading-7 text-neutral-600">{duration}</p>
            </section>

            <section className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Galería del proyecto</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                Aquí puedes integrar fotografías reales del antes, durante y después para fortalecer confianza, SEO y conversión.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold">Solicita una propuesta</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                Cuéntanos tu proyecto y te ayudamos a planear una remodelación profesional en CDMX y Estado de México.
              </p>
              <Link href="/contacto" className="mt-5 inline-flex rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Ir a contacto
              </Link>
            </div>

            {relatedLinks.length > 0 ? (
              <div className="rounded-3xl border border-neutral-200 p-6">
                <h2 className="text-xl font-semibold">Enlaces relacionados</h2>
                <ul className="mt-4 space-y-3">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-neutral-700 underline underline-offset-4 hover:text-neutral-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}
