import { useEffect, useState } from "react";
import axios from 'axios';
import "../listeUtilisateur/listeUtilisateur.css";

export default function ListeUtilisateur() {
    const [listeUtili, setListeUtili] = useState([])

    useEffect(()=>{
        
    axios.get('https://tache-de-validition-nodejs-3.onrender.com/api/register/getting')
    .then(response => {
        console.log(response.data);
        setListeUtili(response.data)
        
    })
    .catch(error => {
        console.error('Une erreur est survenue :', error);
    });
    },[])


    const [recherche, setRecherche] = useState("");

    // Pour la pagination
    const [current, setCurrent] = useState(1);
    const count = 5;
    const [btnActive, setBtnActive] = useState(1);

    const filteredData = listeUtili.filter((item) => {
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

    return (
        <div className="container listeUtilisateur pb-5 my-4">
            <h6 className="ms-2 py-2">Liste des utilisateurs</h6>
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
                            <td>{item.mail}</td>
                            <td>{item.number}</td>
                            <td>
                                <button>Supp</button>
                                <button>Mod</button>
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
        </div>
    );
}
