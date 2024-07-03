import React, { useContext } from "react";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";

import avatar from "./avatar.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../Components";

import logo from "../Dashboard/logoMaron.png";
export default function Navbar() {
  const { cartItems, cartQuantity } = useContext(Context);
  const handleTest = () => {
    console.log(cartItems);
    if (cartItems && cartItems.length > 0) {
      cartItems.map((t) => toast.success(`Commande de ${t.name} ID ${t._id}`));
    } else {
      toast.info("Your cart is empty.");
    }
  };

  return (
    <div className="container-fluid p-0">
      <nav class="navbar navbar-expand-lg bg-white shadow ">
        <div class="container-fluid">
          <div className="col-12 col-md-2">
            <a href="">
            
              <img src={logo} alt="logo" className="img-fluid" />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item send">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="fs-5">
                    <IoMdMail />
                  </span>
                  <div className="texte text-white d-flex justify-content-center align-items-center">
                    7
                  </div>
                </a>
              </li>
              <li className="nav-item fabelle">
                <span onClick={handleTest} className="fs-5">
                  <FaBell />
                </span>
                <div className="belle text-white d-flex justify-content-center align-items-center">
                  {cartQuantity}
                </div>
              </li>
              <li className="nav-item">
                <span className="ms-4 name">Faabii</span>
                <img className="avatar" src={avatar} alt="avatar" />
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer />
      </nav>
    </div>
  );
}
