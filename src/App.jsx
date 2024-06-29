import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accueil } from "./khadyComponent/Accueil/Accueil";
import { Commande } from "./khadyComponent/Commande/Commande";
import { Vente } from "./khadyComponent/Ventes/Ventes";
//  import { Footer } from "./khadyComponent/Footer/Footer";
import { Pannier } from "./khadyComponent/Pannier/Pannier";
import Localisation from "./khadyComponent/localisation/localisation";
import Contact from "./khadyComponent/Contact/Contact";
import Navbar2 from "./Navbar2/Navbar2";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Pannier" element={<Pannier />} />
          <Route path="/Commande" element={<Commande />} />
          <Route path="/Vente" element={<Vente/>} />
          <Route path="/Localisation" element={<Localisation/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route patth="/Navbar2" element={<Navbar2/>}/>
          {/* <Route path="/Footer" element={<Footer />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
