import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logoMaron from "../assets/logoMaron.png";
import { ToastContainer } from "react-toastify";
import "./inscrire.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { Contexte } from "./AuthProvider";

function Signup() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    number,
    setNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    submit,
  } = useContext(Contexte);

  return (
    <div>
      <div className="backCConnexion shadow d-flex justify-content-center mt-5">
        <form className="form" onSubmit={submit}>
          <img src={logoMaron} className="fs-2 logoMaron" alt="" />
          <div className="color m-0 fw-bold">
            <h3>Créez votre compte</h3>
          </div>
          <div className="auth d-flex justify-content-center align-items-center">
            <input
              className="nom"
              type="text"
              style={{ backgroundColor: "transparent" }}
              placeholder="Prénom"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="nom number"
              type="text"
              placeholder="Nom"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="auth d-flex justify-content-center align-items-center">
            <input
              className="nom"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="nom number"
              type="number"
              placeholder="Téléphone"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="auth d-flex justify-content-center align-items-center pass">
            <input
              className="nom"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="eyes oublie">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <input
              className="nom"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmer mot de passe"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eyes oublie">
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="creer liens fs-5 fw-bold mt-5 connect border-0 "
            >
              Créer un compte
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Signup;
