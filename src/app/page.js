import Image from "next/image";
import HomeHero from "@/components/HomeComponents/HomeHero";
import TestimonialsSection from "@/components/HomeComponents/Testimonials";
import Services from "@/components/HomeComponents/Services";
import WhoWeAre from "@/components/HomeComponents/WhoWeAre";
import FAQSection from "@/components/HomeComponents/FAQSection";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Services />
      <WhoWeAre />
      <TestimonialsSection />
      <FAQSection />  
    </div>
  );
}
