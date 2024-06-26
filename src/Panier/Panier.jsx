import React, { useContext } from "react";
import { Context } from "../Components";

export default function Panier() {
  const { cartItems } = useContext(Context);
  console.log(cartItems);
  return <div></div>;
}
