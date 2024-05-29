import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationPage from './Reservation/Reservation';
import Appreciation from './Appreciation/Appreciation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/appreciation' element={<Appreciation />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
