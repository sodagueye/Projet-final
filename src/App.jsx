
import './App.css';
import Inscrire from './Inscription/Inscrire';
import 'bootstrap/dist/css/bootstrap.min.css';
import Connexion from './Inscription/Connexion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MotdepassOublié from './Inscription/MotdepassOublié';

function App(){

  return (
    <div className="App">
    
    <BrowserRouter>
        <Routes>

          <Route path="/connexion" element={<Connexion/> }></Route>
          <Route path="/" element={<Inscrire/>}></Route>
          <Route path="/inscrire" element={<Inscrire/>}></Route>
          <Route path="/reinitialiser" element={ <MotdepassOublié/>}></Route>

        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App;
