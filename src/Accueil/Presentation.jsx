import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

export default function Presentation() {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getProducts() {
    const resultat = await axios.get(
      "https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits"
    );
    const response = await resultat.data;
    console.log(response);
    setPlats(response);
    setLoading(false);
  }
  getProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(plats);
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
            <div key={item.id} className="col-lg-4 mt-4 scale-image">
              <Link to={`/detail/${item._id}`}>
                <div className="card border-0 carte shadow">
                  <img src={item.image} className="card-img-top " alt="..." />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <div>
          <Portfolio />
        </div>
        <h2 style={{marginTop:"60px", color:"#91725d" , fontFamily:"sans-serif",fontStyle:"normal" }}>
          Temoignages de Quelques Clients</h2>
      </div>
    </div>
  );
}
