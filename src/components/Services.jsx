import React from "react";
import { useState } from "react";
import Service from "./Service";
import { AiFillDownSquare } from "react-icons/ai";

const Services = ({ companyServices }) => {
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
        {companyServices.map((x, i) => (
          <Service key={x.id} serviceName={x.name} />
        ))}
      </div>
    </div>
  );
};

//

export default Services;
