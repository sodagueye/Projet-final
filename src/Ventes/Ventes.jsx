import orangeMoney from "../Footer-img/orange-money.png";
import weave from "../Footer-img/weave.png";
import "../Ventes/Ventes.css";
import { useState } from "react";

export default function Ventes() {
    const tabHistoriqueVente = [
        {
            date: '12/03/2019',
            nbArticle: 2,
            montant: "12.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '02/06/2024',
            nbArticle: 1,
            montant: "20.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: '12/12/2024',
            nbArticle: 6,
            montant: "39.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        },
        {
            date: '12/05/2022',
            nbArticle: 4,
            montant: "13.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '02/12/2021',
            nbArticle: 11,
            montant: "25.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: '01/11/2020',
            nbArticle: 9,
            montant: "40.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        },
        {
            date: '12/07/2024',
            nbArticle: 4,
            montant: "10.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '01/04/2024',
            nbArticle: 1,
            montant: "30.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: '12/08/2024',
            nbArticle: 3,
            montant: "37.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        },
        {
            date: '12/03/2023',
            nbArticle: 2,
            montant: "12.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '02/06/2024',
            nbArticle: 1,
            montant: "20.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: '12/11/2024',
            nbArticle: 9,
            montant: "39.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        },
        {
            date: '12/03/2023',
            nbArticle: 2,
            montant: "12.000fr",
            etat: "En cours",
            paiment: orangeMoney,
        },
        {
            date: '02/06/2024',
            nbArticle: 1,
            montant: "20.000fr",
            etat: "En attente",
            paiment: weave,
        },
        {
            date: '10/12/2020',
            nbArticle: 10,
            montant: "39.000fr",
            etat: "terminée",
            paiment: orangeMoney,
        }
    ];
   
    const [recherche, setRecherche] = useState("");

    // Pour la pagination
    const [current, setCurrent] = useState(1);
    const count = 5;
    const [btnActive, setBtnActive] = useState(1);

    const filteredData = tabHistoriqueVente.filter((item) => {
        const rechercheLower = recherche.toLowerCase();
        return item.date.toLowerCase().includes(rechercheLower);
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
        <div className="container vente pb-5 my-4">
            <h6 className="text-start ms-2 py-2">Historique des ventes</h6>
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
                        <th scope="col">Date</th>
                        <th scope="col">Prix Article</th>
                        <th scope="col">Nombre d'article</th>
                        <th scope="col">Total</th>
                        <th scope="col">Paiment</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {values.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.nbArticle}</td>
                            <td>{item.montant}</td>
                            <td>
                                <img
                                    src={item.paiment}
                                    alt="mode de paiment"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 100,
                                    }}
                                />
                            </td>
                            <td>{item.livraison}</td>
                            <td>
                                <i className="bi bi-eye-fill"></i>
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
