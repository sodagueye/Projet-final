import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Connexion from './Inscription/Connexion';
//import MotdepassOublié from './Inscription/MotdepassOublié';
//import ListeUtilisateur from './Inscription/ListeUtilisateur';
//import ModifierPassword from './Inscription/ModifierPassword';
//import Inscrire from './Inscription/Inscrire';
import Menu from './Componentnav/Menu';
import AffichagePanier from './Componentnav/AffichagePanier';
import FacturationPage from './Componentnav/FacturationPage';
import ConfirmationPage from './Componentnav/ConfirmationPage';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Menu' element={<Menu />} />
          {/** <Route exact path="/connexion" element={<Connexion />} />
          <Route path="/inscrire" element={<Inscrire />} />
          <Route path="/reinitialiser" element={<MotdepassOublié />} />
          <Route path="/modifier" element={<ModifierPassword />} />
          <Route path="/listerUsers" element={<ListeUtilisateur />} />
          */}
          <Route path="/facture" element={<FacturationPage />} />
          <Route path="/confirme" element={<ConfirmationPage />} />
         <Route path="/panier" element={<AffichagePanier />} />  
          <Route path="/Panier" element={<AffichagePanier/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
