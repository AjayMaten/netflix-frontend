import React from "react";
import JumboHeading from "../JumboHeading/JumboHeading";
import JumboSubHeading from "../JumboSubHeading/JumboSubHeading";
import JumboImage from "../JumboImage/JumboImage";
import "./JumboItem.css";

function JumboItem({ title, subTitle, alignment, imgSrc }) {
  return (
    <div className="jumbo-item">
      {alignment === true && (
        <>
          <div className="text-content">
            <JumboHeading>{title}</JumboHeading>
            <JumboSubHeading>{subTitle}</JumboSubHeading>
          </div>
          <div>
            <JumboImage src={imgSrc} />
          </div>
        </>
      )}
      {alignment === false && (
        <>
          <div>
            <JumboImage src={imgSrc} />
          </div>
          <div className="text-content">
            <JumboHeading>{title}</JumboHeading>
            <JumboSubHeading>{subTitle}</JumboSubHeading>
          </div>
        </>
      )}
    </div>
  );
}

export default JumboItem;
