import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects-data.json";
import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context";
import { LanguageContext } from "../context/language.context";

import englishContent from '../en-US.json';
import frenchContent from '../fr-FR.json';

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const { theme } = useContext(ThemeContext); 
  const {language } = useContext(LanguageContext)
  
  const generateContent = (activeLanguage) => {
    if(activeLanguage === "en-US"){
      return englishContent.projectPageTitle
    }
    else if (activeLanguage === "fr-FR") {
      return frenchContent.projectPageTitle;
    }
    else if (activeLanguage === "es-SP"){
      return "Projectos";
    }
  }
  return (
    <div className={`ProjectsPage ${theme}`}>
      <h1>{generateContent(language)}</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;