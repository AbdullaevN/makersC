import React from "react";
import "./assets/Navbar.css";
import logo from "../../images/navlogo.svg";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="container h-100">
        <div className="nav h-100">
          <div className="nav-left">
            <img src={logo} alt="logo" />
            <span>Documentation</span>
          </div>
          <div className="nav-right">
            <ul className="nav-list">
              <li className="nav-item">Главная</li>
              <li className="nav-item">Документация</li>
              <li className="nav-item">Добавить</li>
              <li className="nav-item">
                <input type="text" placeholder="Поиск..." />
              </li>
              <li className="nav-item">GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
