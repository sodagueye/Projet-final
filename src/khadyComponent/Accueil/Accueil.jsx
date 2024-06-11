import { Carroussel } from "./Carroussel";
import { Presentation } from "./Presentation";
import { Footer } from "../Footer/Footer";

export function Accueil(){
    return <div>
        <Carroussel/>
        <Presentation/>
        <Footer />
    </div>
}