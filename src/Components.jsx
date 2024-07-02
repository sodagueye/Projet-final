// Components.js
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();

export default function PanierProvider({ children }) {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    if (typeof item === "object" && item !== null) {
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

//  localStorage.clear()
const totalPrix = cartItems.reduce((total, item) => {
  return total + (item.price || 0);
}, 0);
const handleClick = () => {
  if (totalPrix === 0) {
    toast.error("Veuillez choisir des plats");
  } else {
    toast.success("Commande validée avec succès");
  }
};

  return (
    <Context.Provider
      value={{ cartQuantity, totalPrix,handleClick, handleAddToCart, cartItems, setCartItems , setCartQuantity}}
    >
      {children}
    </Context.Provider>
  );
}
