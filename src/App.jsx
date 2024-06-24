import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import Menu from "./Componentnav/Menu";
import Accueil from "./khadyComponent/Accueil/Accueil";
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
import Details from "./khadyComponent/Accueil/Details";
import Connexion from "./Inscription/Connexion";
import ListeUtilisateur from "./Inscription/ListeUtilisateur";
import ModifierPassword from "./Inscription/Modifier";
import Employe from "./Ressources-Humaines/Employe";
import Ventas from "./Suivis-Comptabilité/Ventes";
import ReservationTable from "./Reservation-Table/ReservationTable";
import AppAjout from "./Ajouter/AppAjout";
import Plats from "./Dashboard/Plats";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/Modifier" element={<ModifierPassword />} />
          <Route path="/reinitialiser" element={<MotdepassOublié />} />
          <Route path="/Utilisateur" element={<ListeUtilisateur />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/ajout" element={<AppAjout />} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/table" element={<ReservationTable />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/plats" element={<Plats />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ventes" element={<Ventas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
