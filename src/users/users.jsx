import { useEffect, useState } from "react";
import axios from 'axios';
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../users/users.css";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [recherche, setRecherche] = useState("");
    // Pour la pagination
    const [current, setCurrent] = useState(1);
    const [btnActive, setBtnActive] = useState(1);

    useEffect(() => {
        axios.get("https://tache-de-validition-nodejs-3.onrender.com/api/register/getting")
            .then(response => {
                console.log(response);
                if (response.data && response.data.utilisateur) {
                    setUsers(response.data.utilisateur);
                } else {
                    setError("Unexpected response structure");
                }
            })
            .catch(err => {
                console.error(err);
                setError("Error fetching data: " + err.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
    //Pour la pagination
    const count = 8;

    const filteredData = users.filter((item) => {
        const rechercheLower = recherche.toLowerCase();
        return item.lastName.toLowerCase().includes(rechercheLower);
    });

    const last = current * count;
    const first = last - count;
    const values = filteredData.slice(first, last);

    const buttonCount = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / count); i++) {
        buttonCount.push(i);
    }

    const handleClick = (i) => {
        setCurrent(i);
        setBtnActive(i);
    };

    const handleDelete = async (id) => {
        try {

            const response = await axios.delete(`https://tache-de-validition-nodejs-3.onrender.com/api/register/delete/${id}`);
            if (response.status === 200) {
                setUsers(users.filter(item => item._id !== id));
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
        <div className="container users pb-5 my-4">
            <h3 className="text-start ms-2 py-2 ">{users.length} Utilisateurs</h3>
            <div style={{ borderTop: "2px solid gray" }}></div>
            <div className="d-flex justify-content-end">
                <div className="d-flex py-2">
                    <p>Recherche:</p>
                    <input
                        type="text"
                        className="rounded"
                        style={{ height: 30 }}
                        onChange={(e) => setRecherche(e.target.value)}
                    />
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr style={{ backgroundColor: "#eee" }}>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {values.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td className='gap-3'>
                                <AiFillEye onClick={() => openModal(item)} className="icons"/>
                                <AiFillDelete onClick={() => handleDelete(item._id)}  className="icons"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end boutons">
                {buttonCount.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleClick(btn)}
                        className={btn === btnActive ? "active" : ""}
                    >
                        {btn}
                    </button>
                ))}
            </div>
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
