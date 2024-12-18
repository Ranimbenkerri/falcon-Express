import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Agences from "@/components/agences/agences";
import Qualities from "@/components/qualities/qualities";
import Tarifs from "@/components/tarifs/tarifs";
import Contact from "@/components/contact/contact";
import SuiviColis from "@/components/suivi/suivi-mon-colis";
import AvisArivee from "@/components/Avis/avis-arrive";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Services/>
        <SuiviColis/> 
        <Agences/>
        <Qualities/>
        <Tarifs/>
        <AvisArivee/>
        <Contact/>
        
    </div>
  );
}
