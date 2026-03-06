import Link from "next/link";

type SeoServicePageProps = {
  title: string;
  description: string;
  h1: string;
  h2: string[];
  parentLabel: string;
  parentHref: string;
  serviceType: string;
  areaServed?: string;
  relatedLinks?: { href: string; label: string }[];
  faq?: { question: string; answer: string }[];
};

export default function SeoServicePage({
  title,
  description,
  h1,
  h2,
  parentLabel,
  parentHref,
  serviceType,
  areaServed = "Ciudad de México y Estado de México",
  relatedLinks = [],
  faq = [],
}: SeoServicePageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    serviceType,
    areaServed,
    provider: {
      "@type": "LocalBusiness",
      name: "Proyecta Remodelación y mantenimiento",
      url: "https://www.proyectaremodela.com",
      telephone: "+52 55 5105 4340",
    },
    description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.proyectaremodela.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: parentLabel,
        item: `https://www.proyectaremodela.com${parentHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: h1,
      },
    ],
  };

  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <main className="bg-white text-neutral-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-neutral-900">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={parentHref} className="hover:text-neutral-900">
                {parentLabel}
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900">{h1}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Servicio especializado
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{h1}</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">{description}</p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-6">
            {h2.map((heading) => (
              <section key={heading} className="rounded-3xl border border-neutral-200 p-6">
                <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
                <p className="mt-3 leading-7 text-neutral-600">
                  En Proyecta desarrollamos {serviceType.toLowerCase()} con planeación, ejecución, supervisión y
                  control de calidad para entregar resultados funcionales, estéticos y duraderos.
                </p>
              </section>
            ))}

            {faq.length > 0 ? (
              <section className="rounded-3xl border border-neutral-200 p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Preguntas frecuentes</h2>
                <div className="mt-5 space-y-4">
                  {faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-lg font-medium">{item.question}</h3>
                      <p className="mt-2 leading-7 text-neutral-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold">Solicita una propuesta</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                Cuéntanos tu proyecto y te ayudamos a planear una remodelación profesional en CDMX y Estado de México.
              </p>
              <Link
                href="/contacto"
                className="mt-5 inline-flex rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
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
