import React from "react";
import "./HeaderWrapper.css";

function HeaderWrapper({ children, ...rest }) {
  return (
    <div className="headerWrapper" {...rest}>
      {children}
    </div>
  );
}

export default HeaderWrapper;
