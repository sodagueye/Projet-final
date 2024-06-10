// Importation des bibliothèques nécessaires
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Fonction pour récupérer les données des employés
const getEmployees = async () => {
  const response = await axios.get('http://localhost:5000/api/employees');
  return response.data;
};

// Component EmployeeList
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data);
    });
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Poste</th>
          <th>Salaire</th>
          <th>Heure de travail</th>
          <th>Mensualité</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
            <td>{employee.workHours}</td>
            <td>{employee.monthlySalary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Export du component
export default EmployeeList;