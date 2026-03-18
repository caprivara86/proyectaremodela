import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Departamentos en CDMX | Diseño Integral",
  description:
    "Especialistas en remodelación de departamentos en CDMX. Optimizamos espacios, acabados y distribución con ejecución profesional.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-residencial/departamento",
  },
};

export default function RemodelacionDepartamentoPage() {
  return (
    <SeoServicePage
      title="Remodelación de Departamentos en CDMX | Diseño Integral"
      description="Especialistas en remodelación de departamentos en CDMX. Optimizamos espacios, acabados y distribución con ejecución profesional."
      h1="Remodelación de departamentos en CDMX"
      h2={[
        "Remodelación integral de departamentos",
        "Optimización de espacios",
        "Materiales y acabados",
        "Costo aproximado",
        "Proceso de remodelación"
      ]}
      parentLabel="Remodelación residencial"
      parentHref="/remodelacion-residencial"
      serviceType="Remodelación de departamentos"
      relatedLinks={[
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/remodelacion-residencial/bano", label: "Remodelación de baño" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Qué tipo de mejoras se hacen en un departamento?",
          answer:
            "Se pueden renovar cocina, baños, pisos, iluminación, carpintería, pintura, distribución y acabados para elevar funcionalidad y valor del inmueble.",
        },
        {
          question: "¿Se puede remodelar por etapas?",
          answer:
            "Sí. Muchos departamentos se intervienen por fases para controlar presupuesto, tiempos y operación del espacio.",
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
