/**
 * Único origen de verdad para todo el copy del sitio.
 * Ningún componente debe llevar texto escrito directamente.
 */

export const languages = ["es", "pt", "en"] as const;
export type Language = (typeof languages)[number];

const es = {
  meta: {
    title: "Samuel Correa — Diseñador Gráfico | Branding, Diseño Digital y Audiovisual",
    description:
      "Diseñador gráfico especializado en identidad de marca, diseño para redes sociales, edición de video y producción creativa asistida por IA. Precios claros desde $25. Atiendo en español, portugués e inglés.",
    locale: "es_ES",
    keywords:
      "diseñador gráfico, identidad de marca, diseño de logo, branding, diseño para redes sociales, edición de video, motion graphics, Samuel Correa",
  },
  nav: {
    work: "Trabajo",
    services: "Servicios",
    packages: "Paquetes",
    process: "Proceso",
    contact: "Contacto",
    cta: "Hablemos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Diseño / Estrategia / Creatividad",
    first: "Samuel",
    last: "Correa",
    role: "Diseñador Gráfico",
    tagline: "Ideas visuales que conectan marcas con su audiencia.",
    scroll: "Scroll",
    portraitAlt: "Retrato en blanco y negro de Samuel Correa",
  },
  marquee: ["Branding", "Diseño Digital", "Audiovisual", "Producción Creativa"],
  about: {
    number: "02",
    title: "Sobre mí",
    p1: "Soy diseñador gráfico y construyo marcas con propósito: desde el concepto hasta la aplicación visual, identidades que comunican, diferencian y perduran.",
    p2: "Trabajo con las mejores herramientas del mercado y aprovecho la inteligencia artificial para optimizar procesos, mejorar resultados y llevar tus ideas más lejos.",
    toolsLabel: "Herramientas",
    stats: [
      { value: 50, prefix: "+", suffix: "", label: "Proyectos" },
      { value: 4, prefix: "", suffix: "", label: "Áreas de trabajo" },
      { value: 3, prefix: "", suffix: "", label: "Idiomas" },
      { value: 24, prefix: "", suffix: "h", label: "Entrega express" },
    ],
  },
  services: {
    number: "03",
    title: "Servicios",
    kicker:
      "Cuatro áreas de trabajo, con alcance y precios claros para elegir justo lo que tu marca necesita.",
    catalogCta: "Descargar catálogo completo (PDF)",
    perPiece: "/ pieza",
    perSlide: "/ slide",
    expand: "Ver servicios de",
    areas: {
      identidad: {
        title: "Identidad de marca",
        desc: "Construyo marcas con propósito: desde el concepto hasta la aplicación visual, identidades que comunican, diferencian y perduran.",
        items: {
          logo: "Logotipo profesional desarrollado a partir del concepto y personalidad de la marca. Incluye concepto visual, logo principal, versión secundaria, archivos PNG/JPG/PDF, versiones para fondo claro y oscuro, y 2 rondas de revisión.",
          minikit:
            "Logo principal y secundario, paleta de colores, tipografías, elementos gráficos básicos, foto de perfil y archivos finales.",
          starter:
            "Estrategia visual básica, logo principal y secundario, paleta, tipografías, elementos gráficos, aplicaciones de marca y mini guía de identidad.",
          identity:
            "Dirección visual, sistema de logotipos, paleta de colores, tipografía, elementos gráficos, aplicaciones y brand guidelines.",
          card: "Tarjeta de presentación lista para impresión y en formato digital.",
        },
      },
      digital: {
        title: "Diseño digital",
        desc: "Piezas que se ven, se entienden y generan impacto: diseño para redes sociales, sitios web, banners, publicidad y todo lo que tu marca necesita en el entorno digital.",
        items: {
          post: "Diseño personalizado para Instagram, Facebook o LinkedIn.",
          carousel:
            "Carrusel diseñado para comunicar información de forma clara y visualmente atractiva.",
          story: "Stories promocionales, informativas o de interacción.",
          pack: "5 posts, 5 stories, dirección visual, adaptación de contenido y 2 rondas de revisión.",
          flyer: "Diseño promocional para eventos, productos, servicios o campañas.",
          ad: "Diseños para campañas publicitarias en redes sociales y plataformas digitales.",
          banner: "Banners para páginas web, promociones y campañas digitales.",
          slides: "Diseño visual de presentaciones profesionales.",
          thumb:
            "Miniaturas diseñadas para captar atención y aumentar el potencial de clic.",
          ytbanner: "Diseño de portada adaptado a las dimensiones de YouTube.",
        },
      },
      audiovisual: {
        title: "Audiovisual",
        desc: "Ideas que se mueven: edición de video, motion graphics y contenido visual que da vida a tu mensaje en cualquier plataforma.",
        items: {
          reel: "Edición de contenido vertical para Instagram, TikTok, YouTube Shorts y otras plataformas.",
          editing:
            "Edición de video con cortes, música, texto, transiciones y corrección visual básica.",
          promo: "Video promocional para producto, servicio, marca o campaña.",
          youtube:
            "Edición de contenido para YouTube con estructura dinámica y elementos gráficos.",
          motion:
            "Animación de textos, logotipos, elementos gráficos y contenido promocional.",
          podcast:
            "Sistema visual para podcasts y programas digitales: portada, thumbnail, lower thirds, pantallas de espera y adaptaciones para redes.",
        },
      },
      creativa: {
        title: "Producción creativa",
        desc: "Trabajo con las mejores herramientas del mercado y aprovecho la inteligencia artificial para optimizar procesos, mejorar resultados y llevar tus ideas más lejos.",
        items: {
          manipulation:
            "Composición y manipulación fotográfica para campañas, publicidad o contenido creativo.",
          composite:
            "Composición de múltiples imágenes y elementos para crear una pieza visual única.",
          aicreative:
            "Uso de herramientas de inteligencia artificial como parte del proceso creativo para generar o desarrollar recursos visuales.",
          aips: "Creación de imágenes conceptuales combinando generación asistida por IA, composición y retoque profesional.",
          enhance:
            "Mejora, limpieza, upscale y preparación de imágenes para uso digital.",
        },
      },
    },
  },
  packages: {
    number: "04",
    title: "Paquetes",
    subtitle:
      "Soluciones combinadas con precio cerrado, para quienes prefieren empezar con todo listo en un solo pedido.",
    includes: "Incluye",
    featuredTag: "Más completo",
    cta: "Solicitar",
    addOnsTitle: "Add-ons",
    addOnsSubtitle: "Extras que puedes sumar a cualquier servicio.",
    items: {
      "social-starter": {
        desc: "Solución sencilla para pequeños negocios que necesitan comenzar a verse profesionales.",
        includes: "3 posts, 3 stories, adaptación visual, 1 ronda de revisión.",
      },
      "content-creator": {
        desc: "Para YouTubers, podcasters, influencers y creadores.",
        includes:
          "3 YouTube thumbnails, 1 YouTube banner, 3 piezas promocionales, 1 plantilla reutilizable.",
      },
      "social-growth": {
        desc: "Para negocios que necesitan contenido visual constante.",
        includes:
          "10 diseños para redes, 5 stories, sistema visual consistente, 2 rondas de revisión.",
      },
      "brand-starter-pack": {
        desc: "Para nuevos negocios que necesitan una identidad visual profesional.",
        includes:
          "Logo, logo secundario, paleta de colores, tipografías, foto de perfil, 3 aplicaciones visuales, mini guía de marca, 2 rondas de revisión.",
      },
      "creative-brand": {
        desc: "Solución integral para una marca que está lista para profesionalizar su presencia.",
        includes:
          "Identidad visual, logo, paleta de colores, tipografías, brand kit, 5 piezas para redes, 3 stories, 1 banner digital, mini brand guide.",
      },
    },
    addOns: {
      revisions: { name: "Revisiones adicionales", price: "$20 / ronda" },
      express: { name: "Entrega express 24–48h", price: "+30%" },
      format: { name: "Formato adicional", price: "$10" },
      platform: { name: "Adaptación a otra plataforma", price: "$15 — $25" },
      source: { name: "Archivo editable / source file", price: "$25 — $50" },
      extra: { name: "Pieza adicional dentro de un paquete", price: "$20 — $40" },
      guidelines: { name: "Página adicional de brand guidelines", price: "$25" },
    },
  },
  process: {
    number: "05",
    title: "Proceso",
    subtitle: "El camino que seguimos en cada proyecto.",
    steps: {
      discover: "Entendemos tu marca, objetivo y audiencia.",
      concept: "Desarrollamos la dirección visual.",
      design: "Transformamos la idea en una solución visual.",
      refine: "Recibimos feedback y refinamos el diseño.",
      deliver: "Entregamos los archivos finales listos para utilizar.",
    },
  },
  work: {
    number: "06",
    title: "Trabajo seleccionado",
    subtitle: "Una muestra de proyectos y direcciones visuales.",
    items: {
      lumiere: { name: "Lumière Beauty Studio", category: "Identidad de marca" },
      eclosion: { name: "Eclosion", category: "Manual de marca" },
      avivaHispanos: { name: "Água Viva Hispanos", category: "Flyer / Poster" },
      institutoAviva: { name: "Instituto Aviva", category: "Diseño editorial" },
      avivaCultos: { name: "Água Viva Cultos", category: "Redes sociales" },
      submersos: { name: "Submersos Podcast", category: "Paquete visual de podcast" },
    },
  },
  contact: {
    number: "07",
    line1: "Creemos algo",
    line2: "grande, juntos.",
    whatsappLabel: "WhatsApp",
    emailLabel: "Correo electrónico",
    servicesLabel: "Servicios",
    servicesValue: "Branding · Diseño Digital · Audiovisual · Producción Creativa",
    cta: "Hablemos de tu proyecto",
  },
  footer: {
    role: "Diseñador Gráfico",
    rights: "Todos los derechos reservados.",
    localTime: "Hora local",
  },
};

