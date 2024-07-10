import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./Employe.css"; // Importez votre fichier CSS de style

const EmployeeForm = ({
  onEmployeeAdded,
  onEmployeeUpdated,
  employeeToEdit,
}) => {
  const [nom, setNom] = useState("");
  const [poste, setPoste] = useState("");
  const [salaire, setSalaire] = useState(0);
  const [horaire, setHoraire] = useState(0);
  const [mensualite, setMensualite] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
          `https://tache-de-validition-nodejs-1-lhb5.onrender.com/update/${employeeToEdit._id}`,
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

      handleCloseModal(); // Ferme le modal après soumission
      resetForm();
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button
          className="border-0"
          style={{ backgroundColor: "#91725d" }}
          onClick={handleShowModal}
        >
          {isEditing ? "Modifier" : "Ajouter"}
        </Button>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="agrandir"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Modifier l'employé" : "Ajouter un employé"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className=" p-3  my-3 container form-container"
          >
            <div className="">
              <div>
                <label className="form-label pt-3 ms-5 fs-5" htmlFor="name">
                  Nom 
                </label>
                <input
                  className=" inputs bg-transparent py-2 rounded-2"
                  type="text"
                  id="name"
                  name="name"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="form-label ms-5 fs-5" htmlFor="poste pt-3">
                  Poste
                </label>
                <input
                  className=" inputs bg-transparent py-2 rounded-2"
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
              <div className="">
                <label className="form-label ms-5 fs-5" htmlFor="salary">
                  Salaire
                </label>
                <input
                  className=" inputs bg-transparent py-2 rounded-2"
                  type="number"
                  id="salary"
                  name="salary"
                  value={salaire}
                  onChange={(event) => setSalaire(event.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="form-label ms-5 fs-5" htmlFor="workHours">
                  Horaire
                </label>
                <input
                  className=" inputs bg-transparent py-2 rounded-2"
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
              <label className="form-label ms-5 fs-5 fs-5" htmlFor="monthlySalary">
                Mensualité
              </label>
              <input
                className=" inputs bg-transparent py-2 rounded-2"
                type="text"
                id="monthlySalary"
                name="monthlySalary"
                value={mensualite}
                onChange={(event) => setMensualite(event.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-around">
              <Button
                variant="secondary"
                onClick={handleCloseModal}
                className="me-2 annuler"
              >
                Annuler
              </Button>
              <Button
                className=" btn-submit border-0"
                style={{ backgroundColor: "#91725d" }}
                onClick={handleShowModal}
              >
                {isEditing ? "Modifier" : "Ajouter"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmployeeForm;
