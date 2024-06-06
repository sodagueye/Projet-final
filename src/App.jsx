import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './Inscription/Connexion';
import MotdepassOublié from './Inscription/MotdepassOublié';
import ListeUtilisateur from './Inscription/ListeUtilisateur';
import ModifierPassword from './Inscription/ModifierPassword';
import Inscrire from './Inscription/Inscrire';
import Menu from './Componentnav/Menu';
import AffichagePanier from './Componentnav/AffichagePanier';
//import { Table } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/connexion" element={<Connexion />} />
          <Route path="/inscrire" element={<Inscrire />} />
          <Route path="/reinitialiser" element={<MotdepassOublié />} />
          <Route path="/modifier" element={<ModifierPassword />} />
          <Route path="/listerUsers" element={<ListeUtilisateur />} />
          <Route path="/panier" element={<AffichagePanier />} /> 
          {/* Ajoutez d'autres routes si nécessaire */}
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h2>Bienvenue à la page d'accueil</h2>; 
}

export default App;
