import Image from "next/image";
import HeroSection from "@/components/ServicesComponents/HeroSection";
import ServicesList from "@/components/ServicesComponents/ServicesList";
import Contact from "@/components/ServicesComponents/Contact";
export default function ServicesPage() {
  return (
    <div>
      <HeroSection/>
      <ServicesList/>
      <Contact/>
    </div>
  );
}
