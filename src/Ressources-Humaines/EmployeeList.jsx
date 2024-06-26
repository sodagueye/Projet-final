import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Employe.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    nom: "",
    poste: "",
    salaire: 0,
    horaire: 0,
    mensualite: 0
  });

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const response = await axios.get("https://tache-de-validition-nodejs-6.onrender.com/api/employes/getting");
      setEmployees(response.data);
    } catch (error) {
      setError(error);
    }
  };
    //  ********CA MARCHE PAS ENCORE*********//

  // const handleDeleteEmployee = async (id) => {
  //   try {
  //     // Envoyer la requête DELETE pour supprimer l'employé
  //     await axios.delete(`https://tache-de-validition-nodejs-6.onrender.com/api/employes/delete/${id}`);
  
  //     // Mise à jour de la liste des employés localement après la suppression
  //     setEmployees(employees.filter(employee => employee.id !== id));
  
  //     console.log(`Employé avec l'id ${id} supprimé avec succès.`);
  
  //   } catch (error) {
  //     console.error("Erreur de Suppression:", error);
  //     // Gestion des erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur
  //   }
  // };
  

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Poste</th>
            <th>Salaire</th>
            <th>Heures de travail</th>
            <th>Mensualité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.nom}</td>
              <td>{employee.poste}</td>
              <td>{employee.salaire}</td>
              <td>{employee.horaire}</td>
              <td>{employee.mensualite}</td>
              <td>
                {/* <button onClick={() => handleDeleteEmployee(employee.id)}>Supprimer</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

