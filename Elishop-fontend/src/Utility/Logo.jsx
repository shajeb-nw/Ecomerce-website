import React from "react";
import logo from "../assets/LogoIcon.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <img src={logo} alt="logo" width={35}/>
      <Link to={"/"} className="text-3xl font-bold text-color">EliShop</Link>
    </div>
  );
};

export default Logo;
