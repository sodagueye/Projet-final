import React from "react";
import "./Presentation.css";
import asset16 from "../Accueil/asset16.jpeg";
import asset18 from "../Accueil/asset18.jpeg";
import asset19 from "../Accueil/asset19.jpeg";
import asset20 from "../Accueil/asset20.jpeg";
import asset21 from "../Accueil/asset21.jpeg";
import asset17 from "../Accueil/asset17.jpeg";
const tab = [
  {
    img: asset16,
  },
  {
    img: asset17,
  },
  {
    img: asset18,
  },
  {
    img: asset19,
  },
  {
    img: asset20,
  },
  {
    img: asset21,
  },
];
export default function Portfolio() {
  return (
    <div className="pt-5">
      <h1 className="mt-5 portfolio">Portfolio Keur Yaay Soda</h1>
      <div className="row mt-5">
        {tab.map((item) => (
          <div key={item.id} className="col-lg-4 mt-4 scale-image">
            <div className="card border-0 carte shadow">
              <img src={item.img} className="card-img-top " alt="..." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
