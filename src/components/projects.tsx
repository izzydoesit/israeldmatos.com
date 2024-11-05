import * as React from "react";
import { projects } from "./projects.module.css";

const Projects: React.FC = () => {
  return (
    <section className={projects}>
      <div>
        <p>This is my Projects section;</p>
      </div>
    </section>
  );
};

export default Projects;
