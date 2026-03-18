import type { Metadata } from "next";
import SeoProjectPage from "@/components/seo/SeoProjectPage";

export const metadata: Metadata = {
  title: "Proyecto de Remodelación en Santa Fe | Caso de Éxito",
  description:
    "Explora un proyecto de remodelación en Santa Fe ejecutado con planeación, acabados de calidad y control de tiempos.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/proyectos/proyecto-remodelacion-santa-fe",
  },
};

export default function ProyectoRemodelacionSantaFePage() {
  return (
    <SeoProjectPage
      title="Proyecto de Remodelación en Santa Fe | Caso de Éxito"
      description="Explora un proyecto de remodelación en Santa Fe ejecutado con planeación, acabados de calidad y control de tiempos."
      h1="Proyecto de remodelación en Santa Fe"
      zone="Santa Fe, Ciudad de México"
      projectType="Adecuación corporativa y remodelación de oficinas con imagen ejecutiva"
      materials={[
        "Mamparas y cancelería",
        "Pisos vinílicos de alto desempeño",
        "Iluminación lineal",
        "Carpintería corporativa"
      ]}
      duration="Proyecto ejecutado por fases para mantener control operativo, tiempos y calidad de entrega."
      relatedLinks={[
        { href: "/remodelacion-corporativa/oficinas", label: "Remodelación de oficinas" },
        { href: "/remodelacion-corporativa/adecuacion-espacios-corporativos", label: "Adecuación de espacios corporativos" },
        { href: "/zonas/remodelacion-santa-fe", label: "Remodelación en Santa Fe" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
    />
  );
}
