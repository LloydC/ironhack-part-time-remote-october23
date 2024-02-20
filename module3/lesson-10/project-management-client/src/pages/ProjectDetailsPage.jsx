import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; // <== IMPORT 
import AddTask from "../components/AddTask"; 
import TaskCard from "../components/TaskCard";
 
const API_URL = "http://localhost:5005";        // <== ADD
 
function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  // Get the URL parameter `:projectId` 
  const { projectId } = useParams();            // <== ADD
  
  
  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getProject = () => {          //  <== ADD A NEW FUNCTION
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {                   // <== ADD AN EFFECT
    getProject();
  }, [] );
 
  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
 
    <AddTask refreshProject={getProject} projectId={projectId} />  

      {project &&
        project.tasks.map((task) => (
            <TaskCard key={task._id} {...task} /> 
        ))}
 
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      {/*    ADD    */}
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}
 
export default ProjectDetailsPage;