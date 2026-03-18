import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Locales Comerciales en CDMX | Diseño y Ejecución",
  description:
    "Remodelación de locales comerciales en CDMX para negocios que necesitan imagen profesional, funcionalidad y control de presupuesto.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-comercial/locales-comerciales",
  },
};

export default function RemodelacionLocalesComercialesPage() {
  return (
    <SeoServicePage
      title="Remodelación de Locales Comerciales en CDMX | Diseño y Ejecución"
      description="Remodelación de locales comerciales en CDMX para negocios que necesitan imagen profesional, funcionalidad y control de presupuesto."
      h1="Remodelación de locales comerciales en CDMX"
      h2={[
        "Adecuación para apertura o renovación",
        "Diseño comercial",
        "Materiales y acabados",
        "Control de presupuesto",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación comercial"
      parentHref="/remodelacion-comercial"
      serviceType="Remodelación de locales comerciales"
      relatedLinks={[
        { href: "/remodelacion-comercial/restaurantes", label: "Remodelación de restaurantes" },
        { href: "/remodelacion-comercial/franquicias", label: "Remodelación de franquicias" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Atienden aperturas y renovaciones?",
          answer:
            "Sí. Podemos intervenir tanto locales nuevos como espacios existentes que requieren actualización funcional o visual.",
        },
        {
          question: "¿Ayudan a optimizar presupuesto?",
          answer:
            "Sí. La planeación y selección correcta de materiales y alcances ayuda a controlar inversión y calidad de ejecución.",
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
