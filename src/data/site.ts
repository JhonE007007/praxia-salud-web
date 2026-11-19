/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE DEL SITIO · PRAXIA SALUD
 *  Para cambiar cursos, textos o contactos, edita SOLO este archivo.
 * ─────────────────────────────────────────────────────────────
 */

export const contacto = {
  whatsapp: "593983539400", // con código de país, sin + ni espacios
  whatsappVisible: "098 353 9400",
  email: "praxiabiomed@gmail.com",
  direccion: "Dirección por confirmar",
  ciudad: "Quito, Ecuador",
  mapsUrl: "", // pega aquí el enlace de Google Maps
  horario: "Lunes a viernes · horario por confirmar",
  redes: {
    instagram: "",
    facebook: "",
    tiktok: "",
    linkedin: "",
  },
};

export const waLink = (mensaje: string) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export type Curso = {
  id: string;
  nombre: string;
  /** Segunda línea del título (se muestra en celeste). Opcional. */
  nombreDestacado?: string;
  etiqueta: string;
  descripcion: string;
  inicio: string; // texto visible, ej. "21 de noviembre"
  dia: string; // para el sello, ej. "21"
  mes: string; // para el sello, ej. "NOV"
  modalidad: string;
  cupos: number;
  /** 0–100 · porcentaje de cupos ocupados que muestra la barra */
  ocupacion: number;
  imagen: string;
  temario?: string[];
  activo: boolean;
};

/**
 * CURSOS
 * El PRIMER curso con `activo: true` es el banner principal del sitio.
 * Agrega más cursos a la lista y aparecerán como slides del carrusel.
 */
export const cursos: Curso[] = [
  {
    id: "flebotomia-integral",
    nombre: "Flebotomía",
    nombreDestacado: "Integral",
    etiqueta: "Inscripciones abiertas",
    descripcion:
      "Demostraciones y práctica supervisada de técnicas de venopunción. Una habilidad práctica que marca la diferencia en tu formación profesional.",
    inicio: "21 de noviembre",
    dia: "21",
    mes: "NOV",
    modalidad: "Virtual y presencial",
    cupos: 30,
    ocupacion: 38,
    imagen: "/img/curso.jpg",
    temario: [
      "Bioseguridad y preparación",
      "Técnicas de venopunción",
      "Práctica en simulador",
      "Manejo de muestras",
    ],
    activo: true,
  },
];

export const institucional = {
  titulo: "Del conocimiento",
  destacado: "a la práctica",
  descripcion:
    "Centro de experiencias y capacitaciones médicas con simulación de alta fidelidad. Entrena en escenarios reales, sin riesgo para el paciente.",
  imagen: "/img/quirofano.jpg",
};

export const beneficios = [
  { icono: "target", titulo: "Aprendizaje práctico", texto: "Aprender haciendo" },
  { icono: "cpu", titulo: "Tecnología de vanguardia", texto: "Simuladores reales" },
  { icono: "users", titulo: "Docentes expertos", texto: "Especialistas activos" },
  { icono: "award", titulo: "Certificaciones", texto: "Reconocidas" },
] as const;

export const areas = [
  { icono: "activity", titulo: "Simulación de alta fidelidad", texto: "Casos clínicos completos con simuladores que reaccionan a cada decisión." },
  { icono: "scalpel", titulo: "Quirófano y vía aérea", texto: "Intubación, anestesia y manejo avanzado del paciente quirúrgico." },
  { icono: "heart", titulo: "Emergencias y RCP", texto: "Reanimación, cuidados críticos y trabajo en equipo bajo presión." },
  { icono: "baby", titulo: "Obstetricia y neonatología", texto: "Atención del parto, recién nacido y emergencias obstétricas." },
  { icono: "syringe", titulo: "Laboratorio y flebotomía", texto: "Venopunción y toma de muestras con brazos de simulación." },
  { icono: "vr", titulo: "Realidad virtual", texto: "Procedimientos paso a paso en experiencias inmersivas." },
] as const;

export const nosotros = {
  titulo: "Años de experiencia,",
  destacado: "hoy Praxia Salud",
  texto:
    "Nacemos de una trayectoria en salud, docencia, gestión de laboratorios, formación de profesionales y simulación médica, con un propósito: formar profesionales de la salud más preparados, competentes, humanos y seguros de sus conocimientos y habilidades.",
  pasos: [
    { titulo: "Aprende la teoría", texto: "Clases virtuales o presenciales con especialistas" },
    { titulo: "Practica en simulación", texto: "Escenarios reales, sin riesgo para el paciente" },
    { titulo: "Certifícate", texto: "Valida tus competencias profesionales" },
  ],
};

export const galeria = [
  { src: "/img/v34.jpg", titulo: "Trabajo en equipo" },
  { src: "/img/v7.jpg", titulo: "Quirófano" },
  { src: "/img/v10.jpg", titulo: "Vía aérea" },
  { src: "/img/v28.jpg", titulo: "Emergencias" },
  { src: "/img/v4.jpg", titulo: "Certificación" },
];
