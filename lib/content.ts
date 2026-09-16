import type { Bilingual } from "./i18n";

export const site = {
  name: "Bryan Marc",
  title: "Ing.",
  fullName: "Bryan Marc Sosa Morán",
  location: "Puerto Plata, República Dominicana",
  locationEn: "Puerto Plata, Dominican Republic",
  whatsapp: "18294946176",
  whatsappHref: "https://wa.me/18294946176",
  email: "bmarcenlinea@gmail.com",
  cvEs: "/cv/bryan-marc-cv-es.pdf",
  cvEn: "/cv/bryan-marc-cv-en.pdf",
  linkedin: "https://www.linkedin.com/in/bryanmarc/",
  github: "https://github.com/BryanMarc01",
  instagram: "https://www.instagram.com/bryanmarc_/",
};

export function waHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

interface NavLink {
  href: string;
  label: Bilingual;
}

export const navLinks: NavLink[] = [
  { href: "#proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "#sobre-mi", label: { es: "Sobre mí", en: "About" } },
  { href: "#skills", label: { es: "Skills", en: "Skills" } },
  { href: "#servicios", label: { es: "Servicios", en: "Services" } },
  { href: "#contacto", label: { es: "Contacto", en: "Contact" } },
];

export const heroTagline: Bilingual = {
  es: "Construyendo sitios web, apps y experiencias digitales.",
  en: "Building websites, apps, and digital experiences.",
};

export const heroCopy = {
  hire: { es: "Contrátame", en: "Hire me" } satisfies Bilingual,
  idea: {
    es: "Cuéntame tu idea",
    en: "Tell me your idea",
  } satisfies Bilingual,
  ideaMessage: {
    es: "Hola Bryan, tengo una idea y quiero saber cómo llevarla a cabo.",
    en: "Hi Bryan, I have an idea and I want to know how to make it happen.",
  } satisfies Bilingual,
  seeProjects: { es: "Ver proyectos", en: "See projects" } satisfies Bilingual,
  credential: {
    es: "Ing. · Desarrollador Full Stack",
    en: "Software Engineer · Full Stack Developer",
  } satisfies Bilingual,
  talkMessage: {
    es: "Hola Bryan, quiero conversar sobre un proyecto.",
    en: "Hi Bryan, I'd like to talk about a project.",
  } satisfies Bilingual,
};

export const heroSignpost = [
  { label: "CODE", targetId: "proyectos" },
  { label: "DESIGN", targetId: "skills" },
  { label: "BUILD", targetId: "servicios" },
  { label: "EXPLORE", targetId: "sobre-mi" },
];

interface FeatureCard {
  id: string;
  title: Bilingual;
  description: Bilingual;
  cta: Bilingual;
  href: string;
  image: string;
}

export const featureCards: FeatureCard[] = [
  {
    id: "projects",
    title: { es: "Proyectos", en: "Projects" },
    description: {
      es: "Explora mis apps, sitios web y casos de estudio más recientes, construidos con impacto real.",
      en: "Explore my latest apps, websites, and case studies built with real-world impact.",
    },
    cta: { es: "Ver proyectos", en: "View projects" },
    href: "#proyectos",
    image: "/assets/cards/projects.png",
  },
  {
    id: "about",
    title: { es: "Sobre mí", en: "About Me" },
    description: {
      es: "Soy Bryan Marc — un desarrollador al que le encanta convertir ideas en cosas reales y útiles en la web.",
      en: "Hi, I'm Bryan Marc — a developer who loves turning ideas into real, useful things on the web.",
    },
    cta: { es: "Conocer más", en: "Learn more" },
    href: "#sobre-mi",
    image: "/assets/cards/about.png",
  },
  {
    id: "skills",
    title: { es: "Skills", en: "Skills" },
    description: {
      es: "Desarrollo web, UI/UX, full stack, automatización y más. Siempre aprendiendo, siempre construyendo.",
      en: "Web development, UI/UX design, full stack, automation and more. Always learning, always building.",
    },
    cta: { es: "Ver mis skills", en: "See my skills" },
    href: "#skills",
    image: "/assets/cards/skills.png",
  },
  {
    id: "contact",
    title: { es: "Contacto", en: "Contact" },
    description: {
      es: "¿Tienes un proyecto en mente? Trabajemos juntos. Me encantaría escucharte.",
      en: "Have a project in mind? Let's work together. I'd love to hear from you.",
    },
    cta: { es: "Contactar", en: "Get in touch" },
    href: "#contacto",
    image: "/assets/cards/contact.png",
  },
];

interface Service {
  title: Bilingual;
  description: Bilingual;
  stack: string;
  tone: "mint" | "sky" | "lilac" | "peach" | "butter";
  wide?: boolean;
  message: Bilingual;
}

export const services: Service[] = [
  {
    title: {
      es: "Una app con tu marca en el bolsillo de tus clientes",
      en: "An app with your brand, in your customers' pocket",
    },
    description: {
      es: "Para iPhone y Android. Pedidos, reservas, fidelidad, notificaciones — a un toque.",
      en: "For iPhone and Android. Orders, bookings, loyalty, notifications — one tap away.",
    },
    stack: "React Native · Kotlin · Flutter",
    tone: "mint",
    wide: true,
    message: {
      es: "Hola Bryan, quiero una app móvil para mi negocio.",
      en: "Hi Bryan, I want a mobile app for my business.",
    },
  },
  {
    title: { es: "Tu negocio, abierto en internet", en: "Your business, open on the internet" },
    description: {
      es: "Una tienda online, un portal para tus clientes o un panel para tu equipo.",
      en: "An online store, a client portal or a panel for your team.",
    },
    stack: "React · Next.js · Node.js",
    tone: "sky",
    message: {
      es: "Hola Bryan, quiero una plataforma web o tienda online.",
      en: "Hi Bryan, I want a web platform or online store.",
    },
  },
  {
    title: {
      es: "Un asistente que contesta el teléfono a las 3 a.m.",
      en: "An assistant that answers the phone at 3 a.m.",
    },
    description: {
      es: "Contesta llamadas, agenda citas y no pierde un solo cliente.",
      en: "Answers calls, books appointments and never loses a customer.",
    },
    stack: "Inteligencia Artificial · OpenAI · Twilio",
    tone: "lilac",
    message: {
      es: "Hola Bryan, quiero un asistente de voz con IA para atender llamadas.",
      en: "Hi Bryan, I want an AI voice assistant to handle calls.",
    },
  },
  {
    title: {
      es: "Un solo lugar para manejar toda la operación",
      en: "One place to run the whole operation",
    },
    description: {
      es: "Clínicas, recursos humanos, talleres, inmobiliarias. Citas, personal y reportes en un solo lugar.",
      en: "Clinics, HR, workshops, real estate. Appointments, staff and reports in one place.",
    },
    stack: "Sistemas a medida · Web y móvil",
    tone: "peach",
    message: {
      es: "Hola Bryan, quiero un sistema a medida para mi operación.",
      en: "Hi Bryan, I want a custom system for my operation.",
    },
  },
  {
    title: {
      es: "Una página que convierte visitas en clientes",
      en: "A page that turns visits into customers",
    },
    description: {
      es: "Carga en segundos, aparece en Google y está escrita para que te escriban.",
      en: "Loads in seconds, shows up on Google, written so people write to you.",
    },
    stack: "Diseño · SEO · Medición",
    tone: "butter",
    message: {
      es: "Hola Bryan, quiero una página que me traiga clientes.",
      en: "Hi Bryan, I want a page that brings me customers.",
    },
  },
];

export const servicesCopy = {
  eyebrow: { es: "Servicios", en: "Services" } satisfies Bilingual,
  title: {
    es: "Escoge lo que le falta a tu negocio",
    en: "Pick what your business is missing",
  } satisfies Bilingual,
  subtitle: {
    es: "Toca cualquier tarjeta y me escribes por WhatsApp.",
    en: "Tap any card to message me on WhatsApp.",
  } satisfies Bilingual,
  talk: { es: "Conversar", en: "Let's talk" } satisfies Bilingual,
  unsure: { es: "¿No sabes cuál de todas necesitas?", en: "Not sure which one you need?" } satisfies Bilingual,
  unsureLink: {
    es: "Descríbemelo y yo te digo →",
    en: "Describe it to me and I'll tell you →",
  } satisfies Bilingual,
  unsureMessage: {
    es: "Hola Bryan, no estoy seguro de qué necesito. ¿Me orientas?",
    en: "Hi Bryan, I'm not sure what I need. Can you guide me?",
  } satisfies Bilingual,
};

interface ProcessStep {
  n: string;
  title: Bilingual;
  description: Bilingual;
  tag: Bilingual;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: { es: "Conversamos", en: "We talk" },
    description: {
      es: "Me cuentas qué necesitas, en palabras normales.",
      en: "You tell me what you need, in plain words.",
    },
    tag: { es: "Gratis · 30 minutos", en: "Free · 30 minutes" },
  },
  {
    n: "02",
    title: { es: "Te doy precio y fecha", en: "You get a price and a date" },
    description: {
      es: "Una cifra cerrada y una fecha de entrega, por escrito, antes de empezar.",
      en: "A closed number and a delivery date, in writing, before we start.",
    },
    tag: { es: "En menos de 48 horas", en: "In under 48 hours" },
  },
  {
    n: "03",
    title: { es: "Construyo y te lo enseño", en: "I build it and show you" },
    description: {
      es: "Ves avances cada semana y lo pruebas tú mismo.",
      en: "You see progress every week and try it yourself.",
    },
    tag: { es: "Revisión semanal", en: "Weekly check-ins" },
  },
  {
    n: "04",
    title: { es: "Lanzamos y me quedo", en: "We launch — and I stay" },
    description: {
      es: "Lo publico, enseño a tu equipo y me quedo para el soporte.",
      en: "I publish it, train your team and stay for support.",
    },
    tag: { es: "Acompañamiento después", en: "Ongoing support" },
  },
];

