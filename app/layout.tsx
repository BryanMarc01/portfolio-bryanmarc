import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bryanmarc.dev"),
  title: "Ing. Bryan Marc — Apps, plataformas web e IA para tu negocio | RD",
  description:
    "Más de 15 productos funcionando hoy: el marketplace de un barrio, la agenda de las clínicas de RD, un launcher para niños con panel de padres. Apps, plataformas web, escritorio (Windows/Mac) e IA para dueños de negocio. Puerto Plata, República Dominicana.",
  keywords: [
    "desarrollador de apps",
    "aplicaciones móviles República Dominicana",
    "desarrollo web",
    "desarrollo de software a medida",
    "agente de voz IA",
    "aplicaciones de escritorio Tauri",
    "sistema de citas",
    "página web para negocios",
    "desarrollador full stack Puerto Plata",
    "Ing. Bryan Marc",
  ],
  authors: [{ name: "Ing. Bryan Marc Sosa Morán" }],
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "https://bryanmarc.dev/" },
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: "Ing. Bryan Marc — Desarrollo de software",
    url: "https://bryanmarc.dev/",
    title: "Ing. Bryan Marc — Apps, plataformas web e IA para tu negocio",
    description:
      "Tú me cuentas qué necesita tu negocio. Yo te entrego el producto funcionando, con precio claro y fecha cerrada.",
    images: ["/img/yo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. Bryan Marc — Apps, plataformas web e IA para tu negocio",
    description:
      "Tú me cuentas qué necesita tu negocio. Yo te entrego el producto funcionando, con precio claro y fecha cerrada.",
    images: ["/img/yo.webp"],
  },
  icons: { icon: "/assets/branding/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#FCF8F3",
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bryanmarc.dev/#person",
      name: "Bryan Marc Sosa Morán",
      honorificPrefix: "Ing.",
      jobTitle: "Ingeniero · Desarrollador Full Stack",
      url: "https://bryanmarc.dev/",
      image: "https://bryanmarc.dev/img/yo.webp",
      email: "bmarcenlinea@gmail.com",
      telephone: "+1-829-494-6176",
      address: { "@type": "PostalAddress", addressLocality: "Puerto Plata", addressCountry: "DO" },
      sameAs: [
        "https://www.linkedin.com/in/bryanmarc/",
        "https://github.com/BryanMarc01",
        "https://www.instagram.com/bryanmarc_/",
      ],
      knowsAbout: [
        "React Native",
        "Flutter",
        "Kotlin",
        "Expo",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Tauri",
        "Electron",
        "C# / .NET",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Supabase",
        "Docker",
        "OpenAI",
        "Voice AI",
        "Twilio",
        "Programación orientada a objetos",
        "Patrones de diseño",
        "Unity",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://bryanmarc.dev/#service",
      name: "Ing. Bryan Marc — Desarrollo de Software",
      description:
        "Desarrollo de aplicaciones móviles, plataformas web, aplicaciones de escritorio, sistemas de gestión a medida, asistentes de voz con IA y páginas de captación de clientes.",
      url: "https://bryanmarc.dev/",
      telephone: "+1-829-494-6176",
      priceRange: "$$",
      areaServed: ["República Dominicana", "España", "Argentina", "Latinoamérica"],
      address: { "@type": "PostalAddress", addressLocality: "Puerto Plata", addressCountry: "DO" },
      founder: { "@id": "https://bryanmarc.dev/#person" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo de software",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplicaciones móviles para negocios",
              description: "Apps con tu marca para iPhone y Android: pedidos, reservas, fidelidad y notificaciones.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plataformas web y tiendas online",
              description: "Tiendas, portales de clientes y paneles de control rápidos y seguros.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplicaciones de escritorio multiplataforma",
              description: "Software nativo para Windows y macOS con Tauri, ligero y seguro.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Asistentes de voz con Inteligencia Artificial",
              description: "Atienden llamadas, agendan citas y responden preguntas las 24 horas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sistemas de gestión a medida",
              description: "Software para clínicas, recursos humanos, talleres e inmobiliarias.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Páginas de captación de clientes",
              description: "Páginas rápidas, visibles en Google y escritas para que te contacten.",
            },
          },
        ],
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito saber de tecnología para trabajar con Bryan Marc?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Le explicas el problema de tu negocio en tus palabras y él se encarga de la parte técnica. Recibes un presupuesto claro, sin tecnicismos, con precio y fecha de entrega.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué puede construir Bryan Marc para mi negocio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aplicaciones móviles para iPhone y Android, plataformas web y tiendas online, aplicaciones de escritorio para Windows y macOS, sistemas de gestión a medida, asistentes de voz con Inteligencia Artificial y páginas de captación de clientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicado y con quién trabaja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Está en Puerto Plata, República Dominicana, y trabaja de forma remota con negocios y startups en República Dominicana, España, Argentina y el resto del mundo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tecnologías domina Bryan Marc?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React, Next.js, TypeScript y Node.js para web; React Native, Flutter y Kotlin para apps móviles; Tauri y Electron para aplicaciones de escritorio en Windows y macOS; PostgreSQL, MongoDB, Firebase y Supabase para datos; y OpenAI, Voice AI y Twilio para automatización con Inteligencia Artificial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo empiezo un proyecto con Bryan Marc?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escríbele por WhatsApp al +1 829 494 6176 o al correo bmarcenlinea@gmail.com. La primera conversación es gratis y sin compromiso, y responde en menos de 24 horas.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-sans">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
