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
import Employes from "./Dashboard/Employes";
import Ventas from "./Suivis-Comptabilité/Ventes";
import ReservationTable from "./Reservation-Table/ReservationTable";
import AppAjout from "./Ajouter/AppAjout";
import Plats from "./Dashboard/Plats";
import PlatsVendus from "./Dashboard/PlatsVendus";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* User's Components */}
          <Route path="/" element={<Accueil />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/Modifier" element={<ModifierPassword />} />
          <Route path="/reinitialiser" element={<MotdepassOublié />} />
          <Route path="/reservation" element={<ReservationPage />} />
          {/* Admin's Components */}
          <Route path="/Utilisateur" element={<ListeUtilisateur />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/employe" element={<Employes />} />
          <Route path="/table" element={<ReservationTable />} />
          <Route path="/ventes" element={<PlatsVendus />} />
          <Route path="/ajout" element={<AppAjout />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/plats" element={<Plats />} />
          {/* Not Found Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