export const processCopy = {
  eyebrow: { es: "Cómo trabajamos", en: "How we work" } satisfies Bilingual,
  title: { es: "Cuatro pasos. Sin sorpresas.", en: "Four steps. No surprises." } satisfies Bilingual,
};

export type ProjectCategory = "realestate" | "software" | "app" | "generic";

interface Project {
  name: string;
  kind: Bilingual;
  description: Bilingual;
  image?: string;
  /** Square brand logo, shown centered on a gradient tile instead of a full-bleed screenshot. */
  logo?: string;
  category: ProjectCategory;
  href: string;
  lead?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "EntuZona",
    kind: { es: "Marketplace · Fundador", en: "Marketplace · Founder" },
    description: {
      es: "Los vecinos encuentran los comercios de su zona y los negocios consiguen clientes sin pagar publicidad.",
      en: "Neighbours find the shops around them; small businesses get customers without paying for ads.",
    },
    image: "/img/entuzona.webp",
    category: "app",
    href: "https://www.entuzona.app/",
    lead: true,
  },
  {
    name: "Citaly RD",
    kind: { es: "Salud · Fundador", en: "Health · Founder" },
    description: {
      es: "Los pacientes reservan en línea y las clínicas dejan de perder el día en el teléfono.",
      en: "Patients book online and clinics stop losing the day to phone calls.",
    },
    image: "/img/citaly.webp",
    category: "app",
    href: "https://citalyrd.com/",
  },
  {
    name: "Solares.do",
    kind: { es: "Bienes raíces · RD", en: "Real estate · DR" },
    description: {
      es: "Terrenos y propiedades que se buscan por zona y por precio.",
      en: "Land and property listings buyers can search by zone and price.",
    },
    image: "/img/solaresdo.webp",
    category: "realestate",
    href: "https://solares.do/",
    featured: true,
  },
  {
    name: "Function Dev",
    kind: { es: "Software · Colectivo de devs", en: "Software · Dev collective" },
    description: {
      es: "Un colectivo de desarrolladores en Puerto Plata que convierte ideas en apps y plataformas robustas y escalables.",
      en: "A collective of developers in Puerto Plata turning ideas into robust, scalable apps and platforms.",
    },
    image: "/img/functiondev.png",
    category: "software",
    href: "https://www.functiondevs.com/",
    featured: true,
  },
  {
    name: "Hiromoo",
    kind: { es: "App · Menús digitales", en: "App · Digital menus" },
    description: {
      es: "Menús digitales con código QR: los restaurantes actualizan precios, fotos y disponibilidad desde el teléfono, en tiempo real.",
      en: "QR-code digital menus: restaurants update pricing, photos and availability from their phone, in real time.",
    },
    image: "/img/hiromoo.png",
    category: "app",
    href: "https://hiromoo.app/",
    featured: true,
  },
  {
    name: "MiniBile",
    kind: { es: "Launcher + panel web · Padres", en: "Launcher + web panel · Parents" },
    description: {
      es: "Un launcher para el celular de niños y jóvenes, con un panel web para que los padres controlen qué apps y cuánto tiempo de pantalla están disponibles.",
      en: "A launcher for kids' and teens' phones, with a web panel for parents to control which apps and how much screen time is available.",
    },
    logo: "/img/minibile-logo.png",
    category: "app",
    href: "https://minibile.com/",
    featured: true,
  },
  {
    name: "AppMyPets",
    kind: { es: "App móvil · España", en: "Mobile app · Spain" },
    description: {
      es: "Vacunas, visitas al veterinario y recordatorios de cada mascota, en una sola app.",
      en: "Vaccines, vet visits and reminders for every pet, in one app.",
    },
    image: "/img/appmypets.webp",
    category: "app",
    href: "https://appmypets.es",
  },
  {
    name: "VamosRural",
    kind: { es: "Turismo · España", en: "Tourism · Spain" },
    description: {
      es: "Casas rurales y escapadas, reservables en pocos toques.",
      en: "Rural houses and getaways, bookable in a few taps.",
    },
    image: "/img/vamosrural.webp",
    category: "generic",
    href: "https://vamosrural.com/es",
  },
  {
    name: "Easy Online English",
    kind: { es: "Educación · En línea", en: "Education · Online" },
    description: {
      es: "Una escuela de inglés que inscribe y enseña completamente en línea.",
      en: "An English school that enrols and teaches entirely online.",
    },
    image: "/img/easyonlineenglishpic.webp",
    category: "generic",
    href: "https://easyonlineenglish.com",
  },
  {
    name: "Puerto Plata Center",
    kind: { es: "Plataforma local · Puerto Plata", en: "Local platform · Puerto Plata" },
    description: {
      es: "Todo lo que pasa en Puerto Plata, reunido en un solo lugar.",
      en: "Everything happening in Puerto Plata, in one place.",
    },
    image: "/img/puertoplata.webp",
    category: "generic",
    href: "https://www.puertoplatacenter.com",
  },
  {
    name: "PROLUBE",
    kind: { es: "Automotriz · Argentina", en: "Automotive · Argentina" },
    description: {
      es: "Lubricantes y servicios para el mercado automotriz argentino, con todo el catálogo en línea.",
      en: "Lubricants and services for the Argentine automotive market, with the full catalogue online.",
    },
    image: "/img/prolube.webp",
    category: "generic",
    href: "https://prolube.com.ar",
  },
  {
    name: "Dream City Corporation",
    kind: { es: "Bienes raíces · Puerto Plata", en: "Real estate · Puerto Plata" },
    description: {
      es: "Desarrollos residenciales y hoteleros de lujo en Puerto Plata: condominios, villas e instalaciones recreativas para inversionistas y turistas.",
      en: "Luxury residential and hospitality developments in Puerto Plata: condos, villas and recreational facilities for investors and tourists.",
    },
    category: "realestate",
    href: "https://dreamcitycorporation.com",
  },
  {
    name: "Dream City Real Estate",
    kind: { es: "Bienes raíces · Costa Norte", en: "Real estate · North Coast" },
    description: {
      es: "Corretaje de propiedades residenciales en venta y alquiler en la Costa Norte: Sosúa, Cabarete y Puerto Plata.",
      en: "Residential property brokerage for sale and rental along the North Coast: Sosúa, Cabarete and Puerto Plata.",
    },
    category: "realestate",
    href: "https://dreamcityrealestatedr.com/",
  },
  {
    name: "Vista Lomas",
    kind: { es: "Bienes raíces · Puerto Plata", en: "Real estate · Puerto Plata" },
    description: {
      es: "Condominios con vista al mar en Puerto Plata, pensados como inversión flexible entre casa de vacaciones e ingresos por turismo.",
      en: "Ocean-view condos in Puerto Plata, marketed as a flexible investment between vacation home and tourism income.",
    },
    category: "realestate",
    href: "https://vistalomascondos.com/",
  },
  {
    name: "Lionsgate DR",
    kind: { es: "Bienes raíces de lujo · Puerto Plata", en: "Luxury real estate · Puerto Plata" },
    description: {
      es: "Estado privado de lujo en Puerto Plata: un retiro exclusivo con amenidades de resort, casitas de huéspedes y amplios terrenos.",
      en: "A luxury private estate in Puerto Plata: an exclusive retreat with resort-style amenities, guest casitas and extensive grounds.",
    },
    category: "realestate",
    href: "https://lionsgatedr.com/",
  },
];

