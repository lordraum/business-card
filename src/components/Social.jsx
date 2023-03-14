import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="social">
      <a href="#">
        <FaInstagram className="social__icon" />
      </a>
      <a href="#">
        <FaGithub className="social__icon" />
      </a>
      <a href="#">
        <FaLinkedinIn className="social__icon" />
      </a>
      <a href="#">
        <FaFacebookF className="social__icon" />
      </a>
      <a href="#">
        <FaTwitter className="social__icon" />
      </a>
    </div>
  );
};

export default Social;
