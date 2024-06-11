import React, { useState } from "react";
import axios from "axios";


function AddEmployee() {
  const [name, setName] = useState("");
  const [poste, setPoste] = useState("");
  const [salary, setSalary] = useState("");
  const [workHours, setWorkHours] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = {
      name,
      poste,
      salary,
      workHours,
      monthlySalary,
    };
    axios
      .post("http://localhost:5000/employees", employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
      
      setTimeout(() => {
        window.location.reload();
      }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" for="name">Nom :</label>
        <input
          className="form-control input"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3 row">
        {" "}
        <label className="col-sm-3 col-form-label" for="poste">Poste :</label>
        <input
          className="form-control input"
          type="text"
          id="poste"
          name="poste"
          value={poste}
          onChange={(event) => setPoste(event.target.value)}
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" for="salaire">Salaire :</label>
        <input
          className="form-control input"
          type="number"
          id="salary"
          name="salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" for="workHours">Heure de travail :</label>
        <input
          className="form-control input"
          type="number"
          id="workHours"
          name="workHours"
          value={workHours}
          onChange={(event) => setWorkHours(event.target.value)}
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" for="name">Mensualité :</label>
        <input
          className="form-control input"
          type="text"
          id="monthlySalary"
          name="monthlySalary"
          value={monthlySalary}
          onChange={(event) => setMonthlySalary(event.target.value)}
        />
      </div>

      <button className="btn btn-submit" type="submit" value="Ajouter">AJouter</button>
    </form>
  );
}

export default AddEmployee;
