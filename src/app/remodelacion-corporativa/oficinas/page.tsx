import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Oficinas en CDMX | Espacios Corporativos Funcionales",
  description:
    "Diseñamos y ejecutamos remodelación de oficinas en CDMX con enfoque en productividad, imagen corporativa y control de obra.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-corporativa/oficinas",
  },
};

export default function RemodelacionOficinasPage() {
  return (
    <SeoServicePage
      title="Remodelación de Oficinas en CDMX | Espacios Corporativos Funcionales"
      description="Diseñamos y ejecutamos remodelación de oficinas en CDMX con enfoque en productividad, imagen corporativa y control de obra."
      h1="Remodelación de oficinas en CDMX"
      h2={[
        "Diseño corporativo",
        "Distribución eficiente",
        "Materiales y acabados",
        "Planeación de obra",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación corporativa"
      parentHref="/remodelacion-corporativa"
      serviceType="Remodelación de oficinas"
      relatedLinks={[
        { href: "/remodelacion-corporativa/adecuacion-espacios-corporativos", label: "Adecuación de espacios corporativos" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/zonas/remodelacion-santa-fe", label: "Remodelación en Santa Fe" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Pueden remodelar oficinas por etapas?",
          answer:
            "Sí. Se puede planear la ejecución por fases para reducir afectaciones operativas y mantener continuidad del negocio.",
        },
        {
          question: "¿Trabajan imagen corporativa y funcionalidad?",
          answer:
            "Sí. El objetivo es equilibrar identidad de marca, productividad, confort y durabilidad del espacio.",
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
