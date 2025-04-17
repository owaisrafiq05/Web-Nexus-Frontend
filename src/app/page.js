import Image from "next/image";
import HomeHero from "@/components/HomeComponents/HomeHero";
import TestimonialsSection from "@/components/HomeComponents/Testimonials";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <TestimonialsSection />
    </div>
  );
}
