import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
// import Title from "./About/About/Title";
// import Container from "./About/About/Container";
// import Dashboard from "./Dashboard/Dashboard";
// import Navbar from "./Dashboard/Navbar";
import Test from "./Dashboard/Test";
import "./styles/style.css";
import Connexion from "./Inscription/Connexion";
import MotdepassOublié from "./Inscription/MotdepassOublié";
// import Menu from './Componentnav/Menu';
import ReservationPage from "./Reservation/Reservation";
import { Accueil } from "./khadyComponent/Accueil/Accueil";
import { Commende } from "./khadyComponent/Commende/Commende";
import { Vente } from "./khadyComponent/Ventes/Ventes";
import { Pannier } from "./khadyComponent/Pannier/Pannier";
import Inscrire from './Inscription/Inscrire';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListeUtilisateur from './Inscription/ListeUtilisateur';
import ModifierPassword from './Inscription/ModifierPassword';
// import Inscrire from './Inscription/Inscrire';
import Menu from './Componentnav/Menu';
// import AffichagePanier from './Componentnav/AffichagePanier';
//import { Table } from 'react-bootstrap'; 




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Pannier" element={<Pannier />} />
          <Route path="/Commende" element={<Commende />} />
          <Route path="/Vente" element={<Vente/>} />
          {/* <Route path="/Admin" element={<Dashboard />} /> */}
          <Route path="/Test" element={<Test />} />
          <Route path="/connexion" element={<Connexion />}></Route>
          <Route path="/inscrire" element={<Inscrire />}></Route>
          <Route path="/reinitialiser" element={<MotdepassOublié />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservation" element={<ReservationPage />}></Route>
          <Route path="/modifier" element={ <ModifierPassword/>}></Route>
          <Route path="/listerUsers" element={ <ListeUtilisateur/>}></Route>
          {/* <Route path="/affichagepanier" element={ <AffichagePanier/>}></Route> */}
         </Routes>
      </BrowserRouter>
     
    </div>
  );
}



export default App;
