import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";
 
const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: true
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: true
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: true
  },
];
 
function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(3)

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks]; //Spread operator

    // const updatedTasks = tasksCopy.map(task => {
    //     if(task._id === id){
    //         task.isDone = task.isDone ? false : true;

    //         if (task.isDone) setTasksCompleted(tasksCompleted + 1);
    //         else if (!task.isDone) setTasksCompleted(tasksCompleted - 1); 
    //         return task;
    //     }
    //     return task;
    // })
    // setTasks(updatedTasks)
      
    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,
      if (task._id === id) {
        task.isDone = task.isDone ? false : true; // --> task.isDone = !task.isDone
   
        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);        
      }
   
      setTasks(tasksCopy);
    }); 
  }
  // 1. update toggleTask so that it works
  // 2. Pass it as a prop to Task component
 
  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />
      
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTask={toggleTaskDone} /> )}
      </div>
    </div>
  );
}
 
export default ToDoList;