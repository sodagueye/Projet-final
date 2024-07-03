import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import ModifierPassword from "./Inscription/ModifierPassword";
import Menu from "./Componentnav/Menu";
import Accueil from "./Accueil/Accueil";
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
import Details from "./Accueil/Details";
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
import Footer from "./Footer/Footer";
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
import Contact from "./Contact/Contact";
import Politique from "./pol-conf/politique";
import Localisation from "./localisation/localisation";
import Condition from "./cond-ut/condition";
import Navbar from "./Dashboard/Navbar";
import Category from "./Category/category";
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
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/table" element={<ReservationTable />} />
            <Route path="/menu" element={<MenuLayout />}>
              <Route index element={<Navigate replace to="boissons" />} />
              <Route path="/menu/boissons" element={<Boissons />} />
              <Route
                path="/menu/platsSenegalais"
                element={<PlatSenegalais />}
              />
              <Route
                path="/menu/cuisineAilleurs"
                element={<CuisineAilleurs />}
              />
              <Route path="/menu/desserts" element={<Desserts />} />
              <Route path="/menu/burgers" element={<Burgers />} />
            </Route>
          </Route>
          <Route path="/conditions-utilisation" element={<Condition />} />
          <Route path="/politique-de-confidentialite" element={<Politique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/msgsuccess" element={<MsgSuccess />} />
          <Route path="/sendmail" element={<SendMail />} />
          <Route path="/reset-password/:token" element={<ModifierPassword />} />
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
    
          <Route path="/category/:category" element={<Category/>} />
    
          

          {/* Route vers la page Panier */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 