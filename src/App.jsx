import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accueil } from "./Accueil/Accueil";
import { Commande } from "./Commande/Commande";
import { Vente } from "./Ventes/Ventes";
//  import { Footer } from "./Footer/Footer";
import { Pannier } from "./Pannier/Pannier";
import Localisation from "./localisation/localisation";
import Contact from "./Contact/Contact";
import Navbar2 from "./Navbar2/Navbar2";
import Condition from "./cond-ut/condition";
import Politique from "./pol-conf/politique";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Pannier" element={<Pannier />} />
          <Route path="/Commande" element={<Commande />} />
          <Route path="/Vente" element={<Vente />} />
          <Route path="/Localisation" element={<Localisation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/conditions-utilisation" element={<Condition/>}/>
          <Route path="/politique-de-confidentialite" element={<Politique/>}/>
          <Route path="/Navbar2" element={<Navbar2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