interface MoreProject {
  name: string;
  kind: Bilingual;
  href: string | null;
}

export const moreProjects: MoreProject[] = [
  { name: "Consulsoft", kind: { es: "Gestión de consultorios", en: "Clinic management" }, href: "https://marcsoftware.com/consulsoft.html" },
  { name: "ALS Recursos Humanos", kind: { es: "Sistema de personal", en: "HR system" }, href: "https://als.com.do/" },
  { name: "TabGroups Sosúa", kind: { es: "Bienes raíces de lujo", en: "Luxury real estate" }, href: "https://tabgroups.com/" },
  { name: "Houterao", kind: { es: "Comunidad gamer", en: "Gaming community" }, href: "https://houterao.com/" },
  { name: "The Shadows of Quisqueya", kind: { es: "Videojuego 3D, en desarrollo", en: "3D game, in development" }, href: null },
  { name: "RuralCare", kind: { es: "Asistente telefónico con IA", en: "AI phone assistant" }, href: null },
  { name: "MeloView", kind: { es: "App de streaming, privada", en: "Streaming app, private" }, href: null },
  { name: "I AM MUSIC", kind: { es: "App de música, privada", en: "Music app, private" }, href: null },
  { name: "Tablero de Planes", kind: { es: "Tablero en tiempo real", en: "Real-time board" }, href: "https://board-kappa-seven.vercel.app/" },
  { name: "Dream Fit AI", kind: { es: "Asistente de moda con IA", en: "AI fashion assistant" }, href: "https://github.com/BryanMarc01/Dream-Fit-AI" },
  { name: "Chess With React", kind: { es: "Ajedrez en línea", en: "Online chess" }, href: "https://github.com/BryanMarc01/Chess-With-React" },
  { name: "stickyNotes", kind: { es: "App de notas Android", en: "Android notes app" }, href: "https://github.com/BryanMarc01/stickyNotes-For-Android" },
  { name: "Ammunation", kind: { es: "Proyecto de infraestructura", en: "Infrastructure project" }, href: "https://github.com/BryanMarc01/Ammunation" },
];

