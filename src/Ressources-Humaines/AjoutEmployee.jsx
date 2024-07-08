
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const EmployeeForm = ({ onEmployeeAdded, onEmployeeUpdated, employeeToEdit }) => {
  const [nom, setNom] = useState("");
  const [poste, setPoste] = useState("");
  const [salaire, setSalaire] = useState();
  const [horaire, setHoraire] = useState();
  const [mensualite, setMensualite] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  //Pour le modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          `https://tache-de-validition-nodejs-6.onrender.com/api/employes/update/${employeeToEdit._id}`,
          employeeData
        );
        console.log("Employee updated:", response.data);
        onEmployeeUpdated(response.data);
      } else {
        response = await axios.post(
          `https://tache-de-validition-nodejs-6.onrender.com/api/employes`,

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
    <div>
      <Button onClick={handleShow} style={{ backgroundColor: "#91725d",textWrap:"nowrap",color:"white"}}>
        Ajouter un employé
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Ajouter un employe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="container-fluid">
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <div>
                    {/* <label htmlFor="name">Nom :</label> */}
                    <input
                      className="w-100 border rounded"
                      placeholder="Nom"
                      type="text"
                      id="name"
                      name="name"
                      value={nom}
                      onChange={(event) => setNom(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    {/* <label htmlFor="poste">Poste :</label> */}
                    <input
                      className="w-100 border rounded"
                      placeholder="Post"
                      type="text"
                      id="poste"
                      name="poste"
                      value={poste}
                      onChange={(event) => setPoste(event.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <div>
                    {/* <label htmlFor="salary">Salaire :</label> */}
                    <input
                      className="form-control border rounded"
                      placeholder="Salaire"
                      type="number"
                      id="salary"
                      name="salary"
                      value={salaire}
                      onChange={(event) => setSalaire(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    {/* <label htmlFor="workHours">Horaire :</label> */}
                    <input
                      className="w-100 border rounded"
                      placeholder="Horaire"
                      type="number"
                      id="workHours"
                      name="workHours"
                      value={horaire}
                      onChange={(event) => setHoraire(event.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row g-3 mb-3">
                <div className="col-12">
                  <div>
                    {/* <label htmlFor="monthlySalary">Mensualité :</label> */}
                    <input
                      className="w-100 border rounded"
                      placeholder="Mensualite"
                      type="text"
                      id="monthlySalary"
                      name="monthlySalary"
                      value={mensualite}
                      onChange={(event) => setMensualite(event.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center fs-6">
              <button className="rounded text-white px-3 py-2 border-0" type="submit" style={{ backgroundColor: "#91725d" }}>
                {isEditing ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose} className="bg-secondary">
              Close
            </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes          
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>

  );
};

export default EmployeeForm;

