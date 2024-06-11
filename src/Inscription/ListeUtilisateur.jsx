<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import axios from 'axios';
import '../Inscription/inscrire.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ListeUtilisateur() {
    const [data, setData] = useState([]);
    // Pagination
    // const [currentPage , setCurrentPage]=useState('');
    // const recordsPerPage= 5;
    // const lastIndex = currentPage = recordsPerPage;
    // const firstIndex = lastIndex - recordsPerPage;
    // const records = data.slice (firstIndex ,lastIndex );
    // const npage=Math.ceil(data.length/recordsPerPage);
    // const number=[...Array(npage + 1)]

    // end
     const [selectedUser, setSelectedUser] = useState(null);
     const [showModal, setShowModal] = useState(false);



=======
import React from 'react'
import { AiFillEdit, AiFillDelete, AiFillEye, } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';

function ListeUtilisateur() {
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const response = await fetch("http://localhost:8000/users/get-user");
            if (!response.ok) {
                throw new Error(Error`fetching products: ${response.statusText}`);
            }
            const resultat = await response.json();
            setData(resultat);
        } catch (e) {
            console.error("Failed to fetch products:", e);
        }
    }
>>>>>>> c8b30c9f28730fa8bff069ebef0966556a57f032

    useEffect(() => {
        getData();
    }, []);

<<<<<<< HEAD
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
=======
    return (
        <div className="lister  m-auto ">
            <h6 className="ms-2 py-2">Liste des utilisateurs</h6>
            <div style={{ borderTop: "2px solid gray" }}></div>


            <table class="table">
>>>>>>> c8b30c9f28730fa8bff069ebef0966556a57f032
                <thead>
                    <tr style={{ backgroundColor: "#eee" }}>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Action</th>
<<<<<<< HEAD
=======

>>>>>>> c8b30c9f28730fa8bff069ebef0966556a57f032
                    </tr>
                </thead>
                <tbody>
                    {
<<<<<<< HEAD
                        data.length ? data.map((item) => (
                            <tr key={item.id}>
=======
                        
                        data.map((item) => (

                            <tr key={item}>
>>>>>>> c8b30c9f28730fa8bff069ebef0966556a57f032
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td className='gap-3'>
<<<<<<< HEAD
                                    
                                    <AiFillEye className='icone1'onClick={() => openModal(item)} />
                                    <AiFillEdit className='icone2' />
                                    <AiFillDelete onClick={() => handleDelete(item._id)} className='icone3' />
                                </td>
                            </tr>
                        )) : <tr><td colSpan="5">Pas de données</td></tr>
                    }
                </tbody>
            </table>
            {/* <nav>
            <ul className='Pagination'>
                <li className='page-item'>
                    <a href="#" className='page-Link' onClick={prePage}>Prev</a>
                </li>
                {
                  PiNumberSeven.map((n ,i)=>{
                    <li className= {`page-item ${currentPage=== n ? 'active':''}`} key={i}>
                        <a href="" className='page-item' onClick={changeCPage}>{n}</a>

                    </li>
                  })  
                }
                 <li className='page-item'>
                    <a href="#" className='page-Link' onClick={nextPage}>Next</a>
                </li>

            </ul>
            </nav> */}
           
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
=======
                                    <AiFillEye className='icone1' />
                                    <AiFillEdit className='icone2' />
                                    <AiFillDelete className='icone3' />
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>

        </div>
    )
}

export default ListeUtilisateur

>>>>>>> c8b30c9f28730fa8bff069ebef0966556a57f032
