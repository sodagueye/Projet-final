import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Presentation() {
  const [plats, setPlats] = useState([]);
  async function getProducts() {
    const resultat = await axios.get(
      "https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits"
    );
    const response = await resultat.data;
    setPlats(response);
  }
  getProducts();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container py-3">
      <div className="row">
        {plats.map((item) => (
          <div key={item.id} className="col-lg-3">
            <Link to={`/detail/${item._id}`}>
            <div class="card border-0">
             <img src={item.image} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <p class="card-text">{item.price}</p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div></Link>
          
          </div>
        ))}
      </div>
    </div>
  );
}
