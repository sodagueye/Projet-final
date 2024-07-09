import React, { useContext, useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";

import avatar from "./avatar.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../Components";
import { Contexte } from "../Inscription/AuthProvider";
import logo from "../Dashboard/logoMaron.png";
import axios from "axios";
export default function Navbar() {
  const { cartItems, cartQuantity } = useContext(Context);
  const [notification, setNotification] = useState(false);
  const { firstName, lastName, email, setTab, tab } = useContext(Contexte);
  console.log(tab);

  useEffect(() => {
    async function Test() {
      try {
        const res = await axios.get(
          "https://tache-de-validition-nodejs-6.onrender.com/api/register/getting"
        );
        const test = await res.data();
        console.log(test);
      } catch {
        console.log("error");
      }
    }
    Test();
  }, []);
  const handleNotification = () => {
    console.log(cartItems);
    setNotification(true);
  };

  return (
    <div className="container-fluid p-0 Navbar">
      <nav class="navbar navbar-expand-lg bg-white shadow">
        <div class="container-fluid">
          <div className="col-12 col-md-2">
            <img src={logo} alt="logo" style={{ width: "80px" }} />
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
              <li className="nav-item send me-4">
                <span className="fs-5 ">
                  <IoMdMail />
                </span>
                <div className="texte text-white d-flex justify-content-center align-items-center">
                  7
                </div>
              </li>
              <li className="nav-item fabelle me-4">
                <span onClick={handleNotification} className="fs-5 ">
                  <FaBell />
                </span>
                <div
                  className={`toast position-absolute top-0 end-0 m-3 ${
                    notification ? "show" : "hide"
                  }`}
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  style={{ minWidth: "250px" }}
                >
                  <div class="toast-header">
                    <strong class="me-auto">Commande</strong>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="toast-body">
                    {cartItems.map((t) => `Commande de ${t.name} ID ${t._id}`)}
                  </div>
                </div>
                <div className="belle text-white d-flex justify-content-center align-items-center">
                  {cartQuantity}
                </div>
              </li>
              <li className="nav-item">
                <span className="ms-4 name fs-5">{email}</span>
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
