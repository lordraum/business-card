import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__banner">
        <img
          src="/src/assets/bg.jpg"
          alt="header background"
          className="header__bg-img"
        />

        <img src="/src/assets/user.png" alt="" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
