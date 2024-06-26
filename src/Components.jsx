// Components.js
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();

export default function PanierProvider({ children }) {
  const [cartQuantity, setCartQuantity] = useState(0); // Compteur de la quantité totale dans le panier
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    if (typeof item === "object" && item !== null) {
      // Vérifier que item est un objet
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      setCartQuantity(cartQuantity + 1);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("Produit ajouté avec succès !");
    } else {
      console.error(
        "L'élément ajouté au panier n'est pas un objet valide :",
        item
      );
    }
  };
  // localStorage.clear()
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    setCartQuantity(savedCartItems.length);
  }, []);

  useEffect(() => {
    console.log("cartItems updated:", cartItems);
  }, [cartItems]);
  return (
    <Context.Provider value={{ cartQuantity, handleAddToCart, cartItems }}>
      {children}
    </Context.Provider>
  );
}
