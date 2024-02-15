import { useState } from "react";

function AddProjectPage(){
    const [name, setName] = useState("");
    const [year, setYear] = useState(0);
    const [technologies, setTechnologies] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add the data to the db :)
    }

return (
    <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={(event)=> setName(event.target.value)} type="text"  />
        <input name="year" value={year} onChange={(event)=> setYear(Number(event.target.value))} type="number" />
        <input name="technologies" value={technologies} onChange={(event) => setTechnologies(event.target.value)} type="text" />
        <textarea name="description" rows="4" cols="50" value={description} onChange={(event) => setDescription(event.target.value)} />
        <button type="submit">Add New Project</button>
    </form>
);
}

export default AddProjectPage;