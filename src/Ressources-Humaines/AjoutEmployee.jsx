// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EmployeeForm = ({ onEmployeeAdded, onEmployeeUpdated, employeeToEdit }) => {
//   const [nom, setNom] = useState("");
//   const [poste, setPoste] = useState("");
//   const [salaire, setSalaire] = useState(0);
//   const [horaire, setHoraire] = useState(0);
//   const [mensualite, setMensualite] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     if (employeeToEdit) {
//       setNom(employeeToEdit.nom);
//       setPoste(employeeToEdit.poste);
//       setSalaire(employeeToEdit.salaire);
//       setHoraire(employeeToEdit.horaire);
//       setMensualite(employeeToEdit.mensualite);
//       setIsEditing(true);
//     } else {
//       setIsEditing(false);
//     }
//   }, [employeeToEdit]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const employeeData = {
//       nom: nom,
//       poste: poste,
//       salaire: salaire,
//       horaire: horaire,
//       mensualite: mensualite,
//     };

//     try {
//       if (isEditing) {
//         const response = await axios.patch(
//           `http://localhost:8080/api/employes/update/${employeeToEdit._id}`,
//           employeeData
//         );
//         console.log("Employee updated:", response.data);
//         onEmployeeUpdated(response.data);
//       } else {
//         const response = await axios.post(
//           "http://localhost:8080/api/employes",
//           employeeData
//         );
//         console.log("Employee added:", response.data);
//         onEmployeeAdded(response.data);
//       }

//       setNom("");
//       setPoste("");
//       setSalaire(0);
//       setHoraire(0);
//       setMensualite("");
//     } catch (error) {
//       console.error("Error saving employee:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="shadow p-3 mx-auto my-3 text-center container"> 
//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label" htmlFor="name">Nom :</label>
//           <input
//             className="form-control input"
//             type="text"
//             id="name"
//             name="name"
//             value={nom}
//             onChange={(event) => setNom(event.target.value)}
//             required
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label" htmlFor="poste">Poste :</label>
//           <input
//             className="form-control input"
//             type="text"
//             id="poste"
//             name="poste"
//             value={poste}
//             onChange={(event) => setPoste(event.target.value)}
//             required
//           />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6">
//           <label className="form-label" htmlFor="salary">Salaire :</label>
//           <input
//             className="form-control input"
//             type="number"
//             id="salary"
//             name="salary"
//             value={salaire}
//             onChange={(event) => setSalaire(event.target.value)}
//             required
//           />
//         </div>
//         <div className="col-md-6">
//           <label className="form-label" htmlFor="workHours">Horaire :</label>
//           <input
//             className="form-control input"
//             type="number"
//             id="workHours"
//             name="workHours"
//             value={horaire}
//             onChange={(event) => setHoraire(event.target.value)}
//             required
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="form-label" htmlFor="monthlySalary">Mensualité :</label>
//         <input
//           className="form-control input"
//           type="text"
//           id="monthlySalary"
//           name="monthlySalary"
//           value={mensualite}
//           onChange={(event) => setMensualite(event.target.value)}
//           required
//         />
//       </div>
//       <button className="btn btn-submit w-100" type="submit">
//         {isEditing ? "Modifier" : "Ajouter"}
//       </button>
//     </form>
//   );
// };

// export default EmployeeForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeForm = ({ onEmployeeAdded, onEmployeeUpdated, employeeToEdit }) => {
  const [nom, setNom] = useState("");
  const [poste, setPoste] = useState("");
  const [salaire, setSalaire] = useState(0);
  const [horaire, setHoraire] = useState(0);
  const [mensualite, setMensualite] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (employeeToEdit) {
      setNom(employeeToEdit.nom);
      setPoste(employeeToEdit.poste);
      setSalaire(employeeToEdit.salaire);
      setHoraire(employeeToEdit.horaire);
      setMensualite(employeeToEdit.mensualite);
      setIsEditing(true);
    } else {
      setIsEditing(false);
      resetForm();
    }
  }, [employeeToEdit]);

  const resetForm = () => {
    setNom("");
    setPoste("");
    setSalaire(0);
    setHoraire(0);
    setMensualite("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const employeeData = {
      nom: nom,
      poste: poste,
      salaire: salaire,
      horaire: horaire,
      mensualite: mensualite,
    };

    try {
      let response;
      if (isEditing) {
        response = await axios.patch(
          `https://tache-de-validition-nodejs-61fk.onrender.com/api/employes/update/${employeeToEdit._id}`,
          employeeData
        );
        console.log("Employee updated:", response.data);
        onEmployeeUpdated(response.data);
      } else {
        response = await axios.post(
          `https://tache-de-validition-nodejs-61fk.onrender.com/api/employes`,

          employeeData
        );
        console.log("Employee added:", response.data);
        onEmployeeAdded(response.data);
      }

      resetForm();
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shadow p-3 mx-auto my-3 text-center container"> 
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">Nom :</label>
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
        <div className="col-md-6">
          <label className="form-label" htmlFor="poste">Poste :</label>
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
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="salary">Salaire :</label>
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
        <div className="col-md-6">
          <label className="form-label" htmlFor="workHours">Horaire :</label>
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
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="monthlySalary">Mensualité :</label>
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
      <button className="btn btn-submit w-100" type="submit">
        {isEditing ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
};

export default EmployeeForm;

