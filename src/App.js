import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Title from "./About/About/Title";
import Container from "./About/About/Container";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Dashboard/Navbar";
import "./styles/style.css";
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" />
          <Route path="/Admin" element={<Dashboard />} />
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
    </div>
  );
}

export default App;