type Dict = typeof es;

const pt: Dict = {
  meta: {
    title: "Samuel Correa — Designer Gráfico | Branding, Design Digital e Audiovisual",
    description:
      "Designer gráfico especializado em identidade de marca, design para redes sociais, edição de vídeo e produção criativa assistida por IA. Preços claros a partir de $25. Atendo em português, espanhol e inglês.",
    locale: "pt_BR",
    keywords:
      "designer gráfico, identidade de marca, criação de logo, branding, design para redes sociais, edição de vídeo, motion graphics, Samuel Correa",
  },
  nav: {
    work: "Trabalho",
    services: "Serviços",
    packages: "Pacotes",
    process: "Processo",
    contact: "Contato",
    cta: "Vamos falar",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Design / Estratégia / Criatividade",
    first: "Samuel",
    last: "Correa",
    role: "Designer Gráfico",
    tagline: "Ideias visuais que conectam marcas com sua audiência.",
    scroll: "Scroll",
    portraitAlt: "Retrato em preto e branco de Samuel Correa",
  },
  marquee: ["Branding", "Design Digital", "Audiovisual", "Produção Criativa"],
  about: {
    number: "02",
    title: "Sobre mim",
    p1: "Sou designer gráfico e construo marcas com propósito: do conceito à aplicação visual, identidades que comunicam, diferenciam e permanecem.",
    p2: "Trabalho com as melhores ferramentas do mercado e aproveito a inteligência artificial para otimizar processos, melhorar resultados e levar suas ideias mais longe.",
    toolsLabel: "Ferramentas",
    stats: [
      { value: 50, prefix: "+", suffix: "", label: "Projetos" },
      { value: 4, prefix: "", suffix: "", label: "Áreas de trabalho" },
      { value: 3, prefix: "", suffix: "", label: "Idiomas" },
      { value: 24, prefix: "", suffix: "h", label: "Entrega express" },
    ],
  },
  services: {
    number: "03",
    title: "Serviços",
    kicker:
      "Quatro áreas de trabalho, com escopo e preços claros para escolher exatamente o que a sua marca precisa.",
    catalogCta: "Baixar catálogo completo (PDF)",
    perPiece: "/ peça",
    perSlide: "/ slide",
    expand: "Ver serviços de",
    areas: {
      identidad: {
        title: "Identidade de marca",
        desc: "Construo marcas com propósito: do conceito à aplicação visual, identidades que comunicam, diferenciam e permanecem.",
        items: {
          logo: "Logotipo profissional desenvolvido a partir do conceito e da personalidade da marca. Inclui conceito visual, logo principal, versão secundária, arquivos PNG/JPG/PDF, versões para fundo claro e escuro, e 2 rodadas de revisão.",
          minikit:
            "Logo principal e secundário, paleta de cores, tipografias, elementos gráficos básicos, foto de perfil e arquivos finais.",
          starter:
            "Estratégia visual básica, logo principal e secundário, paleta, tipografias, elementos gráficos, aplicações de marca e mini guia de identidade.",
          identity:
            "Direção visual, sistema de logotipos, paleta de cores, tipografia, elementos gráficos, aplicações e brand guidelines.",
          card: "Cartão de visita pronto para impressão e em formato digital.",
        },
      },
      digital: {
        title: "Design digital",
        desc: "Peças que se veem, se entendem e geram impacto: design para redes sociais, sites, banners, publicidade e tudo o que sua marca precisa no ambiente digital.",
        items: {
          post: "Design personalizado para Instagram, Facebook ou LinkedIn.",
          carousel:
            "Carrossel desenhado para comunicar informação de forma clara e visualmente atrativa.",
          story: "Stories promocionais, informativos ou de interação.",
          pack: "5 posts, 5 stories, direção visual, adaptação de conteúdo e 2 rodadas de revisão.",
          flyer: "Design promocional para eventos, produtos, serviços ou campanhas.",
          ad: "Designs para campanhas publicitárias em redes sociais e plataformas digitais.",
          banner: "Banners para páginas web, promoções e campanhas digitais.",
          slides: "Design visual de apresentações profissionais.",
          thumb:
            "Miniaturas desenhadas para captar atenção e aumentar o potencial de clique.",
          ytbanner: "Design de capa adaptado às dimensões do YouTube.",
        },
      },
      audiovisual: {
        title: "Audiovisual",
        desc: "Ideias que se movem: edição de vídeo, motion graphics e conteúdo visual que dá vida à sua mensagem em qualquer plataforma.",
        items: {
          reel: "Edição de conteúdo vertical para Instagram, TikTok, YouTube Shorts e outras plataformas.",
          editing:
            "Edição de vídeo com cortes, música, texto, transições e correção visual básica.",
          promo: "Vídeo promocional para produto, serviço, marca ou campanha.",
          youtube:
            "Edição de conteúdo para YouTube com estrutura dinâmica e elementos gráficos.",
          motion:
            "Animação de textos, logotipos, elementos gráficos e conteúdo promocional.",
          podcast:
            "Sistema visual para podcasts e programas digitais: capa, thumbnail, lower thirds, telas de espera e adaptações para redes.",
        },
      },
      creativa: {
        title: "Produção criativa",
        desc: "Trabalho com as melhores ferramentas do mercado e aproveito a inteligência artificial para otimizar processos, melhorar resultados e levar suas ideias mais longe.",
        items: {
          manipulation:
            "Composição e manipulação fotográfica para campanhas, publicidade ou conteúdo criativo.",
          composite:
            "Composição de múltiplas imagens e elementos para criar uma peça visual única.",
          aicreative:
            "Uso de ferramentas de inteligência artificial como parte do processo criativo para gerar ou desenvolver recursos visuais.",
          aips: "Criação de imagens conceituais combinando geração assistida por IA, composição e retoque profissional.",
          enhance:
            "Melhoria, limpeza, upscale e preparação de imagens para uso digital.",
        },
      },
    },
  },
  packages: {
    number: "04",
    title: "Pacotes",
    subtitle:
      "Soluções combinadas com preço fechado, para quem prefere começar com tudo pronto em um único pedido.",
    includes: "Inclui",
    featuredTag: "Mais completo",
    cta: "Solicitar",
    addOnsTitle: "Add-ons",
    addOnsSubtitle: "Extras que você pode somar a qualquer serviço.",
    items: {
      "social-starter": {
        desc: "Solução simples para pequenos negócios que precisam começar a parecer profissionais.",
        includes: "3 posts, 3 stories, adaptação visual, 1 rodada de revisão.",
      },
      "content-creator": {
        desc: "Para YouTubers, podcasters, influenciadores e criadores.",
        includes:
          "3 YouTube thumbnails, 1 YouTube banner, 3 peças promocionais, 1 template reutilizável.",
      },
      "social-growth": {
        desc: "Para negócios que precisam de conteúdo visual constante.",
        includes:
          "10 designs para redes, 5 stories, sistema visual consistente, 2 rodadas de revisão.",
      },
      "brand-starter-pack": {
        desc: "Para novos negócios que precisam de uma identidade visual profissional.",
        includes:
          "Logo, logo secundário, paleta de cores, tipografias, foto de perfil, 3 aplicações visuais, mini guia de marca, 2 rodadas de revisão.",
      },
      "creative-brand": {
        desc: "Solução integral para uma marca pronta para profissionalizar sua presença.",
        includes:
          "Identidade visual, logo, paleta de cores, tipografias, brand kit, 5 peças para redes, 3 stories, 1 banner digital, mini brand guide.",
      },
    },
    addOns: {
      revisions: { name: "Revisões adicionais", price: "$20 / rodada" },
      express: { name: "Entrega express 24–48h", price: "+30%" },
      format: { name: "Formato adicional", price: "$10" },
      platform: { name: "Adaptação para outra plataforma", price: "$15 — $25" },
      source: { name: "Arquivo editável / source file", price: "$25 — $50" },
      extra: { name: "Peça adicional dentro de um pacote", price: "$20 — $40" },
      guidelines: { name: "Página adicional de brand guidelines", price: "$25" },
    },
  },
  process: {
    number: "05",
    title: "Processo",
    subtitle: "O caminho que seguimos em cada projeto.",
    steps: {
      discover: "Entendemos sua marca, objetivo e audiência.",
      concept: "Desenvolvemos a direção visual.",
      design: "Transformamos a ideia em uma solução visual.",
      refine: "Recebemos feedback e refinamos o design.",
      deliver: "Entregamos os arquivos finais prontos para usar.",
    },
  },
  work: {
    number: "06",
    title: "Trabalho selecionado",
    subtitle: "Uma amostra de projetos e direções visuais.",
    items: {
      lumiere: { name: "Lumière Beauty Studio", category: "Identidade de marca" },
      eclosion: { name: "Eclosion", category: "Manual de marca" },
      avivaHispanos: { name: "Água Viva Hispanos", category: "Flyer / Pôster" },
      institutoAviva: { name: "Instituto Aviva", category: "Design editorial" },
      avivaCultos: { name: "Água Viva Cultos", category: "Redes sociais" },
      submersos: { name: "Submersos Podcast", category: "Pacote visual de podcast" },
    },
  },
  contact: {
    number: "07",
    line1: "Vamos criar algo",
    line2: "grande, juntos.",
    whatsappLabel: "WhatsApp",
    emailLabel: "E-mail",
    servicesLabel: "Serviços",
    servicesValue: "Branding · Design Digital · Audiovisual · Produção Criativa",
    cta: "Vamos falar do seu projeto",
  },
  footer: {
    role: "Designer Gráfico",
    rights: "Todos os direitos reservados.",
    localTime: "Hora local",
  },
};

