import { useEffect, useState } from "react";
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
  /* Change Background Header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //when the scroll is higher than 200 vh, ad the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Diego Cuevas
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <UilEstate className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <UilUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <UilFileAlt className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <UilBriefcase className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <UilScenery className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <UilMessage className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>

          <UilTimes className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <UilApps className="nav__icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
