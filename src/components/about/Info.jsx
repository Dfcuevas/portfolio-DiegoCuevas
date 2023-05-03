import React from "react";
import "./about.css";
  
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <box-icon name="award" className="about__icon"></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Years Working</span>
      </div>

      <div className="about__box">
        <box-icon name="briefcase-alt" className="about__icon"></box-icon>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6 + Projects</span>
      </div>
    </div>
  );
};

export default Info;
