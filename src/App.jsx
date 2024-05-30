import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationPage from './Reservation/Reservation';
import Appreciation from './Appreciation/Appreciation'
import ReservationTable from './Reservation-Table/ReservationTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/appreciation' element={<Appreciation />} />
        <Route path='/tables' element={<ReservationTable />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
