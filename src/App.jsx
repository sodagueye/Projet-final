import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import ModifierPassword from "./Inscription/ModifierPassword";
import Menu from "./Componentnav/Menu";
import Accueil from "./Accueil/Accueil";
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
// import Details from "./Accueil/Details";
import Connexion from "./Inscription/Connexion";
import Employes from "./Dashboard/Employes";
import ReservationTable from "./Reservation-Table/ReservationTable";
import Plats from "./Dashboard/Plats";
import PageNotFound from "./PageNotFound";
import PageRedirection from "./Redirection-after-confirmation/Page-redirect";
import TrackReservation from "./Track-reservation/TrackReservation";
import AppAjout from "./Ajouter/AppAjout";
import Admin from "./Dashboard/Admin";
import SendMail from "./Inscription/SendMail";
import MsgSuccess from "./Inscription/MsgSuccess";
import Components from "./Components";
import Panier from "./Panier/Panier";
import Footer from "./Footer/Footer";
import CustomNavbar from "./Componentnav/CustomNavbar";
import PanierProvider from "./Components";
import Apps from "./Panier/Modal";
import Users from "./users/users";
import About from "./ABOUT/About";
import Commande from "./Commande/Commande";
import Ventes from "./Ventes/Ventes";

const AppLayout = () => {
  return (
    <PanierProvider>
      <CustomNavbar />
      <Outlet />
      <Footer />
    </PanierProvider>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<ReservationPage />} />
            {/* <Route path="/detail/:id" element={<Details />} /> */}
            <Route path="/table" element={<ReservationTable />} />
          </Route>
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/msgsuccess" element={<MsgSuccess />} />
          <Route path="/sendmail" element={<SendMail />} />
          <Route path="/:token" element={<ModifierPassword />} />
          <Route path="/reinitialiser" element={<MotdepassOublié />} />
          <Route
            path="/redirection-confirmation"
            element={<PageRedirection />}
          />
          <Route path="/trackResevation" element={<TrackReservation />} />
         <Route path="/admin/utilisateur" element={<Users />} /> 
          <Route path="/admin" element={<Dashboard />}> 
            <Route path="employe" element={<Employes />} />
            <Route path="dashboard" element={<Admin />} />
            <Route path="/admin/ventes" element={<Ventes/>} />
            <Route path="/admin/commande" element={<Commande/>} />
            <Route path="plats" element={<Plats />} />
           </Route>
          <Route path="/update/:id" element={<Update />} />
          <Route path="/ajout" element={<AppAjout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="About" element={<About />} />
         

          {/* Route vers la page Panier */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
