import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../Components";

export default function PlatSenegalais() {
  const [products, setProducts] = useState([]);
  const [filterCategory] = useState("boissons");
  const [loading, setLoading] = useState(false);
  const { handleAddToCart } = useContext(Context);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits"
      );
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products;

  return (
<<<<<<< HEAD
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
=======
    <div className='container'>
      <div className="row justify-content-center">
        {filteredProducts.map((item) => (
          <div key={item.id} className="col-lg-4 mt-4 scale-image">
            <Link to={`/detail/${item._id}`}>
              <div className="card border-0 carte shadow">
                <img src={item.image} className="card-img-top" alt="..." />
              </div>
            </Link>
>>>>>>> 3cb5c14d1462b4dfb2b933a3f002448112b97a08
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
