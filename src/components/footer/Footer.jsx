import React from "react";
import { UilLinkedin, UilGithubAlt } from "@iconscout/react-unicons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Diego</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/diego-fernando-cuevas-frontend-developer/"
            className="footer__social-link"
            target="_blank"
          >
            <UilLinkedin />
          </a>
          <a
            href="https://github.com/Dfcuevas"
            className="footer__social-link"
            target="_blank"
          >
            <UilGithubAlt />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Diego Cuevas. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
