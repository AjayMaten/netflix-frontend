import React from "react";
import "../Header.css";

function NavBar({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default NavBar;
