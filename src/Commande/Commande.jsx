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
      <h6 className="text-start ms-2 py-2">Historique des Commandes</h6>
      <div style={{ borderTop: "2px solid gray" }}></div>
      <div className="d-flex justify-content-end">
        <div className="d-flex py-2">
          <input
            placeholder="Search..."
            type="text"
            className="rounded"
            style={{ height: 30 }}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
      </div>

      {/* <table className="table mt-4 shadow">
        <thead>
          <tr style={{ backgroundColor: "#eee" }}>
            <th scope="col">ID</th>
            <th scope="col">Produits</th>
            <th scope="col">Montant</th>
          </tr>
        </thead>
        <tbody>
          {values.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="table shadow table-hover mt-5 ">
        <thead>
          <tr>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              ID
            </th>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Produits
            </th>
            <th
              style={{ backgroundColor: "#91725d", color: "white" }}
              scope="col"
            >
              Prix
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
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
