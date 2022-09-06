import React from "react";
import "./JumboHeading.css";

function JumboHeading({ children, ...rest }) {
  return (
    <h1 className="jumbo-heading" {...rest}>
      {children}
    </h1>
  );
}

export default JumboHeading;
