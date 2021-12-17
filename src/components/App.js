import React from ''"react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {v4 as uuidv4} from 'uuid'

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// I assume I'm meant to incorporate State in this lab.. where would I do that?



function App() {

  //  why does this pass the task ID, task name, & task category?

  const tasksWithIds = TASKS.map((task) => {
    task.id = uuidv4()
    return task
  });

  // console.log(tasksWithIds)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList TASKS={tasksWithIds} />
    </div>
  );
}

export default App;