export const projectsCopy = {
  eyebrow: { es: "Proyectos", en: "Work" } satisfies Bilingual,
  title: {
    es: "Funcionando ahora mismo, con usuarios reales.",
    en: "Live right now, with real users.",
  } satisfies Bilingual,
  visitSite: { es: "Ver el sitio", en: "Visit site" } satisfies Bilingual,
  seeMore: { es: "Ver otros proyectos entregados", en: "See other delivered projects" } satisfies Bilingual,
};

export type SkillCategoryIcon = "mobile" | "web" | "desktop" | "data" | "ai" | "fundamentals";
export type SkillTone = "sky" | "navy" | "cyan" | "orange" | "green" | "blue";

interface SkillItem {
  label: Bilingual;
  /** Stable key (language-independent) used to look up a brand/technology icon. */
  iconKey: string;
}

interface SkillGroup {
  title: Bilingual;
  icon: SkillCategoryIcon;
  tone: SkillTone;
  items: SkillItem[];
}

const skill = (es: string, en: string, iconKey: string): SkillItem => ({
  label: { es, en },
  iconKey,
});

// Grouped by platform (what contractors scan for first), then by what clients
// consistently ask about: AI/automation, data, and the fundamentals that signal
// senior-level engineering rather than just framework familiarity.
export const skillGroups: SkillGroup[] = [
  {
    title: { es: "Mobile", en: "Mobile" },
    icon: "mobile",
    tone: "sky",
    items: [
      skill("React Native", "React Native", "reactnative"),
      skill("Flutter", "Flutter", "flutter"),
      skill("Kotlin (Android)", "Kotlin (Android)", "kotlin"),
      skill("Expo", "Expo", "expo"),
    ],
  },
  {
    title: { es: "Web", en: "Web" },
    icon: "web",
    tone: "blue",
    items: [
      skill("React", "React", "react"),
      skill("Next.js", "Next.js", "nextjs"),
      skill("TypeScript", "TypeScript", "typescript"),
      skill("Tailwind CSS", "Tailwind CSS", "tailwind"),
      skill("Node.js", "Node.js", "nodejs"),
    ],
  },
  {
    title: { es: "Desktop", en: "Desktop" },
    icon: "desktop",
    tone: "navy",
    items: [
      skill("Tauri (macOS · Windows · Linux)", "Tauri (macOS · Windows · Linux)", "tauri"),
      skill("Electron", "Electron", "electron"),
      skill("C# / .NET", "C# / .NET", "dotnet"),
    ],
  },
  {
    title: { es: "Datos e infraestructura", en: "Data & Infrastructure" },
    icon: "data",
    tone: "cyan",
    items: [
      skill("PostgreSQL", "PostgreSQL", "postgresql"),
      skill("MongoDB", "MongoDB", "mongodb"),
      skill("Firebase", "Firebase", "firebase"),
      skill("Supabase", "Supabase", "supabase"),
      skill("Docker", "Docker", "docker"),
    ],
  },
  {
    title: { es: "IA y automatización", en: "AI & Automation" },
    icon: "ai",
    tone: "orange",
    items: [
      skill("OpenAI", "OpenAI", "openai"),
      skill("Voice AI", "Voice AI", "voiceai"),
      skill("Twilio", "Twilio", "twilio"),
      skill("Agentes y flujos", "Agents & workflows", "agents"),
    ],
  },
  {
    title: { es: "Fundamentos de ingeniería", en: "Engineering Fundamentals" },
    icon: "fundamentals",
    tone: "green",
    items: [
      skill("Programación orientada a objetos", "Object-oriented programming", "oop"),
      skill("Patrones de diseño y clean code", "Design patterns & clean code", "cleancode"),
      skill("Control de versiones (Git)", "Version control (Git)", "git"),
      skill("Pruebas automatizadas", "Automated testing", "testing"),
      skill("Metodologías ágiles", "Agile methodologies", "agile"),
      skill("Seguridad y rendimiento", "Security & performance", "security"),
    ],
  },
];

