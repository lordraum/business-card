import React from "react";

const Nav = ({ companyName }) => {
  return (
    <nav className="nav">
      <a href="index.html" className="nav__link">
        <figure className="nav__logo">
          <img src="src\assets\logo.png" alt="logo" className="nav__img" />
        </figure>
        <p className="nav__text">{companyName}</p>
      </a>
    </nav>
  );
};

export default Nav;
