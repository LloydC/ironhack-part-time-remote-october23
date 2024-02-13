import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
// import projectsData from "./../projects-data.json";
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
 
  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);
 
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <ProjectCard key={project.id} project={project} />
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;