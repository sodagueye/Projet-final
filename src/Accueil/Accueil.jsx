import Carroussel from "./Carroussel";
import Presentation from "../Accueil/Presentation";
import SectionAppreciation from "../Accueil/SectionAppreciation"
export default function Accueil() {
  return (
    <div>
      <Carroussel />
      <Presentation />
      <SectionAppreciation/>
    </div>
  );
}
