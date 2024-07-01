import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./AjoutEmployee"; 

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const response = await axios.get(
        "https://tache-de-validition-nodejs-6.onrender.com/api/employes/getting"
      );
      setEmployees(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteEmployee = async (_id) => {
    try {
      await axios.delete(
        `https://tache-de-validition-nodejs-6.onrender.com/api/employes/delete/${_id}`
      );
      // Mettre à jour la liste des employés localement après la suppression
      setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== _id));
      console.log(`Employé avec l'id ${_id} supprimé avec succès.`);
    } catch (error) {
      console.error("Erreur de Suppression:", error);
      // Gestion des erreurs ici, par exemple, affichage d'un message d'erreur à l'utilisateur
    }
  };

  const handleEmployeeAdded = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
       <EmployeeForm onEmployeeAdded={handleEmployeeAdded} /> 
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
            <tr key={employee._id}>
              <td>{employee.nom}</td>
              <td>{employee.poste}</td>
              <td>{employee.salaire}</td>
              <td>{employee.horaire}</td>
              <td>{employee.mensualite}</td>
              <td>
                <button onClick={() => handleDeleteEmployee(employee._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;


