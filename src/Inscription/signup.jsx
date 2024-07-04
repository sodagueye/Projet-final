
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logoMaron from "../assets/logoMaron.png";
import { ToastContainer, } from "react-toastify";
import "./inscrire.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import { Contexte } from "./AuthProvider";

function Signup() {

  const { firstName, setFirstName, lastName, setLastName, email, setEmail, number, setNumber, password, setPassword, confirmPassword, setConfirmPassword, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, submit } = useContext(Contexte)



  return (
    <div>
      <div className="back shadow d-flex justify-content-center">
        <form className="form" onSubmit={submit}>
          <img src={logoMaron} className="fs-2 logoMaron" alt="" />
          <div className="color m-0 fw-bold">
            <h3>Créez votre compte</h3>
          </div>
          <div className="auth">
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
          <div className="auth">
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
          <div className="auth pass">
            <input
              className="nom"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="eyes">
              {showPassword ? <FaEye /> : <FaEyeSlash />}

            </span>
            <input
              className="nom"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmation mot de passe"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eyes">
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="creer">
            <button
              type="submit"
              className="creer liens fs-5 fw-bold mt-3 connect"
            >
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup