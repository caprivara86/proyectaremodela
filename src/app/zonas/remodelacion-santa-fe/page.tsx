import type { Metadata } from "next";
import SeoZonePage from "@/components/seo/SeoZonePage";

export const metadata: Metadata = {
  title: "Remodelación en Santa Fe | Proyectos Corporativos y Residenciales",
  description:
    "Especialistas en remodelación en Santa Fe para oficinas, espacios corporativos, viviendas y proyectos comerciales.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/zonas/remodelacion-santa-fe",
  },
};

export default function RemodelacionSantaFePage() {
  return (
    <SeoZonePage
      title="Remodelación en Santa Fe | Proyectos Corporativos y Residenciales"
      description="Especialistas en remodelación en Santa Fe para oficinas, espacios corporativos, viviendas y proyectos comerciales."
      h1="Remodelación en Santa Fe"
      zone="Santa Fe, Ciudad de México"
      serviceSummary="Atendemos proyectos de remodelación en Santa Fe con enfoque en ejecución profesional, control de obra, imagen corporativa y acabados de alto nivel."
      services={[
        "Remodelación de oficinas",
        "Adecuación de espacios corporativos",
        "Remodelación residencial",
        "Proyectos comerciales y ejecutivos",
      ]}
      relatedLinks={[
        { href: "/remodelacion-corporativa/oficinas", label: "Remodelación de oficinas" },
        { href: "/remodelacion-corporativa/adecuacion-espacios-corporativos", label: "Adecuación de espacios corporativos" },
        { href: "/proyectos/proyecto-remodelacion-santa-fe", label: "Proyecto de remodelación en Santa Fe" },
        { href: "/contacto", label: "Solicitar propuesta" },
      ]}
    />
  );
}
