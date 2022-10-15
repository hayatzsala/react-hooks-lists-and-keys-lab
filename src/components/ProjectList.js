import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(
          x=><ProjectItem key={x.id} name={x.name} about={x.about} technologies={x.technologies}/>)}
        {/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
