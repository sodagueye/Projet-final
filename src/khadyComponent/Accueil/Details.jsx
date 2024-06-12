import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        console.log(`Fetching product details for ID: ${id}`);
        const response = await fetch(
          `https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits/${id}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const resultat = await response.json();
        console.log("Product details:", resultat);
        setProduct(resultat);
      } catch (e) {
        console.error("Failed to fetch product details:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div style={{ color: "#502314" }}>
        <h2 className="fs-2 fw-bold">{product.name}</h2>
        <p>{product.description}</p>
        <p>Prix: {product.price} FCFA</p>
      </div>
      <div className="zoom-container">
        <img
          className="zoom-image"
          src={product.image}
          alt={product.name}
          style={{ width: "70%" }}
        />
      </div>
    
        <button
          style={{ backgroundColor: "#502314" }}
          className="btn text-white shadow "
        >
          Ajouter au Panier
        </button>
   
    </div>
  );
}
