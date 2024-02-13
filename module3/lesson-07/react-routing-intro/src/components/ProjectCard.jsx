function ProjectCard({ project }){
    return(
        <div className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
    );
}

export default ProjectCard