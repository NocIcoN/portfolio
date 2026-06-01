import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialSection from "@/components/sections/SocialSection";
import ContactSection from "@/components/sections/ContactSection";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <ExperienceSection />
        <ServicesSection />
        <Divider />
        <SocialSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
