import React from "react";
import MenuBtn from "./MenuBtn";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
export default function MenuLayout() {
  return (
    <div>
      <MenuBtn />
      <Outlet />
    </div>
  );
}
