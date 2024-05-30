import { Carroussel } from "./Carroussel";
import { Presentation } from "./Presentation";
import CustomNavbar from "../../Componentnav/CustomNavbar";
// import Footer  from "./";




export function Accueil(){
    return <div>
        <CustomNavbar />
        <Carroussel/>
        <Presentation/>
     {/* <Footer/> */}
    </div>
}