import {Routes , Route} from"react-router-dom";
import { Accueil } from "./khadyComponent/Accueil/Accueil";
import { Commende } from "./khadyComponent/Commende/Commende";
import { Footer } from "./khadyComponent/Footer/Footer";
import { Pannier } from "./khadyComponent/Pannier/Pannier";
import { Vente } from "./khadyComponent/Ventes/Ventes";

function App() {
  return <div>
    <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Pannier" element={<Pannier/>} />
        <Route path="/Commende" element={<Commende/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Vente" element={<Vente/>}/>
    </Routes>
  </div>
}

export default App;
