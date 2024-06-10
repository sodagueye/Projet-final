import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Products() {
  const [product, setProduct] = useState([]);
  async function getProducts() {
    try {
      const response = await axios.get("http://localhost:4000/recup");
      const resultat = await response.data;
      setProduct(resultat);
    } catch {
      console.log("Erreur lors de la recupération");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((produit) => (
            <tr>
              <td>{produit.title}</td>
              <td>{produit.price}</td>
              <td>
                <img src={produit.description} alt="" />
              </td>
              <td>
                <button className="btn btn-danger">Supprimer</button>
                <button className="btn btn-warning">Modifier</button>
                <button className="btn btn-secondary">Archiver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
