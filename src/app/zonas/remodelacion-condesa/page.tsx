import type { Metadata } from "next";
import SeoZonePage from "@/components/seo/SeoZonePage";

export const metadata: Metadata = {
  title: "Remodelación en Condesa | Proyectos Residenciales y Comerciales",
  description:
    "Realizamos remodelación en la Condesa con soluciones integrales para departamentos, casas y espacios comerciales.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/zonas/remodelacion-condesa",
  },
};

export default function RemodelacionCondesaPage() {
  return (
    <SeoZonePage
      title="Remodelación en Condesa | Proyectos Residenciales y Comerciales"
      description="Realizamos remodelación en la Condesa con soluciones integrales para departamentos, casas y espacios comerciales."
      h1="Remodelación en Condesa"
      zone="Condesa, Ciudad de México"
      serviceSummary="Atendemos proyectos de remodelación en la Condesa con enfoque en diseño, funcionalidad, acabados de calidad y control de obra para inmuebles residenciales y comerciales."
      services={[
        "Remodelación de departamentos",
        "Remodelación de cocina y baño",
        "Remodelación residencial integral",
        "Adecuaciones comerciales",
      ]}
      relatedLinks={[
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/proyectos/proyecto-remodelacion-condesa", label: "Proyecto de remodelación en Condesa" },
        { href: "/contacto", label: "Solicitar propuesta" },
      ]}
    />
  );
}
