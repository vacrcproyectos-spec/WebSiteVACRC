export const SITE = {
  name: "VACRC",
  tagline: "Instalación · Mantenimiento · Reparación de Minisplit",
  description:
    "VACRC instala, da mantenimiento y repara equipos de aire acondicionado tipo minisplit para hogares y negocios que buscan confort inmediato y un servicio técnico de confianza.",
  phone: "+52 999 123 4567",
  email: "contacto@vacrc.mx",
  address: "Mérida, Yucatán, México",
  hours: "Lun – Sáb, 8:00 – 19:00 · Emergencias 24/7",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  slug: string;
  icon: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "instalacion-minisplit",
    icon: "ac",
    name: "Instalación",
    short: "Equipos nuevos, instalados a la primera",
    description:
      "Instalamos equipos minisplit de todas las capacidades y marcas, con cálculo del tamaño correcto para tu espacio, línea frigorífica a medida y pruebas de vacío y carga de gas para que tu equipo rinda al máximo desde el primer encendido.",
    bullets: ["Cálculo de capacidad ideal", "Instalación de línea frigorífica", "Prueba de vacío y carga de gas"],
  },
  {
    slug: "mantenimiento-minisplit",
    icon: "fan",
    name: "Mantenimiento",
    short: "Rendimiento y ahorro que no se apagan",
    description:
      "Programas de mantenimiento preventivo con limpieza profunda de evaporadora y condensadora, revisión de gas refrigerante y componentes eléctricos, para alargar la vida útil de tu equipo y mantener bajo el consumo eléctrico.",
    bullets: ["Limpieza de evaporadora y condensadora", "Revisión de gas refrigerante", "Chequeo eléctrico y de drenaje"],
  },
  {
    slug: "reparacion-minisplit",
    icon: "refrigeracion",
    name: "Reparación",
    short: "Diagnóstico certero, solución rápida",
    description:
      "Diagnosticamos y reparamos fallas eléctricas, fugas de refrigerante, ruidos y falta de enfriamiento, con refacciones de calidad y técnicos capacitados para que tu minisplit vuelva a funcionar sin rodeos.",
    bullets: ["Diagnóstico de fallas", "Detección y reparación de fugas", "Cambio de componentes y refacciones"],
  },
];

export type Brand = {
  slug: string;
  name: string;
};

// Placeholder: marcas reconocidas del sector HVAC/refrigeración.
// Confirma o reemplaza esta lista por los proveedores reales de VACRC antes de publicar.
export const BRANDS: Brand[] = [
  { slug: "carrier", name: "Carrier" },
  { slug: "trane", name: "Trane" },
  { slug: "york", name: "York" },
  { slug: "daikin", name: "Daikin" },
  { slug: "mitsubishi-electric", name: "Mitsubishi Electric" },
  { slug: "copeland", name: "Copeland" },
  { slug: "danfoss", name: "Danfoss" },
];

export type Equipment = {
  slug: string;
  icon: string;
  name: string;
  short: string;
};

export const EQUIPMENT: Equipment[] = [
  {
    slug: "minisplit",
    icon: "ac",
    name: "Minisplit tipo Pared",
    short: "La solución más popular: instalación rápida, silenciosa y eficiente para una sola zona, ideal para hogares, oficinas y consultorios.",
  },
  {
    slug: "cassette",
    icon: "ac",
    name: "Minisplit tipo Cassette",
    short: "Climatización empotrada en plafón, ideal para locales comerciales y áreas abiertas sin unidades visibles en pared.",
  },
  {
    slug: "minisplit-ducto",
    icon: "fan",
    name: "Minisplit tipo Ducto",
    short: "Climatización oculta que se integra al plafón mediante ductería, sin unidades visibles en el espacio.",
  },
  {
    slug: "vrf-vrv",
    icon: "ac",
    name: "Sistemas VRF / VRV",
    short: "Para proyectos que necesitan varias unidades interiores tipo minisplit controladas desde un solo sistema exterior, con control independiente por zona.",
  },
];

export type Value = {
  icon: string;
  name: string;
};

export const VALUES: Value[] = [
  { icon: "target", name: "Enfoque al cliente" },
  { icon: "scale", name: "Integridad" },
  { icon: "gem", name: "Calidad" },
  { icon: "shield", name: "Seguridad" },
  { icon: "bulb", name: "Innovación" },
  { icon: "team", name: "Trabajo en equipo" },
];

// Rutas de imagen de la sección "Nosotros". Cambia el nombre de archivo aquí
// y colócalo en public/nosotros/ para actualizar la foto correspondiente.
export const ABOUT_IMAGES = {
  equipo: "/nosotros/equipo.png",
  instalacion: "/nosotros/instalacion.png",
  mision: "/nosotros/mision.png",
  vision: "/nosotros/vision.png",
};

export type Project = {
  slug: string;
  icon: string;
  tag: string;
  title: string;
  client: string;
  date: string;
  description: string;
};

// La imagen de cada proyecto vive en public/projects/{slug}.png
export const PROJECTS: Project[] = [
  {
    slug: "instalacion-minisplit-oficinas",
    icon: "ac",
    tag: "Instalación",
    title: "Instalación de minisplits en oficinas corporativas",
    client: "Mérida, Yuc.",
    date: "Marzo 2024",
    description:
      "Instalación de 12 equipos minisplit en un corporativo de 3 niveles, con cálculo de capacidad por área, línea frigorífica oculta y puesta en marcha por fases para no interrumpir la operación de las oficinas.",
  },
  {
    slug: "mantenimiento-minisplit-hotel",
    icon: "fan",
    tag: "Mantenimiento",
    title: "Mantenimiento preventivo a flotilla de minisplits",
    client: "Cancún, Q.Roo",
    date: "Julio 2023",
    description:
      "Programa de mantenimiento preventivo trimestral para 30 equipos minisplit de un hotel boutique, con limpieza de evaporadoras y condensadoras, revisión de gas refrigerante y reporte técnico por habitación.",
  },
  {
    slug: "reparacion-minisplit-comercio",
    icon: "refrigeracion",
    tag: "Reparación",
    title: "Reparación urgente de minisplit en local comercial",
    client: "Playa del Carmen",
    date: "Octubre 2023",
    description:
      "Diagnóstico y reparación de una fuga de refrigerante que impedía el enfriamiento de un local comercial, con recarga de gas, sellado de línea y prueba de funcionamiento el mismo día para no afectar el horario de atención.",
  },
  {
    slug: "instalacion-minisplit-residencial",
    icon: "ac",
    tag: "Instalación",
    title: "Instalación residencial de minisplit",
    client: "Campeche",
    date: "Enero 2024",
    description:
      "Instalación de 3 equipos minisplit en una vivienda, incluyendo salida de drenaje, conexión eléctrica dedicada y acabados que cuidan la fachada, con garantía de instalación y primera revisión de cortesía a los 30 días.",
  },
];
