import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../Components";

export default function PlatSenegalais() {
  const [products, setProducts] = useState([]);
  const [filterCategory] = useState("cuisine d'ailleurs");
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useContext(Context);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/admin/liste-produits"
      );
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  return (
    <div className="container mt-5">
      <div className="row">
        {loading ? (
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
        ) : (
          <div className="row mt-4">
            {filteredProducts.map((item) => (
              <div key={item.id} className="col-lg-4 mt-5">
                <div class="card border-0 shadow">
                  <img
                    src={item.image}
                    class=""
                    style={{ height: "300px", objectFit: "cover" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <button
                      className="border-0 btn-add text-white rounded shadow p-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
