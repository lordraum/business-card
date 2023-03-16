import React from "react";
import bg from "../assets/img/bg.jpg";
import user from "../assets/img/user.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__banner">
        <img src={bg} alt="header background" className="header__bg-img" />

        <img src={user} alt="" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
