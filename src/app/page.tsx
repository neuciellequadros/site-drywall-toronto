import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyUsSection />
      <ProjectGallery />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}

