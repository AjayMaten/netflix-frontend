import React from "react";
import "./FeatureTitle.css";

function FeatureTitle({ children, ...rest }) {
  return <h1 {...rest}>{children}</h1>;
}

export default FeatureTitle;
