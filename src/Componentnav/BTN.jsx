import React from 'react';
import gl from '../assets/gl.png';
import jus4 from '../assets/jus4.jpg';
import './Btn.css';

const Btn = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap gap-3">
      <div className="card card-spacing card-container">
        <img src={gl} alt="Creme Glace" className="mx-auto d-block" style={{ width: "140px" }} />
        <div className="card-body">
          <h5 className="card-title">Creme Glace</h5>
          <p className="card-text">2000 FCFA</p>
          <button className="btn btn-primary card-button bg-danger " style={{ border: "#fff solid 1px" }}> Ajouter au panier </button>
        </div>
      </div>

  
      <div className="card card-spacing card-container">
        <img src={jus4} alt="Jus de Fruit" className="mx-auto d-block" style={{ width: "140px" }} />
        <div className="card-body">
          <h5 className="card-title">Jus de Fruit</h5>
          <p className="card-text">1000 FCFA</p>
          <button className="btn btn-primary card-button bg-danger" style={{ border: "#fff solid 1px" }}> Ajouter au panier </button>
        </div>
      </div>

      
    </div>
  );
};

export default Btn;
