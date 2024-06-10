
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
        { id: 1, name: "Tomates", nombredekilo: '6', pricePerKilo: 500, Datedepaiement: '06-21-24', Prixtotal: 3000 },
        { id: 2, name: "Oignons", nombredekilo: '15', pricePerKilo: 800, Datedepaiement: '06-21-24', Prixtotal: 40.000 },
        { id: 3, name: "Poivre", nombredekilo: '2', pricePerKilo: 1000, Datedepaiement: '06-21-24', Prixtotal: 1.000 },
        { id: 4, name: "riz", nombredekilo: '10', pricePerKilo: 500, Datedepaiement: '06-21-24', Prixtotal: 5.000 },
        { id: 5, name: "Viande de bœuf", nombredekilo: '20', pricePerKilo: 4000, Datedepaiement: '06-21-24', Prixtotal: 80.000 },
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
            <h6 className='text-center'>Historique des ingredients</h6>
            <hr style={{ background: "#70726E", borderBottom: "3px solid #70726E" }}></hr>
            <div className="d-flex justify-content-end mb-3 btnajout">
                <Button className="btnAjouter" variant="outline-primary" onClick={() => setShowAddModal(true)}>Ajouter</Button>
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
                        <tr key={index}>
                            <td style={{ paddingLeft: "20px" }}>{ingredient.name}</td>
                            <td>{ingredient.nombredekilo}Kilogramme</td>
                            <td style={{ paddingLeft: "20px", }}>{ingredient.pricePerKilo} FCFA</td>
                            <td style={{ paddingLeft: "25px" }}>{ingredient.Datedepaiement}</td>
                            <td style={{ paddingRight: "10px" }}>{ingredient.Prixtotal} FCFA</td>
                            <td style={{ paddingLeft: "20px" }}>

                                <AiFillEye onClick={() => handleViewDetails(ingredient)} className='icone1' />
                                <AiFillEdit onClick={() => handleEdit(ingredient)} className='icone2' />
                                <AiFillDelete onClick={() => handleDelete(ingredient.id)} className='icone3' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/*  Ms détails */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails de l'ingrédient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedIngredient && (
                        <div>
                            <p>Nom: {selectedIngredient.name}</p>
                            <p>Nombre de kilos: {selectedIngredient.nombredekilo}Kilogramme</p>
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
                                value={formData.name || ''}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId='formNombreDeKilo'>
                            <Form.Label>Nombre de Kilo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le nombre de Kilo"
                                value={formData.nombredekilo || ''}
                                onChange={(e) => setFormData({ ...formData, nombredekilo: e.target.value })}
                            />
                        </Form.Group>


                        <Form.Group controlId=' pricePerKilo'>
                            <Form.Label>Prix par Kilo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Entrer le Prix par Kilo"
                                value={formData.pricePerKilo || ''}
                                onChange={(e) => setFormData({ ...formData, pricePerKilo: e.target.value })} />
                        </Form.Group>

                        <Form.Group controlId='duedate'>
                            <Form.Label>Date de Paiement</Form.Label>
            
                        </Form.Group>
                        <input
                                type="date"
                                placeholder="Entrer la date de paiement"
                                value={formData.Datedepaiement || ''}
                                onChange={(e) => setFormData({ ...formData, Datedepaiement: e.target.value })}
                               />

                        <Form.Group>
                            <Form.Label>Prix Total</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Entrer le prix Total'
                                value={formData.Prixtotal || ''}
                                onChange={(e) => setFormData({ ...formData, Prixtotal: e.target.value })} />
                        </Form.Group>
                        {/*----------------------------------------------------- */}
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
