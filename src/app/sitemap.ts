import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.proyectaremodela.com";

  const routes = [
    "",
    "/servicios",
    "/proyectos",
    "/por-que",
    "/contacto",
  ];

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}