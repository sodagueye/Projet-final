// ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3030/api/reset-password/${token}`, { password });
      alert('Mot de passe mis à jour avec succès');
    } catch (error) {
      alert('Erreur lors de la mise à jour du mot de passe');
    }
  };

  return (
    <div>
      <h2>Réinitialiser le mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Mettre à jour le mot de passe</button>
      </form>
    </div>
  );
};

export default ResetPassword;
