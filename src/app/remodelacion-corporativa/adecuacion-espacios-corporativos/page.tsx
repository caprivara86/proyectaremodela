import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Adecuación de Espacios Corporativos en CDMX | Proyecto y Ejecución",
  description:
    "Adecuamos espacios corporativos en CDMX con soluciones funcionales, sobrias y alineadas a la operación de cada empresa.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-corporativa/adecuacion-espacios-corporativos",
  },
};

export default function AdecuacionEspaciosCorporativosPage() {
  return (
    <SeoServicePage
      title="Adecuación de Espacios Corporativos en CDMX | Proyecto y Ejecución"
      description="Adecuamos espacios corporativos en CDMX con soluciones funcionales, sobrias y alineadas a la operación de cada empresa."
      h1="Adecuación de espacios corporativos en CDMX"
      h2={[
        "Análisis del espacio",
        "Diseño y funcionalidad",
        "Ejecución por etapas",
        "Control de presupuesto",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación corporativa"
      parentHref="/remodelacion-corporativa"
      serviceType="Adecuación de espacios corporativos"
      relatedLinks={[
        { href: "/remodelacion-corporativa/oficinas", label: "Remodelación de oficinas" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/zonas/remodelacion-santa-fe", label: "Remodelación en Santa Fe" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Qué diferencia hay entre adecuación y remodelación corporativa?",
          answer:
            "La adecuación suele enfocarse en funcionalidad, redistribución y adaptación del espacio a nuevas necesidades operativas o de marca.",
        },
        {
          question: "¿Se puede intervenir con oficinas en uso?",
          answer:
            "Sí. Muchos proyectos se organizan por fases y horarios para reducir impacto sobre la operación diaria.",
        },
        {
          question: "¿Atienden proyectos en CDMX y Estado de México?",
          answer:
            "Sí. Proyecta atiende remodelaciones residenciales, comerciales y corporativas en CDMX y Estado de México.",
        }
      ]}
    />
  );
}