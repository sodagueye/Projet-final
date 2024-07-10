import orangeMoney from "../Footer-img/orange-money.png";
import weave from "../Footer-img/weave.png";
import "../Commande/commande.css";
import { useContext, useState } from "react";
import { Context } from "../Components";
export default function Commande() {
  const { cartItems } = useContext(Context);
  console.log(cartItems);
  const [recherche, setRecherche] = useState("");

  // Pour la pagination
  const [current, setCurrent] = useState(1);
  const count = 5;
  const [btnActive, setBtnActive] = useState(1);

  const filteredData = cartItems.filter((item) => {
    const rechercheLower = recherche.toLowerCase();
    return item.name.toLowerCase().includes(rechercheLower);
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
                        <th scope="col">Nombre d'article</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Paiment</th>
                        <th scope="col">Livraison</th>
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
