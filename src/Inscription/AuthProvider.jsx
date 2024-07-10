import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Contexte = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    if (user) {
      setCart(JSON.parse(localStorage.getItem("cartItems")) || []);
    }
  }, [user]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth", { email, password });
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

  const logout = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("cartItems"); // Vider le panier
    setUser(null);
    setCart([]);
    navigate("/");
  };

  return (
    <Contexte.Provider
      value={{
        user,
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        login,
        logout,
        cart,
        setCart
      }}
    >
      {children}
    </Contexte.Provider>
  );
};

export default AuthProvider;
