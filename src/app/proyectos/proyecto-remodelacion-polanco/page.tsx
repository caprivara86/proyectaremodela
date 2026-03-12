import type { Metadata } from "next";
import SeoProjectPage from "@/components/seo/SeoProjectPage";

export const metadata: Metadata = {
  title: "Proyecto de Remodelación en Polanco | Caso de Éxito",
  description:
    "Conoce un proyecto de remodelación ejecutado en Polanco con enfoque en acabados, control de obra y resultado final.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/proyectos/proyecto-remodelacion-polanco",
  },
};

export default function ProyectoRemodelacionPolancoPage() {
  return (
    <SeoProjectPage
      title="Proyecto de Remodelación en Polanco | Caso de Éxito"
      description="Conoce un proyecto de remodelación ejecutado en Polanco con enfoque en acabados, control de obra y resultado final."
      h1="Proyecto de remodelación en Polanco"
      zone="Polanco, Ciudad de México"
      projectType="Remodelación residencial integral con acabados premium"
      materials={[
        "Pisos porcelánicos de alto formato",
        "Carpintería a medida",
        "Cubiertas de cuarzo",
        "Iluminación decorativa y funcional",
      ]}
      duration="Proyecto ejecutado por etapas con planeación, supervisión y control de entregables."
      relatedLinks={[
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/zonas/remodelacion-polanco", label: "Remodelación en Polanco" },
        { href: "/contacto", label: "Solicitar propuesta" },
      ]}
    />
  );
}
