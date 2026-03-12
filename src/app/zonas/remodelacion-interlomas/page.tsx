import type { Metadata } from "next";
import SeoZonePage from "@/components/seo/SeoZonePage";

export const metadata: Metadata = {
  title: "Remodelación en Interlomas | Residencial, Comercial y Corporativa",
  description:
    "Servicios de remodelación en Interlomas con enfoque en acabados premium, control de obra y atención profesional.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/zonas/remodelacion-interlomas",
  },
};

export default function RemodelacionInterlomasPage() {
  return (
    <SeoZonePage
      title="Remodelación en Interlomas | Residencial, Comercial y Corporativa"
      description="Servicios de remodelación en Interlomas con enfoque en acabados premium, control de obra y atención profesional."
      h1="Remodelación en Interlomas"
      zone="Interlomas, Estado de México"
      serviceSummary="Desarrollamos proyectos de remodelación en Interlomas para viviendas, departamentos, espacios comerciales y adecuaciones corporativas con ejecución cuidada y control de calidad."
      services={[
        "Remodelación residencial",
        "Remodelación de departamentos",
        "Remodelación integral de casa",
        "Adecuaciones comerciales y corporativas",
      ]}
      relatedLinks={[
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/remodelacion-residencial/casa-completa", label: "Remodelación integral de casa" },
        { href: "/proyectos/proyecto-remodelacion-interlomas", label: "Proyecto de remodelación en Interlomas" },
        { href: "/contacto", label: "Solicitar propuesta" },
      ]}
    />
  );
}