export const skillsCopy = {
  eyebrow: { es: "Skills", en: "Skills" } satisfies Bilingual,
  title: {
    es: "Herramientas que uso para construir",
    en: "Tools I use to build",
  } satisfies Bilingual,
  subtitle: {
    es: "Web development, UI/UX design, full stack, automatización y más. Siempre aprendiendo, siempre construyendo.",
    en: "Web development, UI/UX design, full stack, automation and more. Always learning, always building.",
  } satisfies Bilingual,
};

export const promises: Bilingual[] = [
  { es: "Un precio cerrado, acordado antes de empezar", en: "A closed price, agreed before we start" },
  { es: "Explicaciones sin tecnicismos, siempre", en: "Explanations without jargon, always" },
  { es: "El código y todas las cuentas son tuyas", en: "You own the code and every account" },
  { es: "Respuesta en menos de 24 horas, por escrito", en: "An answer within 24 hours, in writing" },
];

export const aboutStats: { value: string; label: Bilingual }[] = [
  { value: "6+", label: { es: "años construyendo software", en: "years building software" } },
  { value: "8", label: { es: "productos funcionando hoy", en: "products running today" } },
  { value: "3", label: { es: "países con clientes activos", en: "countries with active clients" } },
  { value: "24h", label: { es: "tiempo de respuesta", en: "response time" } },
];

