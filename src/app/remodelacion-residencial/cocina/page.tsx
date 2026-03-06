import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Cocina en CDMX | Diseño y Construcción Profesional",
  description:
    "Especialistas en remodelación de cocinas en CDMX. Diseño funcional, materiales premium y ejecución profesional con control de costos y tiempos.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-residencial/cocina",
  },
};

export default function RemodelacionCocinaPage() {
  return (
    <SeoServicePage
      title="Remodelación de Cocina en CDMX | Diseño y Construcción Profesional"
      description="Especialistas en remodelación de cocinas en CDMX. Diseño funcional, materiales premium y ejecución profesional con control de costos y tiempos."
      h1="Remodelación de cocina en CDMX"
      h2={[
        "Diseño de cocinas modernas",
        "Proceso de remodelación",
        "Materiales y acabados",
        "Costo de remodelar una cocina",
        "Preguntas frecuentes",
      ]}
      parentLabel="Remodelación residencial"
      parentHref="/remodelacion-residencial"
      serviceType="Remodelación de cocina"
      relatedLinks={[
        { href: "/remodelacion-residencial/bano", label: "Remodelación de baño" },
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" },
      ]}
      faq={[
        {
          question: "¿Cuánto tarda una remodelación de cocina?",
          answer:
            "Depende del alcance, materiales y trabajos involucrados, pero una cocina bien planificada puede ejecutarse en etapas con control de tiempos y supervisión continua.",
        },
        {
          question: "¿Se puede remodelar sin cambiar toda la distribución?",
          answer:
            "Sí. Muchas cocinas se optimizan mejorando acabados, mobiliario, iluminación y funcionalidad sin intervenir toda la estructura.",
        },
        {
          question: "¿Atienden proyectos en CDMX y Estado de México?",
          answer:
            "Sí. Proyecta atiende remodelaciones residenciales, comerciales y corporativas en CDMX y Estado de México.",
        },
      ]}
    />
  );
}
