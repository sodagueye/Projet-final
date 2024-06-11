import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import Menu from "./Componentnav/Menu";
import Accueil from "./khadyComponent/Accueil/Accueil";
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
import Commande from "./khadyComponent/Commande/Commande";
import Pannier from "./khadyComponent/Pannier/Pannier";
import "./khadyComponent/Commande/commande.css";
import Connexion from "./Inscription/Connexion";
import Products from "./Dashboard/Products";
import Navbar from "./Dashboard/Navbar";
import Sidebar from "./Dashboard/Sidebar";
import ListeUtilisateur from "./Inscription/ListeUtilisateur";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import Modifier from "./Inscription/Modifier"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/connexion" element={<MotdepassOublié />} />
          <Route path="/modifier" element={<Modifier />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/update/:id" element={<Update />} />
          <Route
            path="/plats"
            element={
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2 p-0">
                    <Sidebar />
                  </div>
                  <div className="col-10 p-0">
                    <Navbar />
                    <Products />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/users"
            element={
              <div className="container-fluid">
                <div className="row">
                  <div className="col-2 p-0">
                    <Sidebar />
                  </div>
                  <div className="col-10 p-0">
                    <Navbar />
                    <ListeUtilisateur />
                  </div>
                </div>
              </div>
            }
          />
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
