import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tableau.css';
import { AiFillEdit, AiFillDelete, AiFillEye, AiOutlinePlus } from "react-icons/ai";

const Tableau = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [ingredients, setIngredients] = useState([
        { id: 1, name: "Tomates", nombredekilo: '6 Kilogrammes', pricePerKilo: 500, Datedepaiement: '06-21-24', Prixtotal: 3000 },
        { id: 2, name: "Oignons", nombredekilo: '6 Kilogrammes', pricePerKilo: 300, Datedepaiement: '06-21-24', Prixtotal: 1800 },
        { id: 3, name: "Poulet", nombredekilo: '6 Kilogrammes', pricePerKilo: 2000, Datedepaiement: '06-21-24', Prixtotal: 12000 },
        { id: 4, name: "Poisson", nombredekilo: '6 Kilogrammes', pricePerKilo: 1500, Datedepaiement: '06-21-24', Prixtotal: 9000 },
        { id: 5, name: "Viande de bœuf", nombredekilo: '6 Kilogrammes', pricePerKilo: 2500, Datedepaiement: '06-21-24', Prixtotal: 15000 },
    ]);

    const [formData, setFormData] = useState({
        id: null,
        name: '',
        nombredekilo: '',
        pricePerKilo: '',
        Datedepaiement: '',
        Prixtotal: ''
    });

    const handleViewDetails = (ingredient) => {
        setSelectedIngredient(ingredient);
        setShowModal(true);
    };

    const handleEdit = (ingredient) => {
        setFormData(ingredient);
        setShowAddModal(true);
    };

    const handleDelete = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setFormData({ id: null, name: '', nombredekilo: '', pricePerKilo: '', Datedepaiement: '', Prixtotal: '' });
    };

    const handleAddOrUpdate = () => {
        if (formData.id) {
            setIngredients(ingredients.map(ingredient => ingredient.id === formData.id ? formData : ingredient));
        } else {
            const newId = ingredients.length ? Math.max(...ingredients.map(i => i.id)) + 1 : 1;
            setIngredients([...ingredients, { ...formData, id: newId }]);
        }
        handleCloseAddModal();
    };

    return (
        <Container fluid className="table-container">
            <div className="d-flex justify-content-start mb-3">
                <Button variant="outline-primary" onClick={() => setShowAddModal(true)} d-flex justify-content-flex-end>Ajouter</Button>
            </div>
            <Table responsive className='table'>
                <thead>
                    <tr className='entete'>
                        <th>Ingrédient acheté</th>
                        <th>Nombre de kilos</th>
                        <th>Prix d'un Kilo</th>
                        <th>Date de paiement</th>
                        <th>Prix Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map((ingredient, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td style={{ paddingLeft: "20px" }}>{ingredient.name}</td>
                            <td>{ingredient.nombredekilo}</td>
                            <td style={{ paddingLeft: "20px" }}>{ingredient.pricePerKilo} FCFA</td>
                            <td style={{ paddingLeft: "25px" }}>{ingredient.Datedepaiement}</td>
                            <td style={{ paddingRight: "10px" }}>{ingredient.Prixtotal} FCFA</td>
                            <td style={{ paddingLeft: "20px" }}>
                                <AiFillEye onClick={() => handleViewDetails(ingredient)} />
                                <AiFillEdit onClick={() => handleEdit(ingredient)} />
                                <AiFillDelete onClick={() => handleDelete(ingredient.id)} />
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

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{formData.id ? 'Modifier' : 'Ajouter'} un ingrédient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le nom"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formNombreDeKilo">
                            <Form.Label>Nombre de kilos</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le nombre de kilos"
                                value={formData.nombredekilo}
                                onChange={(e) => setFormData({ ...formData, nombredekilo: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPricePerKilo">
                            <Form.Label>Prix par kilo</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Entrer le prix par kilo"
                                value={formData.pricePerKilo}
                                onChange={(e) => setFormData({ ...formData, pricePerKilo: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDateDePaiement">
                            <Form.Label>Date de paiement</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Entrer la date de paiement"
                                value={formData.Datedepaiement}
                                onChange={(e) => setFormData({ ...formData, Datedepaiement: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrixTotal">
                            <Form.Label>Prix total</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Entrer le prix total"
                                value={formData.Prixtotal}
                                onChange={(e) => setFormData({ ...formData, Prixtotal: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={handleAddOrUpdate}>
                        {formData.id ? 'Modifier' : 'Ajouter'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Tableau;
