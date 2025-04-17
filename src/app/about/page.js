import Image from "next/image";
import AboutHero from "@/components/AboutComponents/AboutHero";
import Plan from "@/components/AboutComponents/Plan";
import Values from "@/components/AboutComponents/Values";
export default function About() {
  return (
    <div>
      <AboutHero />
      <Plan />
      <Values />
    </div>
  );
}
