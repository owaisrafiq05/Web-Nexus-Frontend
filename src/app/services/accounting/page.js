import AccountingServices from "@/components/AccountingComp/AccountingServices";
import Contact from "@/components/AccountingComp/Contact";
import HeroSection from "@/components/AccountingComp/HeroSection";


export default function Accounting() {
  return (
    <div>
        <HeroSection/>
        <AccountingServices/>
        <Contact/>
    </div>

  );
}