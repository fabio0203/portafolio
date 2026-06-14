// ─── CONTENIDO DEL SITIO ─────────────────────────────────────────────
// Cambia aquí para actualizar textos en todo el sitio.

export const siteData = {
  // ── Marca ─────────────────────────────────────────────────────────
  name: 'Almanac',
  title: 'Consultora Tecnológica',
  heroHeadline: 'Tecnología que hace crecer tu negocio.',
  heroSubtitle:
    'En Almanac nos asociamos con negocios para impulsar su crecimiento en cada área digital: desarrollo web, sistemas de gestión a medida, SEO y automatización.',
  heroCta: 'Hablemos',
  heroCta2: 'Ver nuestro trabajo',

  email: 'almanac.dev.tech@gmail.com',
  whatsapp: '+53 5650 1045',
  whatsappHref: 'https://wa.me/5356501045',

  // ── Sobre Almanac ─────────────────────────────────────────────────
  aboutText: [
    'Almanac es una consultora tecnológica que acompaña a los negocios en su crecimiento digital. No entregamos "páginas bonitas" ni "sistemas por construir": entregamos herramientas con un propósito de negocio: webs que posicionan y atraen clientes, sistemas que dan control real sobre las operaciones, automatizaciones que ahorran horas de trabajo.',
    'Trabajamos de cerca con cada cliente, entendiendo su negocio antes de escribir una sola línea de código, y entregando soluciones rápidas, sólidas y pensadas para crecer junto a ellos. Nuestro trabajo se mide en resultados.',
    'Detrás de Almanac está Fabio Turiño Rodríguez, ingeniero de software especializado en desarrollo web y sistemas de gestión, con experiencia comprobada construyendo soluciones digitales para empresas en Panamá y la región. Cada proyecto refleja un compromiso directo con la calidad y el resultado.',
  ],
  aboutPhoto: '/logo-almanac.png',

  // ── Servicios ─────────────────────────────────────────────────────
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
        'Software hecho para tu negocio: inventario, ventas, finanzas y reportes.',
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
        'Eliminamos tareas repetitivas y conectamos tus herramientas para que tu equipo gane tiempo.',
    },
  ],

  // ── Casos de estudio ──────────────────────────────────────────────
  caseStudies: [
    {
      id: 'case-01',
      tag: 'Desarrollo Web · SEO · Panamá',
      title: 'Pacunato S.A. — De invisible a referente en su sector',
      problem:
        'Pacunato S.A., empresa de importación y exportación en Panamá, no tenía ninguna presencia digital. Era invisible para cualquier cliente que buscara sus servicios en internet.',
      solution:
        'Construimos desde cero una presencia digital completa: un sitio web optimizado para conversión, una estrategia SEO integral, automatizaciones de correo y un recurso descargable para captar clientes potenciales.',
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
      image: '/pacunato.png',
      tags: ['HTML/CSS', 'SEO', 'Email Marketing'],
    },
    {
      id: 'case-02',
      tag: 'Software a Medida · Django · Python',
      title: 'ASTROGestión — Sistema de gestión integral para negocios que funciona sin internet',
      problem:
        'Los pequeños y medianos negocios manejan su inventario, ventas y gastos en papel o en hojas de cálculo sueltas, sin visibilidad real de su rentabilidad. En entornos con internet inestable, las soluciones en la nube no sirven.',
      solution:
        'Desarrollamos ASTROGestión, un sistema de gestión integral que centraliza toda la operación de un negocio y funciona 100% sin conexión a internet, sobre la propia red local, con varios dispositivos trabajando en tiempo real.',
      features: [
        'Inventario dual (mostrador y almacén) con costo promedio ponderado — una función que los sistemas básicos no ofrecen',
        'Ventas, gastos categorizados, facturación y cierre de caja',
        'Reportes exportables a Excel y PDF, con submayor contable',
        'Múltiples usuarios con roles y permisos personalizados',
        'Operación 100% offline — los datos nunca salen del negocio',
      ],
      differentiator:
        'Operación 100% offline — la mayor limitación del entorno, convertida en ventaja competitiva. Los datos nunca salen del negocio.',
      link: 'https://fabio0203.github.io/almanac/',
      linkText: 'Conocer ASTROGestión',
      image: '/placeholder-case2.jpg', // TODO: reemplaza con captura real
      tags: ['Django', 'Python', 'SQLite / PostgreSQL'],
    },
  ] as const satisfies CaseStudy[],

  // ── Proyectos ─────────────────────────────────────────────────────
  projects: [
    {
      title: 'Casa JAyFE',
      description:
        'Sitio web y sistema propio de gestión de reservas para un negocio de alquiler turístico.',
      image: '/casa-jayfe.png',
      tags: ['Web', 'Sistema de Reservas'],
      href: '#' as string | null,
    },
    {
      title: 'CubaNexus',
      description:
        'Plataforma de inversión con pasarelas de pago para una firma de consultoría financiera.',
      image: '/cubanexus.png',
      tags: ['Plataforma SaaS'],
      href: null as string | null,
      badge: 'En desarrollo',
    },
    {
      title: 'Menú Digital',
      description:
        'Menú digital interactivo para restaurante, accesible desde el móvil del comensal.',
      image: '/poseidon.png',
      tags: ['Web', 'Restaurante'],
      href: '#' as string | null,
    },
    {
      title: 'Aldaba',
      description:
        'Sitio web con sistema de gestión de contenidos para una empresa local.',
      image: '/aldaba.png',
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
  display?: string
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
