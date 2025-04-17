import Contact from "@/components/AccountingComp/Contact";
import HeroSection from "@/components/InventoryComp/HeroSection";
import InventoryServices from "@/components/InventoryComp/InventoryServices";

export default function Inventory() {
  return (
    <div>
        <HeroSection/>
        <InventoryServices/>
        <Contact/>
    </div>

  );
}