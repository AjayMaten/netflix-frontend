import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        className="logo"
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        alt="Netflix-logo"
      />
    </Link>
  );
}

export default Logo;
