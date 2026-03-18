import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación de Baño en CDMX | Diseño y Construcción Profesional",
  description:
    "Remodelación de baños en CDMX con diseño funcional, acabados duraderos y ejecución profesional para hogares y departamentos.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-residencial/bano",
  },
};

export default function RemodelacionBanoPage() {
  return (
    <SeoServicePage
      title="Remodelación de Baño en CDMX | Diseño y Construcción Profesional"
      description="Remodelación de baños en CDMX con diseño funcional, acabados duraderos y ejecución profesional para hogares y departamentos."
      h1="Remodelación de baño en CDMX"
      h2={[
        "Diseño de baños modernos",
        "Proceso de remodelación",
        "Materiales y acabados",
        "Costo de remodelar un baño",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación residencial"
      parentHref="/remodelacion-residencial"
      serviceType="Remodelación de baño"
      relatedLinks={[
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Cuánto tarda una remodelación de baño?",
          answer:
            "El tiempo depende del alcance, instalaciones, acabados y condiciones del inmueble, pero una buena planeación ayuda a ejecutar la obra con control y menor interrupción.",
        },
        {
          question: "¿Se puede modernizar un baño sin rehacer todo?",
          answer:
            "Sí. En muchos casos se mejora funcionalidad, imagen y durabilidad renovando acabados, muebles, iluminación y accesorios estratégicos.",
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
