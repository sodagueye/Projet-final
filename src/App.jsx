import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Inscrire from "./Inscription/Inscrire";
import Menu from "./Componentnav/Menu";
import Accueil from "./khadyComponent/Accueil/Accueil"
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
