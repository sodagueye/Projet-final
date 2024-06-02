import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./About/About/Title";
import Container from "./About/About/Container";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Dashboard/Navbar";
import Produits from "./Catégories/Produits";
import Connexion from "./Inscription/Connexion";
import Inscrire from "./Inscription/Inscrire";
import MotdepassOublié from "./Inscription/MotdepassOublié";
import Menu from "../src/Componentnav/Menu";
import Reservation from "./Reservation/Reservation"
// import Appreciation from "./Appreciation/Appreciation";
import "./styles/style.css";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/Produits" element={<Produits />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Inscrire" element={<Inscrire />} />
          <Route path="/MotDePassOublié" element={<MotdepassOublié />} />
          {/* <Route path=""/> */}
          <Route path="/Reservation" element={<Reservation/>} />
          {/* <Route path="/Appreciation" element={<Appreciation />} /> */}
          <Route
            path="/About"
            element={
              <div className="container ">
                <Title title="About us" />
                <Container />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