const en: Dict = {
  meta: {
    title: "Samuel Correa — Graphic Designer | Branding, Digital Design & Video",
    description:
      "Graphic designer specializing in brand identity, social media design, video editing and AI-assisted creative production. Clear pricing from $25. Working in English, Spanish and Portuguese.",
    locale: "en_US",
    keywords:
      "graphic designer, brand identity, logo design, branding, social media design, video editing, motion graphics, Samuel Correa",
  },
  nav: {
    work: "Work",
    services: "Services",
    packages: "Packages",
    process: "Process",
    contact: "Contact",
    cta: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Design / Strategy / Creativity",
    first: "Samuel",
    last: "Correa",
    role: "Graphic Designer",
    tagline: "Visual ideas that connect brands with their audience.",
    scroll: "Scroll",
    portraitAlt: "Black and white portrait of Samuel Correa",
  },
  marquee: ["Branding", "Digital Design", "Audiovisual", "Creative Production"],
  about: {
    number: "02",
    title: "About me",
    p1: "I'm a graphic designer and I build brands with purpose: from concept to visual application, identities that communicate, stand apart and last.",
    p2: "I work with the best tools on the market and use artificial intelligence to streamline the process, improve results and take your ideas further.",
    toolsLabel: "Tools",
    stats: [
      { value: 50, prefix: "+", suffix: "", label: "Projects" },
      { value: 4, prefix: "", suffix: "", label: "Areas of work" },
      { value: 3, prefix: "", suffix: "", label: "Languages" },
      { value: 24, prefix: "", suffix: "h", label: "Express delivery" },
    ],
  },
  services: {
    number: "03",
    title: "Services",
    kicker:
      "Four areas of work, with clear scope and pricing so you can pick exactly what your brand needs.",
    catalogCta: "Download full catalog (PDF)",
    perPiece: "/ piece",
    perSlide: "/ slide",
    expand: "View services in",
    areas: {
      identidad: {
        title: "Brand identity",
        desc: "I build brands with purpose: from concept to visual application, identities that communicate, stand apart and last.",
        items: {
          logo: "Professional logo developed from the brand's concept and personality. Includes visual concept, primary logo, secondary version, PNG/JPG/PDF files, light and dark background versions, and 2 rounds of revisions.",
          minikit:
            "Primary and secondary logo, color palette, typography, basic graphic elements, profile picture and final files.",
          starter:
            "Basic visual strategy, primary and secondary logo, palette, typography, graphic elements, brand applications and a mini identity guide.",
          identity:
            "Visual direction, logo system, color palette, typography, graphic elements, applications and brand guidelines.",
          card: "Business card ready for print and in digital format.",
        },
      },
      digital: {
        title: "Digital design",
        desc: "Pieces that get seen, understood and make an impact: design for social media, websites, banners, advertising and everything your brand needs in the digital space.",
        items: {
          post: "Custom design for Instagram, Facebook or LinkedIn.",
          carousel:
            "Carousel designed to communicate information clearly and attractively.",
          story: "Promotional, informative or interactive stories.",
          pack: "5 posts, 5 stories, visual direction, content adaptation and 2 rounds of revisions.",
          flyer: "Promotional design for events, products, services or campaigns.",
          ad: "Designs for advertising campaigns on social media and digital platforms.",
          banner: "Banners for websites, promotions and digital campaigns.",
          slides: "Visual design for professional presentations.",
          thumb: "Thumbnails designed to grab attention and increase click-through.",
          ytbanner: "Channel art adapted to YouTube's dimensions.",
        },
      },
      audiovisual: {
        title: "Audiovisual",
        desc: "Ideas that move: video editing, motion graphics and visual content that brings your message to life on any platform.",
        items: {
          reel: "Vertical content editing for Instagram, TikTok, YouTube Shorts and other platforms.",
          editing:
            "Video editing with cuts, music, text, transitions and basic color correction.",
          promo: "Promotional video for a product, service, brand or campaign.",
          youtube:
            "YouTube content editing with dynamic structure and graphic elements.",
          motion: "Animation of text, logos, graphic elements and promotional content.",
          podcast:
            "Visual system for podcasts and digital shows: cover art, thumbnail, lower thirds, waiting screens and social adaptations.",
        },
      },
      creativa: {
        title: "Creative production",
        desc: "I work with the best tools on the market and use artificial intelligence to streamline the process, improve results and take your ideas further.",
        items: {
          manipulation:
            "Photo composition and manipulation for campaigns, advertising or creative content.",
          composite:
            "Composition of multiple images and elements to create a single, unique visual piece.",
          aicreative:
            "Use of artificial intelligence tools as part of the creative process to generate or develop visual assets.",
          aips: "Conceptual image creation combining AI-assisted generation, composition and professional retouching.",
          enhance: "Enhancement, cleanup, upscaling and prep of images for digital use.",
        },
      },
    },
  },
  packages: {
    number: "04",
    title: "Packages",
    subtitle:
      "Bundled solutions at a fixed price, for those who'd rather start with everything ready in a single order.",
    includes: "Includes",
    featuredTag: "Most complete",
    cta: "Request",
    addOnsTitle: "Add-ons",
    addOnsSubtitle: "Extras you can add to any service.",
    items: {
      "social-starter": {
        desc: "A simple solution for small businesses that need to start looking professional.",
        includes: "3 posts, 3 stories, visual adaptation, 1 round of revisions.",
      },
      "content-creator": {
        desc: "For YouTubers, podcasters, influencers and creators.",
        includes:
          "3 YouTube thumbnails, 1 YouTube banner, 3 promotional pieces, 1 reusable template.",
      },
      "social-growth": {
        desc: "For businesses that need a steady flow of visual content.",
        includes:
          "10 social designs, 5 stories, a consistent visual system, 2 rounds of revisions.",
      },
      "brand-starter-pack": {
        desc: "For new businesses that need a professional visual identity.",
        includes:
          "Logo, secondary logo, color palette, typography, profile picture, 3 visual applications, mini brand guide, 2 rounds of revisions.",
      },
      "creative-brand": {
        desc: "A complete solution for a brand ready to professionalize its presence.",
        includes:
          "Visual identity, logo, color palette, typography, brand kit, 5 social pieces, 3 stories, 1 digital banner, mini brand guide.",
      },
    },
    addOns: {
      revisions: { name: "Additional revisions", price: "$20 / round" },
      express: { name: "Express delivery 24–48h", price: "+30%" },
      format: { name: "Additional format", price: "$10" },
      platform: { name: "Adaptation to another platform", price: "$15 — $25" },
      source: { name: "Editable / source file", price: "$25 — $50" },
      extra: { name: "Extra piece within a package", price: "$20 — $40" },
      guidelines: { name: "Extra brand guidelines page", price: "$25" },
    },
  },
  process: {
    number: "05",
    title: "Process",
    subtitle: "The path we follow on every project.",
    steps: {
      discover: "We get to know your brand, goal and audience.",
      concept: "We develop the visual direction.",
      design: "We turn the idea into a visual solution.",
      refine: "We take your feedback and refine the design.",
      deliver: "We hand over the final files, ready to use.",
    },
  },
  work: {
    number: "06",
    title: "Selected work",
    subtitle: "A sample of projects and visual directions.",
    items: {
      lumiere: { name: "Lumière Beauty Studio", category: "Brand identity" },
      eclosion: { name: "Eclosion", category: "Brand guidelines" },
      avivaHispanos: { name: "Água Viva Hispanos", category: "Flyer / Poster" },
      institutoAviva: { name: "Instituto Aviva", category: "Editorial design" },
      avivaCultos: { name: "Água Viva Cultos", category: "Social media" },
      submersos: { name: "Submersos Podcast", category: "Podcast visual package" },
    },
  },
  contact: {
    number: "07",
    line1: "Let's create something",
    line2: "big, together.",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    servicesLabel: "Services",
    servicesValue: "Branding · Digital Design · Audiovisual · Creative Production",
    cta: "Let's talk about your project",
  },
  footer: {
    role: "Graphic Designer",
    rights: "All rights reserved.",
    localTime: "Local time",
  },
};

export const translations: Record<Language, Dict> = { es, pt, en };
export type Translation = Dict;
