import type { Metadata } from "next";
import SeoZonePage from "@/components/seo/SeoZonePage";

export const metadata: Metadata = {
  title: "Remodelación en Polanco | Servicios Residenciales y Comerciales",
  description:
    "Servicios de remodelación en Polanco para proyectos residenciales, comerciales y corporativos con ejecución profesional.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/zonas/remodelacion-polanco",
  },
};

export default function RemodelacionPolancoPage() {
  return (
    <SeoZonePage
      title="Remodelación en Polanco | Servicios Residenciales y Comerciales"
      description="Servicios de remodelación en Polanco para proyectos residenciales, comerciales y corporativos con ejecución profesional."
      h1="Remodelación en Polanco"
      zone="Polanco, Ciudad de México"
      serviceSummary="Atendemos proyectos de remodelación en Polanco con enfoque en detalle, acabados premium, control de obra y ejecución profesional."
      services={[
        "Remodelación residencial",
        "Remodelación de cocinas y baños",
        "Remodelación de departamentos",
        "Adecuaciones comerciales y corporativas",
      ]}
      relatedLinks={[
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/remodelacion-residencial/departamento", label: "Remodelación de departamentos" },
        { href: "/proyectos/proyecto-remodelacion-polanco", label: "Proyecto de remodelación en Polanco" },
        { href: "/contacto", label: "Solicitar propuesta" },
      ]}
    />
  );
}
