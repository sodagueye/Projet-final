import Carroussel from "./Carroussel";
import Presentation from "../Accueil/Presentation";
//import SectionAppreciation from "../Accueil/SectionAppreciation"
import Temoignage from "../Accueil/Temoignage";

export default function Accueil() {
  return (
    <div>
      <Carroussel />
      <Presentation />
      <Temoignage />
    </div>
  );
}
