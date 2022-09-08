import React from "react";
import "./AccordianItem.css";

function AccordianItem({ children, ...rest }) {
  return (
    <div className="accordian-item" {...rest}>
      {children}
    </div>
  );
}

export default AccordianItem;
