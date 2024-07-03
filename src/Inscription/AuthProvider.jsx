import React from 'react'
import { createContext, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate ,useNavigate } from 'react-router-dom';

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


  // parie inscription
  async function submit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const res = await axios.post(
        "https://tache-de-validition-nodejs-6.onrender.com/api/register",
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
        toast.success(
          "Inscription réussie."
        );
        setTimeout(() => {
          navigate("/connexion");
        }, 2000);

      } else {
        toast.error(res.data.errors[0].msg);
      }
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error(error);
    }
  }
  // fin

  // partie connexion
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
          return;
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
  // fin
  return (
    <div>
      <Contexte.Provider value={{
        firstName, setFirstName, lastName, setLastName,
        email, setEmail, number, setNumber, password, setPassword, confirmPassword, setConfirmPassword, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, submit, login
      }}>
        {children}
     

      </Contexte.Provider>
    </div>
  )
}
export default AuthProvider