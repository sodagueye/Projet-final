import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tableau.css';
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";

const Tableau = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const ingredients = [
        { name: "Tomates", nombredekilo: '6 Kilogramme', pricePerKilo: 500, Datedepaiement: '06-21-24', Prixtotal: 3000 },
        { name: "Oignons", nombredekilo: '6 Kilogramme', pricePerKilo: 300, Datedepaiement: '06-21-24', Prixtotal: 1800 },
        { name: "Poulet", nombredekilo: '6 Kilogramme', pricePerKilo: 2000, Datedepaiement: '06-21-24', Prixtotal: 12000 },
        { name: "Poisson", nombredekilo: '6 Kilogramme', pricePerKilo: 1500, Datedepaiement: '06-21-24', Prixtotal: 9000 },
        { name: "Viande de bœuf", nombredekilo: '6 Kilogramme', pricePerKilo: 2500, Datedepaiement: '06-21-24', Prixtotal: 15000 },
    ];

    const handleViewDetails = (ingredient) => {
        setSelectedIngredient(ingredient);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="table-container">
            <Table responsive className='table'>
                <thead>
                    <tr className='entete'>
                        <th> Ingrédient acheté</th>
                        <th>Nombre de kilos</th>
                        <th>Prix d'un Kilo</th>
                        <th>Date de paiement</th>
                        <th>Prix Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {ingredients.map((ingredient, index) => (
                        <tr key={index}>
                            <td style={{ paddingLeft: "20px" }}>{ingredient.name}</td>
                            <td>{ingredient.nombredekilo}</td>
                            <td style={{ paddingLeft: "20px" }}>{ingredient.pricePerKilo} FCFA</td>
                            <td style={{ paddingLeft: "25px" }}>{ingredient.Datedepaiement}</td>
                            <td style={{ paddingRight: "10px" }}>{ingredient.Prixtotal} FCFA</td>
                            <td style={{ paddingLeft: "20px" }}>
                                <AiFillEye onClick={() => handleViewDetails(ingredient)} />
                                <AiFillEdit />
                                <AiFillDelete />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails de l'ingrédient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedIngredient && (
                        <div>
                            <p>Nom: {selectedIngredient.name}</p>
                            <p>Nombre de kilos: {selectedIngredient.nombredekilo}</p>
                            <p>Prix par kilo: {selectedIngredient.pricePerKilo} FCFA</p>
                            <p>Date de paiement: {selectedIngredient.Datedepaiement}</p>
                            <p>Prix Total: {selectedIngredient.Prixtotal} FCFA</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Tableau;
