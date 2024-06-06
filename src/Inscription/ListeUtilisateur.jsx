import React, { useState, useEffect } from 'react';
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import axios from 'axios';
import '../Inscription/inscrire.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ListeUtilisateur() {
    const [data, setData] = useState([]);
     const [selectedUser, setSelectedUser] = useState(null);
     const [showModal, setShowModal] = useState(false);



    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/admin/users");
            setData(response.data);
        } catch (error) {
            console.error("Failed to fetch list:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/admin/delete-admin/${id}`);
            if (response.status === 200) {
                
                setData(data.filter(item => item._id !== id));
              
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    const openModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="lister m-auto">
            <h6 className="ms-2 py-2">Liste des utilisateurs</h6>
            <div style={{ borderTop: "2px solid gray" }}></div>

            <table className="table">
                <thead>
                    <tr style={{ backgroundColor: "#eee" }}>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length ? data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td className='gap-3'>
                                    
                                    <AiFillEye className='icone1'onClick={() => openModal(item)} />
                                    <AiFillEdit className='icone2' />
                                    <AiFillDelete onClick={() => handleDelete(item._id)} className='icone3' />
                                </td>
                            </tr>
                        )) : <tr><td colSpan="5">Pas de données</td></tr>
                    }
                </tbody>
            </table>
           
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails Utilisateur</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Nom:</strong> {selectedUser && selectedUser.firstName}</p>
                    <p><strong>Prénom:</strong> {selectedUser && selectedUser.lastName}</p>
                    <p><strong>Email:</strong> {selectedUser && selectedUser.email}</p>
                    <p><strong>Téléphone:</strong> {selectedUser && selectedUser.number}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ListeUtilisateur;
