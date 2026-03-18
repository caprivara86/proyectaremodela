import type { Metadata } from "next";
import SeoProjectPage from "@/components/seo/SeoProjectPage";

export const metadata: Metadata = {
  title: "Proyecto de Remodelación en Interlomas | Caso de Éxito",
  description:
    "Caso de éxito de remodelación en Interlomas con enfoque en detalle, materiales y ejecución profesional.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/proyectos/proyecto-remodelacion-interlomas",
  },
};

export default function ProyectoRemodelacionInterlomasPage() {
  return (
    <SeoProjectPage
      title="Proyecto de Remodelación en Interlomas | Caso de Éxito"
      description="Caso de éxito de remodelación en Interlomas con enfoque en detalle, materiales y ejecución profesional."
      h1="Proyecto de remodelación en Interlomas"
      zone="Interlomas, Estado de México"
      projectType="Remodelación residencial integral con enfoque en funcionalidad y acabados premium"
      materials={[
        "Pisos porcelánicos",
        "Cubiertas de cuarzo",
        "Iluminación decorativa",
        "Carpintería y closets a medida"
      ]}
      duration="Obra planeada por etapas con supervisión continua y control de entregables."
      relatedLinks={[
        { href: "/remodelacion-residencial/casa-completa", label: "Remodelación integral de casa" },
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/zonas/remodelacion-interlomas", label: "Remodelación en Interlomas" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
    />
  );
}
