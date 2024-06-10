import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Reservation/Reservation";
import Appreciation from "./Appreciation/Appreciation";
import ReservationTable from "./Reservation-Table/ReservationTable";
import Inscrire from "./Inscription/Inscrire";
import Connexion from "./Inscription/Connexion";
import MotdepassOublié from "./Inscription/MotdepassOublié";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/inscription" element={<Inscrire />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/MotdepassOublié" element={<MotdepassOublié />} />
          <Route path="/appreciation" element={<Appreciation />} />
          <Route path="/tables" element={<ReservationTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
