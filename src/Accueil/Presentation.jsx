import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Presentation() {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getProducts() {
    const resultat = await axios.get(
      "https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits"
    );
    const response = await resultat.data;
    setPlats(response);
    setLoading(false);
  }
  getProducts();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container p-5">
      
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
          plats.map((item) => (
            <div key={item.id} className="col-lg-3">
              <Link to={`/detail/${item._id}`}>
                <div className="card border-0">
                  <img
                    src={`https://tache-de-validition-nodejs-6.onrender.com/${item.image}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
