import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./About/About/Title";
import Container from "./About/About/Container";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Dashboard/Navbar";
import Test from "./Dashboard/Test";
import "./styles/style.css";
import Inscrire from "./Inscription/Inscrire";
import Connexion from "./Inscription/Connexion";
import MotdepassOublié from "./Inscription/MotdepassOublié";

// import Dropdown from 'react-bootstrap/Dropdown';
import Menu from  './Componentnav/Menu';
import ReservationPage from "./Reservation/Reservation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/connexion" element={<Connexion/> }></Route>
          <Route path="/inscrire" element={<Inscrire/>}></Route>
          <Route path="/reinitialiser" element={ <MotdepassOublié/>}></Route>
          <Route path="/menu" element={ <Menu/>}></Route>
          <Route path="/reservation" element={ <ReservationPage/>}></Route>

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
