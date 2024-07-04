import React from 'react';
import axios from 'axios';

const DownloadButton = ({ fileId }) => {
  const downloadFile = async () => {
    try {
      // Faire une requête GET au backend pour télécharger le fichier PDF
      const response = await axios.get(`http://localhost:3000/download/${fileId}`, {
        responseType: 'blob', // Important pour traiter la réponse comme un Blob
      });

      // Créer une URL pour le Blob reçu
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;

      // Spécifier le nom du fichier à télécharger
      link.setAttribute('download', 'file.pdf'); // Vous pouvez récupérer le nom du fichier depuis le backend
      document.body.appendChild(link);

      // Déclencher le téléchargement
      link.click();

      // Nettoyer le DOM
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <button onClick={downloadFile}>
      Download PDF
    </button>
  );
};

export default DownloadButton;
