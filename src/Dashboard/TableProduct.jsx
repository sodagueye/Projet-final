import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TableProduct() {
  const [data, setData] = useState([]);
  const tableStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "white",
    width: "100%",
  };
  async function connect() {
    try {
      const response = await axios.get("http://localhost:4000/recup");
      const resultat = await response.data;
      console.log(resultat);
      setData(resultat);
    } catch (e) {
      console.log(e);
    }
  }
 
  useEffect(() => {
    connect();
    // edit()
  }, []);

  return (
    <div className="row mt-5 p-3">
      <div className="d-flex align-items-center justify-content-between">
        <h5>Produit</h5>
        <button className="btn btn-success">Ajouter</button>
      </div>
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
                <button className="btn btn-danger">Supprimer</button>
               <button className="btn btn-warning text-white"><Link to={`/update/${item._id}`}>Update</Link></button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
