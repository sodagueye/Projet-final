import React from "react";
import EmployeeList from "./EmployeeList";
import "./Employe.css";

const Employe = () => {
  return (
    <div className="pt-5">
      {/* <h1>Ajouter un nouvel employé</h1> */}
      <EmployeeList />
    </div>
  );
};

export default Employe;
