import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Franquicias en CDMX | Ejecución Bajo Estándares de Marca",
  description:
    "Ejecutamos remodelaciones y adecuaciones para franquicias en CDMX con cumplimiento de lineamientos de marca, calidad y tiempos.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-comercial/franquicias",
  },
};

export default function RemodelacionFranquiciasPage() {
  return (
    <SeoServicePage
      title="Remodelación de Franquicias en CDMX | Ejecución Bajo Estándares de Marca"
      description="Ejecutamos remodelaciones y adecuaciones para franquicias en CDMX con cumplimiento de lineamientos de marca, calidad y tiempos."
      h1="Remodelación de franquicias en CDMX"
      h2={[
        "Cumplimiento de lineamientos de marca",
        "Coordinación de obra",
        "Materiales y acabados",
        "Control de tiempos",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación comercial"
      parentHref="/remodelacion-comercial"
      serviceType="Remodelación de franquicias"
      relatedLinks={[
        { href: "/remodelacion-comercial/restaurantes", label: "Remodelación de restaurantes" },
        { href: "/remodelacion-comercial/locales-comerciales", label: "Remodelación de locales comerciales" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Pueden ejecutar bajo manuales de marca?",
          answer:
            "Sí. Trabajamos con lineamientos corporativos y parámetros definidos para asegurar uniformidad y calidad en cada punto de venta.",
        },
        {
          question: "¿Cómo controlan tiempos de expansión?",
          answer:
            "Mediante coordinación, supervisión y control de obra enfocados en cronograma, materiales y cumplimiento de entregables.",
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
