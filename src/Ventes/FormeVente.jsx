import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"; // Importez Button depuis react-bootstrap
import "./Ventes.css";

export default function FormVente({ edit, isUpdating, update, addItem }) {
  const [nom, setNom] = useState(edit ? edit.nom : "");
  const [prix, setPrix] = useState(edit ? edit.prix : "");
  const [numArticle, setNumArticle] = useState(edit ? edit.numArticle : "");
  const [paiment, setPaiment] = useState(edit ? edit.paiment : "");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (edit) {
      setNom(edit.nom);
      setPrix(edit.prix);
      setNumArticle(edit.numArticle);
      setPaiment(edit.paiment);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVente = {
      nom,
      prix,
      numArticle,
      paiment,
      id: edit ? edit.id : Math.floor(Math.random() * 1000),
    };

    if (isUpdating) {
      update(newVente);
    } else {
      addItem(newVente);
    }

    setNom("");
    setPrix("");
    setNumArticle("");
    setPaiment("");
    setShowModal(false); // Ferme le modal après la soumission du formulaire
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container py-2 px-5 formulaire">
      <div className="d-flex justify-content-start">
        <button
          onClick={openModal}
          style={{ backgroundColor: "#91725d" }}
          className="fs-5 my-4 p-2 text-white border-0 rounded"
        >
          Ajouter une Vente
        </button>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <form onSubmit={handleSubmit} className="container-fluid">
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une Vente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <div className="">
                <input
                  type="text"
                  name="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="inputs mt-4"
                  placeholder="Nom du produit"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="prix"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  className="inputs mt-4"
                  placeholder="Prix"
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <input
                  type="number"
                  name="numArticle"
                  className="inputs mt-4"
                  value={numArticle}
                  onChange={(e) => setNumArticle(e.target.value)}
                  placeholder="Nombre d'article"
                />
              </div>
              <div className="">
                <select
                  name="paiment"
                  id="paiment"
                  value={paiment}
                  onChange={(e) => setPaiment(e.target.value)}
                  className="inputs my-4"
                >
                  <option value=""></option>
                  <option value="Cash">Cash</option>
                  <option value="Weave">Weave</option>
                  <option value="Orange-Money">Orange-Money</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <div className="d-flex justify-content-around align-items-center">
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={closeModal}
                className="bg-secondary text-white"
              >
                Fermer
              </Button>
            </Modal.Footer>
            <div>
              {isUpdating ? (
                <button className="bg-warning p-2 my-2 rounded text-white border-0 fs-5">
                  Modifier
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "#91725d" }}
                  className="fs-5 my-4 p-2 text-white border-0 rounded"
                >
                  Ajouter
                </button>
              )}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
