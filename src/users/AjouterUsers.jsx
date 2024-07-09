import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function AjouterUsers() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  async function Ajouter(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://tache-de-validition-nodejs-61fk.onrender.com/api/register", {
        firstName,
        lastName,
        email,
        number,
        password,
      }
    );

      if (response.status === 201) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumber("");
        setPassword("");
        
        toast.success("Utilisateur ajouté avec succès");

      } else {
        toast.error("Erreur lors de l'ajout de l'utilisateur");
      }
    } catch (error) {
        toast.error("Erreur lors de l'ajoute");
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={Ajouter} className=''>
        <div className='d-flex justify-content-center align-items-center gap-3 mt-5 mb-3'>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prénom" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" /></div>
        <div className='d-flex justify-content-center align-items-center gap-3 mb-3 '>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
       <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Numéro" /></div>
        <div className='mb-3'>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" /></div>
        <button type="submit">Ajouter</button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AjouterUsers;
