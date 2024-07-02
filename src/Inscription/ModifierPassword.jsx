import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import des icônes
import "./modifier.css";


function ModifierPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await axios.post(
        `https://tache-de-validition-nodejs-6.onrender.com/api/reset-password/${token}`,
        { password, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success(
        "mot de passe reinitialiser avec succes."
        );
         setTimeout(() =>{
           navigate("/connexion");
        }, 2000);
      // navigate("/msgsuccess");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du mot de passe:", error);
      toast.error("Erreur lors de la mise à jour du mot de passe");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="backCConnexion shadow d-flex justify-content-center align-items-center mt-5">
        <form onSubmit={handleSubmit} className="form align-items-center">
          <h2 className="text-center fw-bold fs-2 color">Récupération de compte</h2>
          <div className="inscript1">
            <div className="password-container my-2">
              <input
                className="nom email"
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="password-container my-2">
              <input
                className="nom email"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmer mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="submit"
              className="liens d-flex justify-content-center align-items-center creer fs-5 fw-bold mt-5 connect"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifierPassword;
