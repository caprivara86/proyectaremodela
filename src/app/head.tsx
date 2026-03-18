export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Proyecta Remodelación y Mantenimiento",
    url: "https://www.proyectaremodela.com/",
    logo: "https://www.proyectaremodela.com/projects/logo/proyecta_logo_alta_res_4000w.png",
    image: "https://www.proyectaremodela.com/projects/logo/proyecta_logo_alta_res_4000w.png",
    telephone: "+52 55 5105 4340",
    email: "contacto@proyectaremodela.com",
    areaServed: [
      {
        "@type": "City",
        name: "Ciudad de México"
      },
      {
        "@type": "State",
        name: "Estado de México"
      }
    ],
    description:
      "Empresa de remodelación integral en CDMX y Estado de México. Proyectos residenciales, comerciales y corporativos con control de presupuesto, supervisión profesional y acabados de alto estándar.",
    sameAs: [
      "https://www.facebook.com/proyectaremodelacionymantenimiento",
      "https://www.instagram.com/proyectaremodelacion"
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodelación residencial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodelación comercial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodelación corporativa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento de inmuebles" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Proyectos llave en mano" } }
    ]
  };

  return (
    <>
      <title>Remodelación integral en CDMX y Estado de México | Proyecta Remodelación</title>
      <meta
        name="description"
        content="Empresa de remodelación integral en CDMX y Estado de México. Proyectos residenciales, comerciales y corporativos con control de presupuesto, supervisión profesional y acabados de alto estándar."
      />
      <meta
        name="keywords"
        content="remodelación integral CDMX, remodelación Estado de México, remodelación residencial, remodelación comercial, remodelación corporativa, mantenimiento de inmuebles"
      />
      <link rel="canonical" href="https://www.proyectaremodela.com/" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="Proyecta Remodelación" />
      <meta
        property="og:title"
        content="Remodelación integral en CDMX y Estado de México | Proyecta Remodelación"
      />
      <meta
        property="og:description"
        content="Proyectos residenciales, comerciales y corporativos con control, calidad y cumplimiento."
      />
      <meta property="og:url" content="https://www.proyectaremodela.com/" />
      <meta
        property="og:image"
        content="https://www.proyectaremodela.com/projects/logo/proyecta_logo_alta_res_4000w.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Remodelación integral en CDMX y Estado de México | Proyecta Remodelación"
      />
      <meta
        name="twitter:description"
        content="Proyectos residenciales, comerciales y corporativos con control, calidad y cumplimiento."
      />
      <meta
        name="twitter:image"
        content="https://www.proyectaremodela.com/projects/logo/proyecta_logo_alta_res_4000w.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
