export type SeoPage = {
  slug: string;
  parent: "residencial" | "comercial" | "corporativa" | "proyectos" | "zonas" | "blog";
  url: string;
  keyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  h1: string;
  h2: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "cocina",
    parent: "residencial",
    url: "/remodelacion-residencial/cocina",
    keyword: "remodelación de cocina CDMX",
    secondaryKeywords: ["remodelar cocina precio CDMX", "cocinas modernas remodelación", "empresa remodelación cocina"],
    title: "Remodelación de Cocina en CDMX | Diseño y Construcción Profesional",
    description: "Especialistas en remodelación de cocinas en CDMX. Diseño funcional, materiales premium y ejecución profesional con control de costos y tiempos.",
    h1: "Remodelación de cocina en CDMX",
    h2: ["Diseño de cocinas modernas", "Proceso de remodelación", "Materiales y acabados", "Costo de remodelar una cocina", "Preguntas frecuentes"]
  },
  {
    slug: "bano",
    parent: "residencial",
    url: "/remodelacion-residencial/bano",
    keyword: "remodelación de baño CDMX",
    secondaryKeywords: ["remodelar baño precio CDMX", "baños modernos remodelación", "empresa remodelación baño"],
    title: "Remodelación de Baño en CDMX | Diseño y Construcción Profesional",
    description: "Remodelación de baños en CDMX con diseño funcional, acabados duraderos y ejecución profesional para hogares y departamentos.",
    h1: "Remodelación de baño en CDMX",
    h2: ["Diseño de baños modernos", "Proceso de remodelación", "Materiales y acabados", "Costo de remodelar un baño", "Preguntas frecuentes"]
  },
  {
    slug: "departamento",
    parent: "residencial",
    url: "/remodelacion-residencial/departamento",
    keyword: "remodelación de departamentos CDMX",
    secondaryKeywords: ["remodelar departamento CDMX", "remodelación integral departamento", "empresa remodelación departamentos"],
    title: "Remodelación de Departamentos en CDMX | Diseño Integral",
    description: "Especialistas en remodelación de departamentos en CDMX. Optimizamos espacios, acabados y distribución con ejecución profesional.",
    h1: "Remodelación de departamentos en CDMX",
    h2: ["Remodelación integral de departamentos", "Optimización de espacios", "Materiales y acabados", "Costo aproximado", "Proceso de remodelación"]
  },
  {
    slug: "casa-completa",
    parent: "residencial",
    url: "/remodelacion-residencial/casa-completa",
    keyword: "remodelación integral de casa CDMX",
    secondaryKeywords: ["remodelar casa completa", "empresa remodelación casa", "remodelación residencial integral"],
    title: "Remodelación Integral de Casa en CDMX | Proyecto Llave en Mano",
    description: "Transformamos casas completas en CDMX con diseño, planeación, ejecución y supervisión profesional de principio a fin.",
    h1: "Remodelación integral de casa en CDMX",
    h2: ["Planeación del proyecto", "Diseño arquitectónico", "Control de obra", "Duración del proyecto", "Preguntas frecuentes"]
  },
  {
    slug: "restaurantes",
    parent: "comercial",
    url: "/remodelacion-comercial/restaurantes",
    keyword: "remodelación de restaurantes CDMX",
    secondaryKeywords: ["adecuación de restaurantes", "obra para restaurantes", "remodelación comercial restaurantes"],
    title: "Remodelación de Restaurantes en CDMX | Ejecución Comercial Profesional",
    description: "Adecuamos y remodelamos restaurantes en CDMX con enfoque en operación, imagen de marca, tiempos de obra y durabilidad.",
    h1: "Remodelación de restaurantes en CDMX",
    h2: ["Diseño funcional para operación", "Imagen y experiencia del cliente", "Materiales de alto tránsito", "Tiempos de ejecución", "Preguntas frecuentes"]
  },
  {
    slug: "locales-comerciales",
    parent: "comercial",
    url: "/remodelacion-comercial/locales-comerciales",
    keyword: "remodelación de locales comerciales CDMX",
    secondaryKeywords: ["adecuación de locales", "obra comercial CDMX", "remodelación de negocio"],
    title: "Remodelación de Locales Comerciales en CDMX | Diseño y Ejecución",
    description: "Remodelación de locales comerciales en CDMX para negocios que necesitan imagen profesional, funcionalidad y control de presupuesto.",
    h1: "Remodelación de locales comerciales en CDMX",
    h2: ["Adecuación para apertura o renovación", "Diseño comercial", "Materiales y acabados", "Control de presupuesto", "Preguntas frecuentes"]
  },
  {
    slug: "franquicias",
    parent: "comercial",
    url: "/remodelacion-comercial/franquicias",
    keyword: "remodelación de franquicias CDMX",
    secondaryKeywords: ["adecuación de franquicias", "obra para franquicias", "estándares de marca franquicia"],
    title: "Remodelación de Franquicias en CDMX | Ejecución Bajo Estándares de Marca",
    description: "Ejecutamos remodelaciones y adecuaciones para franquicias en CDMX con cumplimiento de lineamientos de marca, calidad y tiempos.",
    h1: "Remodelación de franquicias en CDMX",
    h2: ["Cumplimiento de lineamientos de marca", "Coordinación de obra", "Materiales y acabados", "Control de tiempos", "Preguntas frecuentes"]
  },
  {
    slug: "oficinas",
    parent: "corporativa",
    url: "/remodelacion-corporativa/oficinas",
    keyword: "remodelación de oficinas CDMX",
    secondaryKeywords: ["adecuación de oficinas", "oficinas corporativas remodelación", "obra corporativa CDMX"],
    title: "Remodelación de Oficinas en CDMX | Espacios Corporativos Funcionales",
    description: "Diseñamos y ejecutamos remodelación de oficinas en CDMX con enfoque en productividad, imagen corporativa y control de obra.",
    h1: "Remodelación de oficinas en CDMX",
    h2: ["Diseño corporativo", "Distribución eficiente", "Materiales y acabados", "Planeación de obra", "Preguntas frecuentes"]
  },
  {
    slug: "adecuacion-espacios-corporativos",
    parent: "corporativa",
    url: "/remodelacion-corporativa/adecuacion-espacios-corporativos",
    keyword: "adecuación de espacios corporativos CDMX",
    secondaryKeywords: ["remodelación corporativa", "obra corporativa", "espacios corporativos funcionales"],
    title: "Adecuación de Espacios Corporativos en CDMX | Proyecto y Ejecución",
    description: "Adecuamos espacios corporativos en CDMX con soluciones funcionales, sobrias y alineadas a la operación de cada empresa.",
    h1: "Adecuación de espacios corporativos en CDMX",
    h2: ["Análisis del espacio", "Diseño y funcionalidad", "Ejecución por etapas", "Control de presupuesto", "Preguntas frecuentes"]
  },
  {
    slug: "proyecto-remodelacion-polanco",
    parent: "proyectos",
    url: "/proyectos/proyecto-remodelacion-polanco",
    keyword: "remodelación en Polanco",
    secondaryKeywords: ["proyecto remodelación Polanco", "remodelación residencial Polanco", "obra premium Polanco"],
    title: "Proyecto de Remodelación en Polanco | Caso de Éxito",
    description: "Conoce un proyecto de remodelación ejecutado en Polanco con enfoque en acabados, control de obra y resultado final.",
    h1: "Proyecto de remodelación en Polanco",
    h2: ["Tipo de proyecto", "Zona y contexto", "Materiales utilizados", "Duración del proyecto", "Resultado final"]
  },
  {
    slug: "proyecto-remodelacion-santa-fe",
    parent: "proyectos",
    url: "/proyectos/proyecto-remodelacion-santa-fe",
    keyword: "remodelación en Santa Fe",
    secondaryKeywords: ["proyecto remodelación Santa Fe", "obra corporativa Santa Fe", "remodelación comercial Santa Fe"],
    title: "Proyecto de Remodelación en Santa Fe | Caso de Éxito",
    description: "Explora un proyecto de remodelación en Santa Fe ejecutado con planeación, acabados de calidad y control de tiempos.",
    h1: "Proyecto de remodelación en Santa Fe",
    h2: ["Tipo de proyecto", "Zona y contexto", "Materiales utilizados", "Duración del proyecto", "Resultado final"]
  },
  {
    slug: "proyecto-remodelacion-interlomas",
    parent: "proyectos",
    url: "/proyectos/proyecto-remodelacion-interlomas",
    keyword: "remodelación en Interlomas",
    secondaryKeywords: ["proyecto remodelación Interlomas", "remodelación residencial Interlomas", "obra premium Interlomas"],
    title: "Proyecto de Remodelación en Interlomas | Caso de Éxito",
    description: "Caso de éxito de remodelación en Interlomas con enfoque en detalle, materiales y ejecución profesional.",
    h1: "Proyecto de remodelación en Interlomas",
    h2: ["Tipo de proyecto", "Zona y contexto", "Materiales utilizados", "Duración del proyecto", "Resultado final"]
  },
  {
    slug: "proyecto-remodelacion-condesa",
    parent: "proyectos",
    url: "/proyectos/proyecto-remodelacion-condesa",
    keyword: "remodelación en Condesa",
    secondaryKeywords: ["proyecto remodelación Condesa", "remodelación departamento Condesa", "obra Condesa CDMX"],
    title: "Proyecto de Remodelación en Condesa | Caso de Éxito",
    description: "Revisa un proyecto de remodelación en la Condesa con enfoque en diseño, funcionalidad y ejecución cuidada.",
    h1: "Proyecto de remodelación en Condesa",
    h2: ["Tipo de proyecto", "Zona y contexto", "Materiales utilizados", "Duración del proyecto", "Resultado final"]
  },
  {
    slug: "remodelacion-polanco",
    parent: "zonas",
    url: "/zonas/remodelacion-polanco",
    keyword: "remodelación en Polanco",
    secondaryKeywords: ["empresa de remodelación Polanco", "remodelación residencial Polanco", "remodelación comercial Polanco"],
    title: "Remodelación en Polanco | Servicios Residenciales y Comerciales",
    description: "Servicios de remodelación en Polanco para proyectos residenciales, comerciales y corporativos con ejecución profesional.",
    h1: "Remodelación en Polanco",
    h2: ["Servicios disponibles en Polanco", "Tipos de proyectos", "Proceso de trabajo", "Zonas de atención cercanas", "Preguntas frecuentes"]
  },
  {
    slug: "remodelacion-santa-fe",
    parent: "zonas",
    url: "/zonas/remodelacion-santa-fe",
    keyword: "remodelación en Santa Fe",
    secondaryKeywords: ["empresa de remodelación Santa Fe", "remodelación corporativa Santa Fe", "obra comercial Santa Fe"],
    title: "Remodelación en Santa Fe | Proyectos Corporativos y Residenciales",
    description: "Especialistas en remodelación en Santa Fe para oficinas, espacios corporativos, viviendas y proyectos comerciales.",
    h1: "Remodelación en Santa Fe",
    h2: ["Servicios disponibles en Santa Fe", "Tipos de proyectos", "Proceso de trabajo", "Zonas de atención cercanas", "Preguntas frecuentes"]
  },
  {
    slug: "remodelacion-condesa",
    parent: "zonas",
    url: "/zonas/remodelacion-condesa",
    keyword: "remodelación en Condesa",
    secondaryKeywords: ["empresa de remodelación Condesa", "remodelación de departamentos Condesa", "obra residencial Condesa"],
    title: "Remodelación en Condesa | Proyectos Residenciales y Comerciales",
    description: "Realizamos remodelación en la Condesa con soluciones integrales para departamentos, casas y espacios comerciales.",
    h1: "Remodelación en Condesa",
    h2: ["Servicios disponibles en Condesa", "Tipos de proyectos", "Proceso de trabajo", "Zonas de atención cercanas", "Preguntas frecuentes"]
  },
  {
    slug: "remodelacion-interlomas",
    parent: "zonas",
    url: "/zonas/remodelacion-interlomas",
    keyword: "remodelación en Interlomas",
    secondaryKeywords: ["empresa de remodelación Interlomas", "remodelación residencial Interlomas", "obra premium Interlomas"],
    title: "Remodelación en Interlomas | Residencial, Comercial y Corporativa",
    description: "Servicios de remodelación en Interlomas con enfoque en acabados premium, control de obra y atención profesional.",
    h1: "Remodelación en Interlomas",
    h2: ["Servicios disponibles en Interlomas", "Tipos de proyectos", "Proceso de trabajo", "Zonas de atención cercanas", "Preguntas frecuentes"]
  }
];
