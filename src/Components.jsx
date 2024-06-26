import React, { createContext, useState } from "react";
import CustomNavbar from "./Componentnav/CustomNavbar";
import { Outlet } from "react-router-dom";

export const Context = createContext();

export default function Components() {
  const [cart, setCartQuantity] = useState(0);

  const handleAddToCart = () => {
    setCartQuantity(cart + 1);
  };

  return (
    <Context.Provider value={{ cart, handleAddToCart }}>
      <div>
        <CustomNavbar />
        <Outlet />
      </div>
    </Context.Provider>
  );
}
