import React from "react";
import { UilLinkedin, UilGithubAlt } from "@iconscout/react-unicons";

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/diego-fernando-cuevas-frontend-developer/"
        className="home__social-icon"
        target="_blank"
      >
        <UilLinkedin />
      </a>
      <a
        href="https://github.com/Dfcuevas"
        className="home__social-icon"
        target="_blank"
      >
        <UilGithubAlt />
      </a>
    </div>
  );
};
