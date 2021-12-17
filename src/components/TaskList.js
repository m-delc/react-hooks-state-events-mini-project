import React from "react";
import Task from "./Task"

// destructure TASKS into {text} and {category} and send to <Task />

function TaskList({ TASKS }) {

  // console.log({ TASKS })

  return (
    <div className="tasks">
     {
       TASKS.map((task) => { 
         return ( <Task key={task.id} 
                        tasktest={task.text} 
                        category={task.category} /> )
       })

     } 
    </div>
  );
}

export default TaskList;
