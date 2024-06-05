import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./About/About/Title";
import Container from "./About/About/Container";
import Dashboard from "./Dashboard/Dashboard";
import Accueil from "./khadyComponent/Accueil/Accueil";
import Navbar from "./Dashboard/Navbar";
import Details from './Details'
import Update from "./Dashboard/Update";
// import Presentation from "./khadyComponent/Accueil/Presentation";
// import Accueil from "./khadyComponent/Accueil/Accueil";
import "./styles/style.css";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/detail/:id" element={<Details />} />
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
