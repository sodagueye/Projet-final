import Carroussel from "./Carroussel";
import Presentation from "../Accueil/Presentation";
//import SectionAppreciation from "../Accueil/SectionAppreciation"

import AppreciationCard from "../Accueil/AppreciationCard"
export default function Accueil() {
  return (
    <div>
      <Carroussel />
      <Presentation />
      
      <AppreciationCard/>
    </div>
  );
}
