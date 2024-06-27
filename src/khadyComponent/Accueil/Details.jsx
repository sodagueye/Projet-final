import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Components";
// import { Footer } from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart} = useContext(Context);
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
    <div>
      <div className="container p-5 mt-5 d-flex justify-content-center align-items-center">
        <div style={{ color: "#502314" }}>
          <h2 className=" fw-bold">{product.name}</h2>
          <p>{product.description}</p>
          <p>Prix: {product.price} FCFA</p>
          <div>
            <button
              style={{ backgroundColor: " #91725d" }}
              className="btn w-100 text-white shadow "
              onClick={()=>handleAddToCart(product.id)}
            >
              Ajouter au Panier
            </button>
          </div>
        </div>
        <div className="zoom-container">
          <img
            className="zoom-image"
            src={product.image}
            alt={product.name}
            style={{ width: "50%" }}
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
        <ToastContainer/>
        </div>
      </div>
    </div>
  );
}
