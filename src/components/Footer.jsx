import React from "react";
import Social from "./Social";
import { AiOutlineLink } from "react-icons/ai";

const Footer = ({ companyWeb, socialData }) => {
  return (
    <footer className="footer">
      <Social socialData={socialData} />
      <div className="footer__web">
        <a href="#">
          <AiOutlineLink className="web__icon" />
        </a>
        <a className="footer__link" href={`https://${companyWeb}`}>
          {companyWeb}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
