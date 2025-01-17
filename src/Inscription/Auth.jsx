import React, { useContext } from "react";
import { Contexte } from "./AuthProvider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import logoMaron from "../assets/logoMaron.png";

function Auth() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    login,
  } = useContext(Contexte);

  return (
    <div className="backCConnexion shadow mt-5">
      <form className="form align-items-center" onSubmit={login}>
        <div className=" d-flex justify-content-center align-items-center">
          <img src={logoMaron} className="logoMaron w-25" alt="" />
        </div>
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
          <div className="d-flex postis align-items-center">
            <input
              className="nom email"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="eyes oublie"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <div className="text-end mb-3">
          <Link to="/reinitialiser" className="oublie">
            Mot de passe oublié ?
          </Link>
        </div>

        <div className="creer d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="liens align-items-center connect fs-5 fw-bold border-0"
          >
            Se connecter
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-1 py-3">
          <p className="">Vous n'avez pas de compte ?</p>
          <Link to="/inscription" className="oublie">
            s'inscrire
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Auth;
