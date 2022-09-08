import React from "react";
import "./FooterLink.css";

function Footerlink({ children, ...rest }) {
  return (
    <a href="#" {...rest} className="footer-link">
      {children}
    </a>
  );
}

export default Footerlink;
