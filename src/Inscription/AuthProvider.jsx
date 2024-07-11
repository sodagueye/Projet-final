import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Contexte = createContext();
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //TEST
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

  // parie inscription
  async function submit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const res = await axios.post(
        "https://tache-de-validition-nodejs-7.onrender.com/api/register",
        {
          firstName,
          lastName,
          email,
          number,
          password,
          confirmPassword,
        }
      );

      if (res.status === 201) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumber("");
        setPassword("");
        setConfirmPassword("");
        toast.success("Inscription réussie.");

        setTimeout(() => {
          navigate("/connexion");
        }, 3000);
      } else {
        toast.error(res.data.errors[0].msg);
      }
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error(error);
    }
  }

  //TEST CONNEXION
  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://tache-de-validition-nodejs-7.onrender.com/api/auth",
        {
          email,
          password,
        }
      );
      if (res.status === 201) {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
        navigate("/");
      } else {
        console.log("Erreur lors de la connexion :", res.data.errors[0].msg);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  //TEST DECONNEXION
  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // fin
  console.log(user);
  return (
    <div>
      <Contexte.Provider
        value={{
          firstName,
          setFirstName,
          lastName,
          setLastName,
          email,
          setEmail,
          number,
          user,
          setUser,
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
          login,
          //TEST
          logout,
        }}
      >
        {children}
      </Contexte.Provider>
    </div>
  );
}
export default AuthProvider;
