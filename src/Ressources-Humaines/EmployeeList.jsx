
// Importation des bibliothèques nécessaires
import React, { useState, useEffect } from "react";
import axios from "axios";

// Fonction pour récupérer les données des employés
const getEmployees = async () => {
  const response = await axios.get("http://localhost:5000/employees");
  return response.data;
};

// Composant EmployeeList
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    getEmployees()
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // Button pour supprimer un employé

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then((response) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Poste</th>
          <th>Salaire</th>
          <th>Heure de travail</th>
          <th>Mensualité</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.poste}</td>
            <td>{employee.salary}</td>
            <td>{employee.workHours}</td>
            <td>{employee.monthlySalary}</td>
            <td>
              <div>
                <button
                  key={employee.id}
                  className="btn btn-danger"
                  onClick={() => setIdToDelete(employee.id)}
                >
                  Supprimer
                </button>

                {idToDelete && (
                  <button
                    className="btn btn-success"
                    onClick={() => handleDelete(idToDelete)}
                  >
                    Confirmer suppression
                  </button>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Export du component
export default EmployeeList;
