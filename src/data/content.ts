// ─── CONTENIDO DEL SITIO ─────────────────────────────────────────────
// Cambia aquí para actualizar textos en todo el sitio.

export const siteData = {
  // ── Personal ──────────────────────────────────────────────────────
  name: 'Fabio Turiño Rodríguez',
  title: 'Ingeniero de Software & Consultor Tecnológico',
  heroHeadline: 'Construyo presencia digital y software que hacen crecer tu negocio.',
  heroSubtitle:
    'Ingeniero de software y consultor tecnológico. Desarrollo web, sistemas de gestión a medida, SEO y automatización — con un solo objetivo: que tu negocio venda más y opere mejor.',
  heroCta: 'Hablemos',
  heroCta2: 'Ver mi trabajo',

  email: 'turinorodriguezfabio@gmail.com',
  whatsapp: '+53 5650 1045',
  whatsappHref: 'https://wa.me/5356501045',

  // ── About ─────────────────────────────────────────────────────────
  aboutText: [
    'Soy Fabio Turiño Rodríguez, ingeniero de software especializado en convertir necesidades de negocio en soluciones digitales que funcionan.',
    'No construyo "páginas bonitas" ni "sistemas por construir". Construyo herramientas con un propósito: una web que posiciona en Google y atrae clientes, un sistema que le da control real a un negocio sobre su inventario y sus finanzas, una automatización que le ahorra horas a un equipo. Mi trabajo se mide en resultados, no en líneas de código.',
    'Mi especialidad es el desarrollo web y de sistemas de gestión, reforzada con SEO y automatización. Trabajo de cerca con cada cliente, entendiendo su negocio antes de escribir una sola línea, y entregando soluciones rápidas, sólidas y pensadas para crecer con ellos.',
    'Mi objetivo va más allá de cada proyecto: construir relaciones de largo plazo con negocios que quieren crecer, acompañándolos en su evolución tecnológica. Cada solución que entrego está pensada no solo para resolver el problema de hoy, sino para crecer junto al negocio mañana.',
  ],
  aboutPhoto: '/placeholder-about.jpg', // TODO: reemplaza con tu foto real

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      icon: '⬡',
      title: 'Desarrollo web profesional',
      description:
        'Sitios rápidos, modernos y optimizados para convertir visitantes en clientes.',
    },
    {
      icon: '◈',
      title: 'Sistemas de gestión a medida',
      description:
        'Software hecho para tu negocio: inventario, ventas, finanzas y reportes, adaptado a cómo trabajas.',
    },
    {
      icon: '◎',
      title: 'Posicionamiento SEO',
      description:
        'Que tu negocio aparezca en Google cuando tus clientes te buscan. Resultados medibles.',
    },
    {
      icon: '◇',
      title: 'Automatización',
      description:
        'Elimino tareas repetitivas y conecto tus herramientas para que tu equipo gane tiempo.',
    },
  ],

  // ── Case Studies ──────────────────────────────────────────────────
  caseStudies: [
    {
      id: 'case-01',
      tag: 'Desarrollo Web · SEO · Panamá',
      title: 'Pacunato S.A. — De invisible a referente en su sector',
      problem:
        'Pacunato S.A., empresa de importación y exportación en Panamá, no tenía ninguna presencia digital. Era invisible para cualquier cliente que buscara sus servicios en internet.',
      solution:
        'Diseñé y desarrollé desde cero una presencia digital completa: un sitio web optimizado para conversión, una estrategia SEO integral, automatizaciones de correo y un recurso descargable para captar clientes potenciales.',
      metrics: [
        { prefix: '#', value: 1, suffix: '', label: 'Entre empresas del sector en Google' },
        { value: 5, suffix: '', label: 'Palabras clave en primeras posiciones' },
        { value: 95, suffix: '%', label: 'Rendimiento GTMetrix (calificación A)' },
        { display: '<1s', value: 0, suffix: '', label: 'Tiempo de carga' },
      ],
      testimonial:
        '"La página está excelente, de verdad que sí. Gracias por tu talento, eres todo un profesional. Está todo muy bien, estamos de acuerdo todos."',
      link: 'https://pacunato.com',
      linkText: 'Ver sitio',
      image: '/placeholder-case1.jpg', // TODO: reemplaza con captura real
      tags: ['HTML/CSS', 'SEO', 'Email Marketing'],
    },
    {
      id: 'case-02',
      tag: 'Software a Medida · Django · Python',
      title: 'Sistema de gestión integral para negocios — que funciona sin internet',
      problem:
        'Los pequeños y medianos negocios manejan su inventario, ventas y gastos en papel o en hojas de cálculo sueltas, sin visibilidad real de su rentabilidad. Y en entornos con internet inestable, las soluciones en la nube simplemente no sirven.',
      solution:
        'Desarrollé desde cero un sistema de gestión integral que centraliza toda la operación de un negocio y funciona 100% sin conexión a internet, sobre la propia red local. Varios dispositivos pueden trabajar al mismo tiempo, en tiempo real, sin depender de la nube.',
      features: [
        'Inventario dual (mostrador y almacén) con costo promedio ponderado — una función que los sistemas básicos no ofrecen',
        'Ventas, gastos categorizados, facturación y cierre de caja',
        'Reportes exportables a Excel y PDF, con submayor contable',
        'Múltiples usuarios con roles y permisos personalizados',
        'Operación 100% offline — los datos nunca salen del negocio',
      ],
      differentiator:
        'Operación 100% offline — la mayor limitación del entorno, convertida en ventaja competitiva. Los datos nunca salen del negocio.',
      image: '/placeholder-case2.jpg', // TODO: reemplaza con captura real
      tags: ['Django', 'Python', 'SQLite / PostgreSQL'],
    },
  ] as const satisfies CaseStudy[],

  // ── Projects ──────────────────────────────────────────────────────
  projects: [
    {
      title: 'Casa JAyFE',
      description:
        'Sitio web y sistema propio de gestión de reservas para un negocio de alquiler turístico. Desarrollo full-stack de la plataforma de administración.',
      image: '/placeholder-proj1.jpg', // TODO: reemplaza con captura real
      tags: ['Web', 'Sistema de Reservas'],
      href: '#' as string | null,
    },
    {
      title: 'CubaNexus',
      description:
        'Plataforma de inversión con pasarelas de pago para una firma de consultoría financiera.',
      image: '/placeholder-proj2.jpg',
      tags: ['Plataforma SaaS'],
      href: null as string | null,
      badge: 'En desarrollo',
    },
    {
      title: 'Menú Digital',
      description:
        'Menú digital interactivo para restaurante, accesible desde el móvil del comensal.',
      image: '/placeholder-proj3.jpg',
      tags: ['Web', 'Restaurante'],
      href: '#' as string | null,
    },
    {
      title: 'Aldaba',
      description:
        'Sitio web con sistema de gestión de contenidos para una empresa local.',
      image: '/placeholder-proj4.jpg',
      tags: ['Web', 'Gestión'],
      href: '#' as string | null,
    },
  ],
}

// ── Types ──────────────────────────────────────────────────────────────
export interface Metric {
  prefix?: string
  value: number
  suffix: string
  label: string
  display?: string // override: muestra este texto en lugar del count-up
}

export interface CaseStudy {
  id: string
  tag: string
  title: string
  problem: string
  solution: string
  metrics?: Metric[]
  features?: string[]
  differentiator?: string
  testimonial?: string
  link?: string
  linkText?: string
  image: string
  tags: readonly string[]
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  href: string | null
  badge?: string
}
