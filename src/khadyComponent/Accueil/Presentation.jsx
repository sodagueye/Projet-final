import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Presentation.css"

function Presentation() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch("http://localhost:4000/recup");
      if (!response.ok) {
        throw new Error(`Error fetching products: ${response.statusText}`);
      }
      const resultat = await response.json();
      setData(resultat);
    } catch (e) {
      console.error("Failed to fetch products:", e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <h1 className="text-center">Home</h1> */}
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-lg-3">
              <div className="card border-0 shadow" key={item._id}>
                <img src={item.description} className="teste" alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <Link to={`/detail/${item._id}`}>
                  <button className="btn btn-danger">Voir</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Presentation;
