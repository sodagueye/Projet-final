import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";
export default function Card() {
  const [plat, setPlat] = useState("");
  
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text">Utilisateurs</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                accusantium tenetur ipsum
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-lg-4  p-1">
          <div class="card shadow carte p-2 ">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                accusantium tenetur ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4  p-1">
          <div class="card shadow carte p-2">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                accusantium tenetur ipsum
=======
        <div className="col-lg-3">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
>>>>>>> 274b1ed1e7c6f59d954e1455fc15beb29cee896b
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
