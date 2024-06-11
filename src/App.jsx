import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationPage from './Reservation/Reservation';
import Appreciation from './Appreciation/Appreciation'
import ReservationTable from './Reservation-Table/ReservationTable';
import Employe from './Ressources-Humaines/Employe';
import Ventas from './Suivis-Comptabilité/Ventes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/appreciation' element={<Appreciation />} />
        <Route path='/tables' element={<ReservationTable />} />
        <Route path='/RH' element={<Employe />} />
        <Route path='/ventes' element={<Ventas />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
