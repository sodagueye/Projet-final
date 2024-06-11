import React from 'react';
import EmployeeList from './EmployeeList';
import "./Employe.css"
import AddEmployee from './AjoutEmployee';

const Employe = () => {
  return (
    <div>
      <h1>Liste des employés</h1>
      <EmployeeList />

      <h1>Ajouter un nouvel employé</h1>
      <AddEmployee />
    </div>
  );
};

export default Employe