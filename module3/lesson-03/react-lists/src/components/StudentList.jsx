import { v4 as uuidv4 } from 'uuid';

function StudentList() {
    const students = ['Marc', 'Lucy', 'Anna'];
   
    return (
      <div className="list">
        <h2>Student List</h2>
        
        { students.map(name => {
          return <p key={uuidv4()}> { name } </p>
        })}
        
      </div>
    );
  }
   
  export default StudentList;