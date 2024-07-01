import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import Panier from "./Panier/Panier";
import { Footer } from "./khadyComponent/Footer/Footer";
import CustomNavbar from "./Componentnav/CustomNavbar";
import PanierProvider from "./Components";
import Users from "./users/users";
import About from "./ABOUT/About";
import MenuLayout from "./Componentnav/MenuLayout";
import Boissons from "./Componentnav/Boissons";
import Desserts from "./Componentnav/Desserts";
import PlatSenegalais from "./Componentnav/PlatSenegalais";
import Burgers from "./Componentnav/Burgers";
import CuisineAilleurs from "./Componentnav/CuisineAilleurs";
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
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/table" element={<ReservationTable />} />
            <Route path="/" element={<MenuLayout />}>
              <Route path="/boissons" element={<Boissons />} />
              <Route path="/platsSenegalais" element={<PlatSenegalais />} />
              <Route path="/cuisineAilleurs" element={<CuisineAilleurs />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/burgers" element={<Burgers />} />
            </Route>
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
          <Route path="/utilisateur" element={<Users />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="employe" element={<Employes />} />
            <Route path="dashboard" element={<Admin />} />
            <Route path="ventes" element={<PlatsVendus />} />
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
