import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationPage from './Reservation/Reservation';
import Appreciation from './Appreciation/Appreciation'
import ReservationTable from './Reservation-Table/ReservationTable';
import Connexion from "./Inscription/Connexion"
import Inscrire from './Inscription/Inscrire';
import Menu from "./Componentnav/Menu"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/menu' element={<Menu />} />
        {/* <Route path='/connexion' element={<Connexion />} /> */}
        <Route path='/inscription' element={<Inscrire/>} />
        <Route path='/appreciation' element={<Appreciation />} />
        <Route path='/tables' element={<ReservationTable />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
