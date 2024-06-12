import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
// import Appreciation from "./Appreciation/Appreciation";
// import ReservationTable from "./Reservation-Table/ReservationTable";
import Inscrire from "./Inscription/Inscrire";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import Menu from "./Componentnav/Menu";
import Accueil from "./khadyComponent/Accueil/Accueil";
import Dashboard from "./Dashboard/Dashboard";
import Update from "./Dashboard/Update";
import Products from "./Dashboard/Products";
import Navbar from "./Dashboard/Navbar";
import Sidebar from "./Dashboard/Sidebar";
import Connexion from "./Inscription/Connexion"
import  ListeUtilisateur from './Inscription/ListeUtilisateur';
import ModifierPassword from "./Inscription/Modifier";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/Modifier" element={<ModifierPassword/>} />
          <Route path="/reinitialiser" element={<MotdepassOublié/>} />
          
         <Route path="/Utilisateur" element={< ListeUtilisateur />} />
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
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
