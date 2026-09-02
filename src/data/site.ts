export const SITE = {
  name: "VACRC",
  tagline: "Cálculo · Cotización · Proyectos de Climatización",
  description:
    "VACRC cotiza y diseña proyectos de climatización, desde el cálculo y la selección de equipo hasta la entrega y el mantenimiento. Nos especializamos en centros comerciales, departamentos, plantas de producción, almacenes, bodegas y quirófanos.",
  phone: "+52 991 959 2109",
  email: "vacrcproyectos@gmail.com",
  address: "Mérida, Yucatán, México",
  hours: "Lun – Vie, 8:30 – 17:30",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61593057442063&sk=about",
  instagram: "https://www.instagram.com/vacrcproyectos/",
  whatsapp: `https://wa.me/${SITE.phone.replace(/\D/g, "")}`,
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Alcance", href: "#alcance" },
  { label: "Nosotros", href: "#nosotros" },
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
    slug: "calculo",
    icon: "target",
    name: "Cálculo",
    short: "Cálculos precisos que sostienen todo el proyecto",
    description:
      "Realizamos cálculos precisos y eficientes de carga térmica, capacidad de equipos y requerimientos técnicos, para que cada proyecto de climatización parta de una base confiable y ajustada a la realidad del espacio.",
    bullets: ["Cálculo de carga térmica", "Dimensionamiento de equipos", "Requerimientos técnicos del espacio"],
  },
  {
    slug: "seleccion",
    icon: "scale",
    name: "Selección",
    short: "La mejor opción técnica y económica para tu proyecto",
    description:
      "Elegimos la mejor opción para tu proyecto entre equipos, marcas y soluciones disponibles, evaluando rendimiento, eficiencia energética y costo, para asegurar que la propuesta se ajuste a tus necesidades reales.",
    bullets: ["Comparación de marcas y equipos", "Análisis de eficiencia energética", "Recomendación técnica objetiva"],
  },
  {
    slug: "dibujo",
    icon: "conservacion",
    name: "Dibujo",
    short: "Planos técnicos claros antes de ejecutar",
    description:
      "Diseñamos planos técnicos detallados con la distribución de equipos, ductería y líneas frigoríficas, para que el proyecto quede claro y validado antes de iniciar cualquier trabajo en sitio.",
    bullets: ["Planos de distribución de equipos", "Trazado de ductería y líneas", "Validación técnica previa a obra"],
  },
  {
    slug: "cuantificacion",
    icon: "gem",
    name: "Cuantificación",
    short: "Cada material y partida, contabilizada con precisión",
    description:
      "Cuantificamos cada detalle del proyecto, desde equipos y materiales hasta mano de obra, para que la cotización refleje con exactitud lo que se necesita, sin sorpresas ni faltantes durante la ejecución.",
    bullets: ["Levantamiento de materiales", "Cálculo de mano de obra", "Detalle completo de partidas"],
  },
  {
    slug: "catalogo",
    icon: "ac",
    name: "Catálogo",
    short: "Equipos y materiales de las mejores marcas",
    description:
      "Contamos con catálogos actualizados de equipos y materiales de las principales marcas del sector, para ofrecerte opciones vigentes en tecnología, garantía y disponibilidad.",
    bullets: ["Marcas líderes del sector", "Fichas técnicas actualizadas", "Disponibilidad y tiempos de entrega"],
  },
  {
    slug: "presupuesto",
    icon: "shield",
    name: "Presupuesto",
    short: "Presupuestos claros, sin letras pequeñas",
    description:
      "Elaboramos presupuestos claros, detallados y competitivos, desglosando cada concepto para que tomes decisiones informadas sobre la inversión de tu proyecto.",
    bullets: ["Desglose por partida", "Precios competitivos", "Sin costos ocultos"],
  },
  {
    slug: "planeacion",
    icon: "bulb",
    name: "Planeación",
    short: "Tiempos y recursos organizados desde el inicio",
    description:
      "Organizamos tiempos y recursos de cada proyecto, definiendo etapas, responsables y fechas clave, para una ejecución ordenada que cumpla con los plazos comprometidos.",
    bullets: ["Cronograma de trabajo", "Asignación de recursos", "Coordinación por etapas"],
  },
  {
    slug: "control",
    icon: "team",
    name: "Control",
    short: "Supervisión técnica en cada etapa",
    description:
      "Supervisamos y aseguramos la calidad en cada etapa del proyecto, con revisiones técnicas constantes que garantizan que la ejecución cumpla con lo diseñado y cotizado.",
    bullets: ["Supervisión técnica en obra", "Verificación de calidad", "Seguimiento de avance"],
  },
  {
    slug: "entrega",
    icon: "arrow",
    name: "Entrega",
    short: "Proyectos entregados a tiempo y con respaldo",
    description:
      "Entregamos a tiempo, con compromiso, cada proyecto de climatización, incluyendo pruebas de funcionamiento y documentación técnica para que inicies operaciones sin contratiempos.",
    bullets: ["Entrega en tiempo comprometido", "Pruebas de funcionamiento", "Documentación técnica"],
  },
  {
    slug: "mantenimiento",
    icon: "fan",
    name: "Mantenimiento",
    short: "Mantenimiento preventivo y correctivo confiable",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo confiable para que los equipos instalados mantengan su rendimiento y vida útil, con planes programados según las necesidades de cada proyecto.",
    bullets: ["Mantenimiento preventivo programado", "Atención correctiva confiable", "Extensión de vida útil del equipo"],
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

export type Specialty = {
  slug: string;
  icon: string;
  name: string;
  short: string;
};

// La imagen de cada especialidad vive en public/especialidades/{slug}.png
export const SPECIALTIES: Specialty[] = [
  {
    slug: "centros-comerciales",
    icon: "gem",
    name: "Centros Comerciales",
    short: "Climatización de alto rendimiento para grandes superficies, con control por zonas y confort constante para locatarios y visitantes.",
  },
  {
    slug: "hoteles",
    icon: "team",
    name: "Hoteles",
    short: "Soluciones pensadas para la experiencia del huésped, con control independiente por habitación y cobertura para áreas comunes.",
  },
  {
    slug: "departamentos",
    icon: "ac",
    name: "Departamentos",
    short: "Proyectos de climatización para desarrollos residenciales, con soluciones eficientes para cada unidad y las áreas compartidas.",
  },
  {
    slug: "plantas-produccion",
    icon: "fan",
    name: "Plantas de Producción",
    short: "Climatización industrial que protege procesos, equipos y personal, incluso en condiciones de operación exigentes.",
  },
  {
    slug: "almacenes-bodegas",
    icon: "conservacion",
    name: "Almacenes y Bodegas",
    short: "Control de temperatura y humedad para proteger inventario, materia prima y condiciones óptimas de almacenamiento.",
  },
  {
    slug: "quirofanos",
    icon: "shield",
    name: "Quirófanos",
    short: "Climatización de precisión con los estándares de calidad y seguridad que requieren los espacios médicos críticos.",
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

