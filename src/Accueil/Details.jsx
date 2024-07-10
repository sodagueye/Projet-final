import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Components";
import { ToastContainer } from "react-toastify";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart } = useContext(Context);
  useEffect(() => {
    async function fetchProduct() {
      try {
        console.log(`Fetching product details for ID: ${id}`);
        const response = await fetch(
          `"http://localhost:8080/admin/liste-produits/${id}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const resultat = await response.json();
        setProduct(resultat);
        setLoading(false);
      } catch (e) {
        console.error("Failed to fetch product details:", e);
        setError(e.message);
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>
          <div>
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
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
                  onClick={() => handleAddToCart(product)}
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
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
