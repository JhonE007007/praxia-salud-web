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

export const galeria = [
  { src: "/img/v34.jpg", titulo: "Trabajo en equipo" },
  { src: "/img/v7.jpg", titulo: "Quirófano" },
  { src: "/img/v10.jpg", titulo: "Vía aérea" },
  { src: "/img/v28.jpg", titulo: "Emergencias" },
  { src: "/img/v4.jpg", titulo: "Certificación" },
];

/* ─────────────────────────────────────────────────────────────
 *  ECOSISTEMA PRAXIA · fuente: Brochure de Servicios Praxia 2026
 * ───────────────────────────────────────────────────────────── */

export const identidad = {
  titular: "Transformamos personas en profesionales de la salud",
  destacado: "extraordinarios",
  noSomos: ["No somos un centro de simulación", "No somos una empresa de cursos"],
  somos: "Somos un ecosistema de formación, entrenamiento y desarrollo profesional en salud",
  mision:
    "Transformar la educación continua mediante metodologías inmersivas de alta fidelidad, promoviendo la seguridad del paciente y la excelencia operativa.",
  vision:
    "Ser el centro referente regional en simulación multidisciplinaria, certificación técnica y mantenimiento biomédico de vanguardia.",
};

export type Unidad = {
  id: string;
  nombre: string; // se muestra como "PRAXIA {nombre}"
  icono: "academy" | "sim" | "discovery" | "family" | "skills" | "biomed" | "consulting" | "cert";
  titulo: string;
  destacado: string;
  lema?: string;
  para: string; // a quién va dirigido (texto corto para la pestaña)
  imagen: string;
  servicios: string[];
};

export const unidades: Unidad[] = [
  {
    id: "academy", nombre: "Academy", icono: "academy",
    titulo: "Formamos hoy a los profesionales", destacado: "que transformarán la salud",
    para: "Educación continua",
    imagen: "/img/eco/academy.jpg",
    servicios: [
      "Soporte Vital", "Ultrasonido", "Emergencias", "Laboratorio Clínico", "Biología Molecular",
      "Investigación", "Docencia", "Simulación", "Inteligencia Artificial", "Gestión Hospitalaria",
      "Seguridad del Paciente", "Calidad", "Normativas", "Salud Pública", "Cursos Internacionales",
      "Diplomados", "Bootcamps", "Microcredenciales",
    ],
  },
  {
    id: "sim", nombre: "Sim", icono: "sim",
    titulo: "Formación que", destacado: "salva vidas",
    para: "Simulación clínica",
    imagen: "/img/eco/sim.jpg",
    servicios: [
      "Curso de instructores", "Curso de técnicos", "Pacientes estandarizados", "Diseño de escenarios",
      "Debriefing", "Diseño de centros", "Consultoría", "Entrenamiento institucional",
    ],
  },
  {
    id: "skills-lab", nombre: "Skills Lab", icono: "skills",
    titulo: "Domina cada", destacado: "procedimiento", lema: "Entrenamiento continuo",
    para: "Procedimientos",
    imagen: "/img/eco/skills-lab.jpg",
    servicios: ["Venopunción", "Intubación", "Ultrasonido", "Parto", "Canalización", "Laparoscopia", "Catéteres", "ECG", "Reanimación"],
  },
  {
    id: "cert", nombre: "Cert", icono: "cert",
    titulo: "Certificaciones", destacado: "que impulsan tu carrera", lema: "Prepárate. Certifícate. Destaca.",
    para: "Certificaciones",
    imagen: "/img/eco/cert.jpg",
    servicios: [
      "Certificaciones nacionales e internacionales", "Cursos oficiales", "Recertificaciones",
      "Preparación para exámenes", "Convenios internacionales",
    ],
  },
  {
    id: "discovery", nombre: "Discovery", icono: "discovery",
    titulo: "Estudiantes que se convierten en", destacado: "profesionales de la salud por un día",
    para: "Colegios y estudiantes",
    imagen: "/img/eco/discovery.jpg",
    servicios: [
      "Médico por un día", "Enfermero por un día", "Odontólogo por un día", "Biotecnólogo por un día",
      "Laboratorista por un día", "Paramédico por un día", "Obstetra por un día", "Psicólogo por un día",
      "Terapista físico por un día",
    ],
  },
  {
    id: "family", nombre: "Family", icono: "family",
    titulo: "Seguridad", destacado: "para todos", lema: "Cuida. Actúa. Protege.",
    para: "Familias y empresas",
    imagen: "/img/eco/family.jpg",
    servicios: [
      "Primeros auxilios para padres", "RCP para familias", "Atragantamiento en bebés", "Cuidado del adulto mayor",
      "Prevención de accidentes", "Uso del DEA", "Primeros auxilios escolares", "Primeros auxilios empresariales",
      "Manejo de quemaduras", "Manejo de intoxicaciones", "Salud mental básica",
    ],
  },
  {
    id: "biomed", nombre: "Biomed", icono: "biomed",
    titulo: "Gestión inteligente", destacado: "de tecnología médica", lema: "Más precisión, más confianza",
    para: "Equipos biomédicos",
    imagen: "/img/eco/biomed.jpg",
    servicios: [
      "Mantenimiento preventivo", "Mantenimiento correctivo", "Calibración", "Instalación", "Inventarios",
      "Gestión tecnológica", "Asesoría para compra de equipos", "Montaje de laboratorios", "Capacitación técnica",
    ],
  },
  {
    id: "consulting", nombre: "Consulting", icono: "consulting",
    titulo: "Impulsamos la", destacado: "excelencia", lema: "Creamos soluciones sostenibles",
    para: "Instituciones",
    imagen: "/img/eco/consulting.jpg",
    servicios: [
      "Universidades", "Hospitales", "Ministerios", "Centros de simulación", "Diseño curricular",
      "Acreditaciones", "Centros de entrenamiento", "Creación de laboratorios", "Educación continua",
    ],
  },
];

/** Planes de membresía. Agrega precio y beneficios cuando Praxia los confirme. */
export const membresias: { plan: string; precio?: string; beneficios?: string[] }[] = [
  { plan: "Mensual" },
  { plan: "Trimestral" },
  { plan: "Anual" },
];
