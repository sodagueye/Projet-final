// Components.js
import React, { createContext, useState, useEffect } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();

export default function PanierProvider({ children }) {
  const [cartQuantity, setCartQuantity] = useState(0); // Compteur de la quantité totale dans le panier
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    setCartQuantity(updatedCart.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Produit ajouté avec succès !");
  };
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    setCartQuantity(savedCartItems.length);
  }, []);
  return (
    <Context.Provider value={{ cartQuantity, handleAddToCart, cartItems }}>
      {children}
    </Context.Provider>
  );
}
