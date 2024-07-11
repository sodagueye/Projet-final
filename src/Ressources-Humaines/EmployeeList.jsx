import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./AjoutEmployee";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const response = await axios.get(
        `https://tache-de-validition-nodejs-1-lhb5.onrender.com/api/employes/getting`
      );
      setEmployees(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteEmployee = async (_id) => {
    try {
      await axios.delete(
        `https://tache-de-validition-nodejs-1-lhb5.onrender.com/api/employes/delete/${_id}`
      );
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== _id)
      );
      console.log(`Employé avec l'id ${_id} supprimé avec succès.`);
    } catch (error) {
      console.error("Erreur de Suppression:", error);
    }
  };

  const handleEmployeeAdded = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleEmployeeUpdated = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee._id === updatedEmployee._id ? updatedEmployee : employee
      )
    );
    setEmployeeToEdit(null);
  };

  const handleEditEmployee = (employee) => {
    setEmployeeToEdit(employee);
  };

  return (
    <div>
      <EmployeeForm
        onEmployeeAdded={handleEmployeeAdded}
        onEmployeeUpdated={handleEmployeeUpdated}
        employeeToEdit={employeeToEdit}
      />
      {/* <div className="table-responsive p-3">
        <table className="table table-striped table-hover">
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
                  <button
                    onClick={() => handleDeleteEmployee(employee._id)}
                    className="btn btn me-2"
                  >
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="btn btn"
                  >
                    <FaPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="table-responsive p-3">
        <table className="table table-striped table-hover">
          <thead style={{ backgroundColor: "#91725d" }}>
            <tr>
              <th style={{ backgroundColor: "#91725d", color: "white" }}>
                Nom
              </th>
              <th style={{ backgroundColor: "#91725d", color: "white" }}>
                Poste
              </th>
              <th style={{ backgroundColor: "#91725d", color: "white" }}>
                Salaire
              </th>
              <th style={{ backgroundColor: "#91725d", color: "white" }}>
                Heures de Travail
              </th>
              <th style={{ backgroundColor: "#91725d", color: "white" }}>
                Mensualité
              </th>
              <th style={{ backgroundColor: "#91725d", color: "white" }}>
                Actions
              </th>
            </tr>
          </thead>
          {/* <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {product.image && (
                  <img src={product.image} alt={product.name} width="100" />
                )}
              </td>
              <td>{product.category}</td>
              <td>
                <button
                  onClick={() => handleEdit(product)}
                  className="border-0 mx-2   p-2 rounded-2 bg-transparent"
                >
                  <MdEdit className="text-warning " />
                </button>
                <button
                  onClick={() => handleDeleteClick(product._id)}
                  className="border-0  p-2 rounded-2 bg-transparent"
                >
                  <MdDelete className="text-danger" />
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.nom}</td>
                <td>{employee.poste}</td>
                <td>{employee.salaire}</td>
                <td>{employee.horaire}</td>
                <td>{employee.mensualite}</td>
                <td>
                  <button
                    onClick={() => handleDeleteEmployee(employee._id)}
                    className="btn btn me-2"
                  >
                    <MdDelete />
                  </button>
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="btn btn"
                  >
                    <FaPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
