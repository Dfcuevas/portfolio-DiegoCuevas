import React from "react";

const WorksItems = ({ item }) => {
  
  return (
    <div className="work__card">
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <h4 className="work__title">Technologies and tools</h4>
      <ul className="work__list">
        {item.tools.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>

      <a href={item.link} className="work__button" target="_blank">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
