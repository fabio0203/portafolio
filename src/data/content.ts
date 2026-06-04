// ─── CONTENT PLACEHOLDERS ────────────────────────────────────────────
// Every TODO comment marks text or an asset you should replace.
// All data lives here so changes are in one place.

export const siteData = {
  // ── Personal ──────────────────────────────────────────────────────
  name: 'Tu Nombre',           // TODO: replace
  title: 'Ingeniero de Software & Consultor Tecnológico',
  heroHeadline: 'Construyo software y presencia digital que hacen crecer negocios.',
  heroSubtitle:
    'Especializado en desarrollo web, sistemas de gestión a medida, SEO y automatizaciones. Ayudo a empresas a escalar con tecnología real.',
  heroCta: 'Hablemos',

  email: 'tu@email.com',       // TODO: replace
  whatsapp: '+1 000 000 0000', // TODO: replace
  whatsappHref: 'https://wa.me/10000000000', // TODO: replace

  // ── About ─────────────────────────────────────────────────────────
  aboutText: [
    'Soy ingeniero de software con más de X años de experiencia construyendo productos digitales robustos y escalables. He trabajado con startups y empresas establecidas para transformar ideas en sistemas que funcionan.', // TODO: replace
    'Me especializo en desarrollo web full-stack, sistemas de gestión a medida, optimización SEO y automatización de procesos. Mi enfoque combina ejecución técnica de alto nivel con visión de negocio.',
  ],
  aboutPhoto: '/placeholder-about.jpg', // TODO: replace with your photo

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      icon: '⬡',
      title: 'Desarrollo Web',
      description:
        'Sitios y aplicaciones web rápidas, accesibles y bien construidas. React, Next.js, arquitecturas modernas.',
    },
    {
      icon: '◈',
      title: 'Sistemas de Gestión',
      description:
        'CRMs, ERPs y dashboards a medida que se adaptan exactamente a tus procesos de negocio.',
    },
    {
      icon: '◎',
      title: 'SEO Técnico',
      description:
        'Auditorías, optimización on-page/técnica y estrategia de contenido para posicionar con intención.',
    },
    {
      icon: '◇',
      title: 'Automatizaciones',
      description:
        'Integración de herramientas, flujos de trabajo automáticos y eliminación de tareas repetitivas.',
    },
  ],

  // ── Case Studies ──────────────────────────────────────────────────
  caseStudies: [
    {
      id: 'case-01',
      tag: 'Caso de estudio 01',
      title: 'Plataforma de gestión para empresa X',   // TODO: replace
      problem:
        'La empresa manejaba sus operaciones en hojas de cálculo desconectadas, lo que causaba errores, pérdida de tiempo y falta de visibilidad en tiempo real.', // TODO: replace
      solution:
        'Diseñé y construí un sistema de gestión centralizado con módulos de inventario, facturación y reportes, integrado con sus herramientas existentes.', // TODO: replace
      metrics: [
        { value: 60, suffix: '%', label: 'Reducción de tiempo operativo' },
        { value: 3, suffix: 'x', label: 'Más velocidad en reportes' },
        { value: 0, suffix: ' errores', label: 'En conciliación de datos' },
      ],
      image: '/placeholder-case1.jpg', // TODO: replace with real screenshot
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 'case-02',
      tag: 'Caso de estudio 02',
      title: 'Rediseño web + SEO para empresa Y',       // TODO: replace
      problem:
        'El sitio existente cargaba lento, no era móvil-first y apenas aparecía en Google para sus búsquedas clave.', // TODO: replace
      solution:
        'Reconstruí el sitio desde cero con performance como prioridad (Core Web Vitals en verde) e implementé una estrategia SEO técnica y de contenido.', // TODO: replace
      metrics: [
        { value: 180, suffix: '%', label: 'Incremento de tráfico orgánico' },
        { value: 98, suffix: '', label: 'Lighthouse Performance Score' },
        { value: 4, suffix: 'x', label: 'Más conversiones desde búsqueda' },
      ],
      image: '/placeholder-case2.jpg', // TODO: replace with real screenshot
      tags: ['Next.js', 'TailwindCSS', 'SEO'],
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────
  projects: [
    {
      title: 'Proyecto A',          // TODO: replace
      description: 'Descripción breve de qué es y qué hace este proyecto.', // TODO: replace
      image: '/placeholder-proj1.jpg', // TODO: replace
      tags: ['React', 'TypeScript'],
      href: '#',                    // TODO: replace with live URL or repo
    },
    {
      title: 'Proyecto B',          // TODO: replace
      description: 'Descripción breve de qué es y qué hace este proyecto.',
      image: '/placeholder-proj2.jpg',
      tags: ['Node.js', 'PostgreSQL'],
      href: '#',
    },
    {
      title: 'Proyecto C',          // TODO: replace
      description: 'Descripción breve de qué es y qué hace este proyecto.',
      image: '/placeholder-proj3.jpg',
      tags: ['Next.js', 'SEO'],
      href: '#',
    },
  ],
}
