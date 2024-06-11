import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import Menu from "./Componentnav/Menu";
import Accueil from "./khadyComponent/Accueil/Accueil"
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
import Commande from "./khadyComponent/Commande/Commande"
import Pannier from "./khadyComponent/Pannier/Pannier"
import "./khadyComponent/Commande/commande.css"
// import Connexion from "./Inscription/Connection"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/inscription" element={<Inscrire />} />
          {/* <Route path="/connexion" element={<Connexion />} /> */}
          <Route path="/" element={<Accueil />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/panier" element={<Pannier />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
