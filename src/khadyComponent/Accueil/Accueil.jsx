import Carroussel  from "./Carroussel";
import Presentation from "../Accueil/Presentation";
import { Footer } from "../Footer/Footer";
import CustomNavbar from "../../Componentnav/CustomNavbar";
export default function Accueil() {
  return (
    <div>
      <CustomNavbar />
      <Carroussel />
      <Presentation />
      <Footer />
    </div>
  );
}
