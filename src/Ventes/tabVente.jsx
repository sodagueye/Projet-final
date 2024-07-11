import { useState } from "react";
import orangeMoney from "../Footer-img/orange-money.png";
import weave from "../Footer-img/weave.png";
import "../Ventes/Ventes.css";
import { MdDelete , MdMode } from "react-icons/md";

export function ListeVente() {
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
            <table className="table">
                <thead>
                    <tr style={{ backgroundColor: "#eee" }}>
                        <th scope="col">Date</th>
                        <th scope="col">Nom du Produit</th>
                        <th scope="col">Nombre d'article</th>
                        <th scope="col">Prix du produit</th>
                        <th scope="col">Mode de paiment</th>
                        <th scope="col"  className="d-flex gap-2">
                            <button><MdMode/></button>
                            <button><MdDelete/></button>
                        </th>
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
