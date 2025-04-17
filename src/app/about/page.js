import Image from "next/image";
import AboutHero from "@/components/AboutComponents/AboutHero";
import WhyUsFeatures from "@/components/AboutComponents/WhyUsFeature";
import Services from "@/components/HomeComponents/Services";
import WhoWeAre from "@/components/HomeComponents/WhoWeAre";

import Plan from "@/components/AboutComponents/Plan";
import Values from "@/components/AboutComponents/Values";
export default function About() {
  return (
    <div>
      <AboutHero/>
      <Services/>
      <WhoWeAre/>
      <WhyUsFeatures/>
      <AboutHero />
      <Plan />
      <Values />
    </div>
  );
}