export const aboutCopy = {
  eyebrow: { es: "Sobre mí", en: "About me" } satisfies Bilingual,
  title: {
    es: "Soy el Ing. Bryan Marc. Yo construyo el producto y yo contesto el teléfono.",
    en: "I'm Bryan, Software Engineer. I build the thing, and I answer the phone.",
  } satisfies Bilingual,
  body1: {
    es: "Seis años construyendo software para negocios en República Dominicana, España y Argentina — desde el colmado que vende en línea hasta clínicas con cientos de citas por semana.",
    en: "Six years building software for businesses in the Dominican Republic, Spain and Argentina — from a corner shop selling online to clinics handling hundreds of appointments a week.",
  } satisfies Bilingual,
  body2: {
    es: "Sin agencia en el medio. Hablas directo con quien escribe el código.",
    en: "No agency in the middle. You talk to the person writing the code.",
  } satisfies Bilingual,
  downloadCv: { es: "Descargar mi CV", en: "Download my CV" } satisfies Bilingual,
  promisesTitle: { es: "Lo que te prometo", en: "What I promise you" } satisfies Bilingual,
};

export const testimonials: { quote: Bilingual; author: string; role: Bilingual }[] = [
  {
    quote: {
      es: "Entendió exactamente lo que necesitaba para mi app de Android, fue muy atento y el trabajo salió genial. Recomendado.",
      en: "He understood exactly what I needed for my Android app, he was very attentive and the job came out great. Recommended.",
    },
    author: "yitan06",
    role: { es: "Cliente freelance", en: "Freelance client" },
  },
  {
    quote: {
      es: "Excelente trabajo en nuestra aplicación de música. Bryan entendió perfectamente lo que necesitábamos y entregó un producto de alta calidad.",
      en: "Excellent work on our music app. Bryan understood our needs perfectly and delivered a high-quality product.",
    },
    author: "MusicStream Inc.",
    role: { es: "Cliente corporativo", en: "Corporate client" },
  },
  {
    quote: {
      es: "La responsabilidad es lo que define a Bryan. Siempre cumple los plazos y la calidad del trabajo es excepcional.",
      en: "Reliability is what defines Bryan. He always hits the deadline and the quality of the work is exceptional.",
    },
    author: "Easy Online English",
    role: { es: "Responsable de proyecto", en: "Project manager" },
  },
];

