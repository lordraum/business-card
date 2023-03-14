import React from "react";
import Social from "./Social";
import { AiOutlineLink } from "react-icons/ai";

const Footer = ({ companyWeb }) => {
  return (
    <footer className="footer">
      <Social />
      <div className="footer__web">
        <a href="#">
          <AiOutlineLink className="web__icon" />
        </a>
        <a className="footer__link" href="#">
          {companyWeb}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
