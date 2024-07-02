
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoMaron from "../assets/logoMaron.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

function Connexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://tache-de-validition-nodejs-6.onrender.com/api/auth",
        {
          email,
          password,
        }
      );

      if (res.status === 201) {
        setEmail("");
        setPassword("");
        toast.success("Connexion réussie.");

        // Vérification si l'utilisateur est administrateur
        if (email === "admin1@gmail.com") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(res.data.errors[0].msg);
      }
    } catch (error) {
      toast.error("Erreur lors de la connexion");
      console.error(error);
    }
  }

  return (
    <div>
      <div className="backCConnexion shadow mt-5">
        <form className="form align-items-center" onSubmit={login}>
          <img src={logoMaron} className="fs-2 logoMaron" alt="" />
          <h2 className="text-center fw-bold fs-2 color">Connecter</h2>

          <div className="inscript1">
            <input
              className="nom email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="d-flex postis">
            <input
              className="nom email"
              type="password"
              // {showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <span onClick={() => setShowPassword(!showPassword)} className="">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span> */}
            </div>
          </div>

          <div className="text-center my-4">
            <Link to="/reinitialiser" className="oublie">
              Mot de passe oublié
            </Link>
          </div>

          <div className="creer">
            <button
              type="submit"
              className="liens align-items-center connect fs-5 fw-bold"
            >
              Se connecter
            </button>
          </div>

          <p className="text-center mt-3">Vous n'avez pas de compte ?</p>

          <div className="text-center my-4">
            <Link to="/inscription" className="oublie">
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Connexion;

