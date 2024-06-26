import Carroussel from "./Carroussel";
import Presentation from "../Accueil/Presentation";
import { Footer } from "../Footer/Footer";
export default function Accueil() {
  return (
    <div>
      <Carroussel />
      <Presentation />
      <Footer />
    </div>
  );
}
