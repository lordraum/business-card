import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Info = ({ name, lastName, roleOne, roleTwo, waLink, phone, mail }) => {
  return (
    <article className="info">
      <h1 className="info__name">
        {name}
        <span className="info__lastname">{` ${lastName}`}</span>
      </h1>
      <h2 className="info__role">{roleOne}</h2>
      <h2 className="info__role">{roleTwo}</h2>
      <div className="info__contact-container">
        <a href={`tel:${phone}`}>
          <div className="info__contact">
            <FiSmartphone className="info__icon" />
            <span className="info__contact-name">Llamar</span>
          </div>
        </a>

        <a href={waLink}>
          <div className="info__contact">
            <AiOutlineWhatsApp className="info__icon" />
            <span className="info__contact-name">Whatsapp</span>
          </div>
        </a>

        <a href={`mailto:${mail}`}>
          <div className="info__contact">
            <AiOutlineMail className="info__icon" />
            <span className="info__contact-name">E-mail</span>
          </div>
        </a>
      </div>
    </article>
  );
};

export default Info;
