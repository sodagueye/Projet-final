import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [nom, setNom] = useState("");
  const [poste, setPoste] = useState("");
  const [salaire, setSalaire] = useState(0);
  const [horaire, setHoraire] = useState(0);
  const [mensualite,setMensualite] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newEmployee = {
      nom: nom,
      poste: poste,
      salaire: salaire,
      horaire: horaire,
      mensualite: mensualite
    };

    try {
      const response = await axios.post("https://tache-de-validition-nodejs-6.onrender.com/api/employes", newEmployee);
      console.log("Employee added:", response.data);

      setNom("");
      setPoste("");
      setSalaire(0);
      setHoraire(0);
      setMensualite("");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" htmlFor="name">Nom :</label>
        <input
          className="form-control input"
          type="text"
          id="name"
          name="name"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" htmlFor="poste">Poste :</label>
        <input
          className="form-control input"
          type="text"
          id="poste"
          name="poste"
          value={poste}
          onChange={(event) => setPoste(event.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" htmlFor="salary">Salaire :</label>
        <input
          className="form-control input"
          type="number"
          id="salary"
          name="salary"
          value={salaire}
          onChange={(event) => setSalaire(event.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" htmlFor="workHours">Heure de travail :</label>
        <input
          className="form-control input"
          type="number"
          id="workHours"
          name="workHours"
          value={horaire}
          onChange={(event) => setHoraire(event.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-3 col-form-label" htmlFor="monthlySalary">Mensualité :</label>
        <input
          className="form-control input"
          type="text"
          id="monthlySalary"
          name="monthlySalary"
          value={mensualite}
          onChange={(event) => setMensualite(event.target.value)}
          required
        />
      </div>

      <button className="btn btn-submit" type="submit">Ajouter</button>
    </form>
  );
};

export default EmployeeForm;




