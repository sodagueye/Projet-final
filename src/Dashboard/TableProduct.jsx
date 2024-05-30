import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TableProduct() {
  const [data, setData] = useState([]);
  const tableStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "white",
    width: "100%",
  };
  // async function handleAdd() {
  //   try {
  //     const test = await axios.post("http://localhost:4000/ajout");
  //     const teste = await test.data;
  //     setData(teste);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  useEffect(() => {
    async function connect() {
      try {
        const response = await fetch("http://localhost:4000/recup");
        const resultat = await response.json();
        console.log(resultat);
        setData(resultat);
      } catch (e) {
        console.log(e);
      }
    }
    connect();
  });
  return (
    <div className="row mt-5 p-3">
      <h5>Produit</h5>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Prix</th>
            <th scope="col">Description</th>
            <th scope="col">ID</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item.title}</td> <td>{item.price}</td>
              <td>
                <img src={item.description} alt="" />
              </td>
              <td>{item.id}</td>
              <td>
                <button className="btn btn-success">Ajouter</button>
                <button className="btn btn-danger">Supprimer</button>
                <button className="btn btn-warning">Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
