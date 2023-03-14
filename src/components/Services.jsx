import React from "react";
import { useState } from "react";
import { AiFillDownSquare } from "react-icons/ai";

const Services = ({ serviceOne, serviceTwo, serviceThree }) => {
  const [isClicked, setIsClicked] = useState("off");

  const handleClick = () => {
    setIsClicked(isClicked === "on" ? "off" : "on");
  };

  return (
    <div className="services">
      <h2 className="services__title" onClick={handleClick}>
        Servicios
        <span
          className={`services__btn${
            isClicked === "on" ? " services__btn--rotate" : ""
          }`}
        >
          <AiFillDownSquare />
        </span>
      </h2>
      <div
        className={`services__box${
          isClicked === "on" ? " services__box--show" : ""
        }`}
      >
        <div className="services__row services__row--first-border">
          {serviceOne}
        </div>
        <div className="services__row">{serviceTwo}</div>
        <div className="services__row">{serviceThree}</div>
      </div>
    </div>
  );
};

//

export default Services;
