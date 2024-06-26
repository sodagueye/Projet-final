import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import ModifierPassword from "./Inscription/ModifierPassword";
import Menu from "./Componentnav/Menu";
import Accueil from "./khadyComponent/Accueil/Accueil";
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
import Details from "./khadyComponent/Accueil/Details";
import Connexion from "./Inscription/Connexion";
import ListeUtilisateur from "./Inscription/ListeUtilisateur";
// import ModifierPassword from "./Inscription/Modifier";
import Employes from "./Dashboard/Employes";
import ReservationTable from "./Reservation-Table/ReservationTable";
import Plats from "./Dashboard/Plats";
import PlatsVendus from "./Dashboard/PlatsVendus";
import PageNotFound from "./PageNotFound";
import PageRedirection from "./Redirection-after-confirmation/Page-redirect";
import TrackReservation from "./Track-reservation/TrackReservation";
import AppAjout from "./Ajouter/AppAjout";
import Admin from "./Dashboard/Admin";
import SendMail from "./Inscription/SendMail";
import MsgSuccess from "./Inscription/MsgSuccess";
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
          <Route path="/msgsuccess" element={<MsgSuccess />} />
          <Route path="/sendmail" element={<SendMail />} />
          <Route path="/:token" element={<ModifierPassword />} />
          {/* <Route path="/modifier" element={<ModifierPassword />} /> */}

          <Route path="/reinitialiser" element={<MotdepassOublié />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route
            path="/redirection-confirmation"
            element={<PageRedirection />}
          />
          <Route path="/trackResevation" element={<TrackReservation />} />

          {/* Admin's Components */}
          <Route path="/utilisateur" element={<ListeUtilisateur />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="/admin/employe" element={<Employes />} />
            <Route path="/admin/dashboard" element={<Admin />} />
            <Route path="/admin/ventes" element={<PlatsVendus />} />
            <Route path="/admin/plats" element={<Plats />} />
            <Route path="/admin/utilisateur" element={<ListeUtilisateur />} />
          </Route>
          <Route path="/tables" element={<ReservationTable />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/plats" />
          <Route path="/ajout" element={<AppAjout />} />
          {/* Not Found Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
