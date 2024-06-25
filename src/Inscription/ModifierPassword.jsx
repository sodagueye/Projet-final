import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ModifierPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      await axios
        .post(
          "http://localhost:3030/reset-password",
          { password, confirmPassword },
          {
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newPassword: "newPassword123",
            }),
          }
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
      navigate("/msgsuccess");
    } catch (error) {
      alert("Erreur lors de la mise à jour du mot de passe");
    }
  };

  return (
    <div>
      <div className="backCConnexion shadow d-flex justify-content-center align-items-center mt-5">
        <form onSubmit={handleSubmit} className="form align-items-center">
          <h2 className="text-center fw-bold fs-2 color">
            Récupération de compte
          </h2>
          <div className="inscript1">
            <div className="password-container my-2">
              <input
                className="input email"
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="password-container my-2">
              <input
                className="input email"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmer mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="submit"
              className="liens d-flex justify-content-center align-items-center creer fs-5 fw-bold mt-5"
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
