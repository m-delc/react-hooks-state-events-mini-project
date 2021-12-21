import React from "react";
import Task from "./Task"

// destructure TASKS into {text} and {category} and send to <Task />

function TaskList({ tasks, handleDeleteTask }) {

  // console.log({ tasks })

  return (
    <div className="tasks">
     {
       tasks.map((task) => { 
         return ( <Task key={task.text} 
                        junk={task.text} 
                        category={task.category}
                        handleDeleteTask={handleDeleteTask} /> )
       })
     } 
    </div>
  );
}

export default TaskList;
