import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (work) => work.category.toLowerCase() === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <div>
      <div className="work__container container grid">
        {projects.map((item) => (
          <WorksItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
