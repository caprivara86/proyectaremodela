import type { Metadata } from "next";
import SeoServicePage from "@/components/seo/SeoServicePage";

export const metadata: Metadata = {
  title: "Remodelación Integral de Casa en CDMX | Proyecto Llave en Mano",
  description:
    "Transformamos casas completas en CDMX con diseño, planeación, ejecución y supervisión profesional de principio a fin.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/remodelacion-residencial/casa-completa",
  },
};

export default function RemodelacionCasaCompletaPage() {
  return (
    <SeoServicePage
      title="Remodelación Integral de Casa en CDMX | Proyecto Llave en Mano"
      description="Transformamos casas completas en CDMX con diseño, planeación, ejecución y supervisión profesional de principio a fin."
      h1="Remodelación integral de casa en CDMX"
      h2={[
        "Planeación del proyecto",
        "Diseño arquitectónico",
        "Control de obra",
        "Duración del proyecto",
        "Preguntas frecuentes"
      ]}
      parentLabel="Remodelación residencial"
      parentHref="/remodelacion-residencial"
      serviceType="Remodelación integral de casa"
      relatedLinks={[
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/remodelacion-residencial/bano", label: "Remodelación de baño" },
        { href: "/proyectos", label: "Ver proyectos" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
      faq={[
        {
          question: "¿Qué incluye una remodelación integral de casa?",
          answer:
            "Puede incluir rediseño de espacios, cocina, baños, pisos, iluminación, carpintería, instalaciones y acabados según el alcance del proyecto.",
        },
        {
          question: "¿Cómo controlan tiempos y presupuesto?",
          answer:
            "Con planeación previa, definición de alcances, supervisión continua y seguimiento puntual de ejecución y materiales.",
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