export const faqCopy = {
  eyebrow: { es: "Preguntas frecuentes", en: "FAQ" } satisfies Bilingual,
  title: {
    es: "Lo que la gente pregunta antes de escribirme.",
    en: "What people ask before reaching out.",
  } satisfies Bilingual,
};

export const faqs: { question: Bilingual; answer: Bilingual }[] = [
  {
    question: {
      es: "¿Necesito saber de tecnología para trabajar con Bryan Marc?",
      en: "Do I need to know about technology to work with Bryan Marc?",
    },
    answer: {
      es: "No. Le explicas el problema de tu negocio en tus palabras y él se encarga de la parte técnica. Recibes un presupuesto claro, sin tecnicismos, con precio y fecha de entrega.",
      en: "No. You explain your business problem in your own words and he handles the technical side. You get a clear quote, no jargon, with a price and delivery date.",
    },
  },
  {
    question: {
      es: "¿Qué puede construir Bryan Marc para mi negocio?",
      en: "What can Bryan Marc build for my business?",
    },
    answer: {
      es: "Aplicaciones móviles para iPhone y Android, plataformas web y tiendas online, aplicaciones de escritorio para Windows y macOS, sistemas de gestión a medida, asistentes de voz con Inteligencia Artificial y páginas de captación de clientes.",
      en: "Mobile apps for iPhone and Android, web platforms and online stores, desktop apps for Windows and macOS, custom management systems, AI voice assistants and client-getting landing pages.",
    },
  },
  {
    question: {
      es: "¿Dónde está ubicado y con quién trabaja?",
      en: "Where is he located and who does he work with?",
    },
    answer: {
      es: "Está en Puerto Plata, República Dominicana, y trabaja de forma remota con negocios y startups en República Dominicana, España, Argentina y el resto del mundo.",
      en: "He's based in Puerto Plata, Dominican Republic, and works remotely with businesses and startups in the Dominican Republic, Spain, Argentina and worldwide.",
    },
  },
  {
    question: {
      es: "¿Qué tecnologías domina Bryan Marc?",
      en: "What technologies does Bryan Marc work with?",
    },
    answer: {
      es: "React, Next.js, TypeScript y Node.js para web; React Native, Flutter y Kotlin para apps móviles; Tauri y Electron para aplicaciones de escritorio en Windows y macOS; PostgreSQL, MongoDB, Firebase y Supabase para datos; y OpenAI, Voice AI y Twilio para automatización con Inteligencia Artificial.",
      en: "React, Next.js, TypeScript and Node.js for web; React Native, Flutter and Kotlin for mobile apps; Tauri and Electron for Windows and macOS desktop apps; PostgreSQL, MongoDB, Firebase and Supabase for data; and OpenAI, Voice AI and Twilio for AI automation.",
    },
  },
  {
    question: {
      es: "¿Cómo empiezo un proyecto con Bryan Marc?",
      en: "How do I start a project with Bryan Marc?",
    },
    answer: {
      es: "Escríbele por WhatsApp al +1 829 494 6176 o al correo bmarcenlinea@gmail.com. La primera conversación es gratis y sin compromiso, y responde en menos de 24 horas.",
      en: "Message him on WhatsApp at +1 829 494 6176 or email bmarcenlinea@gmail.com. The first conversation is free, no commitment, and he replies within 24 hours.",
    },
  },
];

