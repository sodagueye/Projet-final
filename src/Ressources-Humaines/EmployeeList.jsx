// Composant React
import React, { useState, useEffect } from "react";

const employees = [
  { id: 1, name: 'John Doe', post: 'Développeur', hours: 40, salary: 5000 },
  { id: 2, name: 'Jane Smith', post: 'Designeuse', hours: 30, salary: 4000 },
  { id: 3, name: 'Bob Johnson', post: 'Ingénieur', hours: 50, salary: 6000 },
];


function EmployeeList() {
  // const [employees, setEmployees] = useState([]);
  // const [error, setError] = useState(null);

  const [employeesData, setEmployeesData] = useState(employees);

  // useEffect(() => {
  //   fetch("/employees")
  //     .then((response) => response.json())
  //     .then((data) => setEmployees(data))
  //     .catch((error) => setError(error));
  // }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Poste</th>
          <th>Heures de travail</th>
          <th>Salaire/H</th>
          <th>Mensualité</th>
        </tr>
      </thead>
      <tbody>
        {employeesData.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.post}</td>
            <td>{employee.hours}H</td>
            <td>{employee.salary} FCFA</td>
            <td>{employee.salary * employee.hours} FCFA</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
