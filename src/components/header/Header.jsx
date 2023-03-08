import React from "react";
import "./header.css";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcase,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Diego
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <UilEstate className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <UilUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <UilFileAlt className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <UilBriefcase className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <UilScenery className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <UilMessage className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>

          <UilTimes className="nav__close" />
        </div>
        <div className="nav__toggle">
          <UilApps className="nav__icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
