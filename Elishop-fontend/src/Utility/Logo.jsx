import React from "react";
import logo from "../assets/LogoIcon.png";
const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <img src={logo} alt="logo" width={35}/>
      <h1 className="text-3xl font-bold text-color">Easy-Life</h1>
    </div>
  );
};

export default Logo;
