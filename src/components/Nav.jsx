import React from "react";
import logo from "../assets/img/logo.png";

const Nav = ({ companyName }) => {
  return (
    <nav className="nav">
      <a href="index.html" className="nav__link">
        <figure className="nav__logo">
          <img src={logo} alt="logo" className="nav__img" />
        </figure>
        <p className="nav__text">{companyName}</p>
      </a>
    </nav>
  );
};

export default Nav;
