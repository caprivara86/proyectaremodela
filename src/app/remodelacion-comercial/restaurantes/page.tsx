import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Restaurantes en CDMX | Ejecución Comercial Profesional",
  description:
    "Adecuamos y remodelamos restaurantes en CDMX con enfoque en operación, imagen de marca, tiempos de obra y durabilidad.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-comercial/restaurantes",
  },
};

export default function RemodelacionRestaurantesPage() {
  return (
    <SeoServicePage
      title="Remodelación de Restaurantes en CDMX | Ejecución Comercial Profesional"
      description="Adecuamos y remodelamos restaurantes en CDMX con enfoque en operación, imagen de marca, tiempos de obra y durabilidad."
      h1="Remodelación de restaurantes en CDMX"
      h2={[
        "Diseño funcional para operación",
        "Imagen y experiencia del cliente",
        "Materiales de alto tránsito",
        "Tiempos de ejecución",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación comercial"
      parentHref="/remodelacion-comercial"
      serviceType="Remodelación de restaurantes"
      relatedLinks={[
        { href: "/remodelacion-comercial/locales-comerciales", label: "Remodelación de locales comerciales" },
        { href: "/remodelacion-comercial/franquicias", label: "Remodelación de franquicias" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Pueden remodelar sin afectar toda la operación?",
          answer:
            "Dependiendo del proyecto, es posible planear fases de ejecución para reducir interrupciones y mantener control sobre tiempos de reapertura.",
        },
        {
          question: "¿Trabajan con lineamientos de marca?",
          answer:
            "Sí. Podemos ejecutar proyectos alineados a imagen de marca, experiencia del cliente y requerimientos operativos del negocio.",
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