export const contactCopy = {
  eyebrow: { es: "Empecemos", en: "Let's start" } satisfies Bilingual,
  title: {
    es: "Cuéntame qué necesita tu negocio.",
    en: "Tell me what your business needs.",
  } satisfies Bilingual,
  subtitle: {
    es: "La primera conversación es gratis. Sales sabiendo cuánto cuesta y cuánto toma.",
    en: "The first conversation is free. You leave it knowing what it costs and how long it takes.",
  } satisfies Bilingual,
  whatsapp: { es: "WhatsApp", en: "WhatsApp" } satisfies Bilingual,
  email: { es: "Correo", en: "Email" } satisfies Bilingual,
  whereIAm: { es: "Dónde estoy", en: "Where I am" } satisfies Bilingual,
  formTitle: { es: "O déjame tus datos", en: "Or leave me your details" } satisfies Bilingual,
  name: { es: "Tu nombre", en: "Your name" } satisfies Bilingual,
  mail: { es: "Tu correo", en: "Your email" } satisfies Bilingual,
  message: { es: "¿Qué quieres construir?", en: "What do you want to build?" } satisfies Bilingual,
  messagePlaceholder: {
    es: "Tengo un restaurante y quiero que la gente pida desde el teléfono…",
    en: "I run a restaurant and I want people to order from their phone…",
  } satisfies Bilingual,
  error: { es: "Completa los tres campos, por favor.", en: "Please fill in all three fields." } satisfies Bilingual,
  submit: { es: "Enviar mi mensaje", en: "Send my message" } satisfies Bilingual,
  note: {
    es: "Esto abre tu aplicación de correo con todo listo para enviar.",
    en: "This opens your email app with everything ready to send.",
  } satisfies Bilingual,
  ok: {
    es: "Enviado. Te respondo en menos de 24 horas.",
    en: "Sent. I'll get back to you within 24 hours.",
  } satisfies Bilingual,
};

export const footerCopy = {
  role: {
    es: "Apps, plataformas web e IA para negocios reales.",
    en: "Apps, web platforms and AI for real businesses.",
  } satisfies Bilingual,
  whatsapp: { es: "WhatsApp", en: "WhatsApp" } satisfies Bilingual,
  email: { es: "Correo", en: "Email" } satisfies Bilingual,
};
