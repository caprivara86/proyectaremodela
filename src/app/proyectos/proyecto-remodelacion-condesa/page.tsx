import type { Metadata } from "next";
import SeoProjectPage from "@/components/seo/SeoProjectPage";

export const metadata: Metadata = {
  title: "Proyecto de Remodelación en Condesa | Caso de Éxito",
  description:
    "Revisa un proyecto de remodelación en la Condesa con enfoque en diseño, funcionalidad y ejecución cuidada.",
  alternates: {
    canonical: "https://www.proyectaremodela.com/proyectos/proyecto-remodelacion-condesa",
  },
};

export default function ProyectoRemodelacionCondesaPage() {
  return (
    <SeoProjectPage
      title="Proyecto de Remodelación en Condesa | Caso de Éxito"
      description="Revisa un proyecto de remodelación en la Condesa con enfoque en diseño, funcionalidad y ejecución cuidada."
      h1="Proyecto de remodelación en Condesa"
      zone="Condesa, Ciudad de México"
      projectType="Remodelación de departamento con actualización de cocina, baño y acabados"
      materials={[
        "Recubrimientos cerámicos",
        "Mobiliario de cocina",
        "Grifería y accesorios",
        "Iluminación ambiental"
      ]}
      duration="Proyecto ejecutado con planeación previa, control de obra y coordinación de acabados."
      relatedLinks={[
        { href: "/remodelacion-residencial/cocina", label: "Remodelación de cocina" },
        { href: "/remodelacion-residencial/bano", label: "Remodelación de baño" },
        { href: "/zonas/remodelacion-condesa", label: "Remodelación en Condesa" },
        { href: "/contacto", label: "Solicitar propuesta" }
      ]}
    />
  );
}