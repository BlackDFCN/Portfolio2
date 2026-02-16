
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import ServicesSection from '@/components/Home/ServicesSection';
import ProjectsSection from '@/components/Home/ProjectsSection';
import { StackSection } from '@/components/Home/StackSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import ContactSection from '@/components/Home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <StackSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
