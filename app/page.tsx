import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureCardsSection } from "@/components/FeatureCardsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Wave } from "@/components/Wave";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <FeatureCardsSection />
        <Wave fill="text-sky/10" />
        <ProjectsSection />
        <Wave fill="text-white" />
        <SkillsSection />
        <Wave fill="text-blue/5" />
        <ServicesSection />
        <Wave fill="text-cream" />
        <ProcessSection />
        <Wave fill="text-sky/10" />
        <AboutSection />
        <Wave fill="text-white" />
        <FaqSection />
        <Wave fill="text-navy" />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
