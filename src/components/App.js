import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
// import {v4 as uuidv4} from 'uuid'

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });






function App() {

  
  const [tasks, setTasks] = useState(TASKS)
  //      [get it, set it]

  // state of text "details" input
  const [text, setDetails] = useState('')

  const [category, setCategoryChoice] = useState('Code')
  
  const [categorystate, setCategoryState] = useState('All')

  const categoryChoices = CATEGORIES.filter(category => category !== 'All')
  
  // callback for delete button
  function handleDeleteTask (junk) {
    setTasks(tasks.filter(task => task.text !== junk))
  }
  // set state for category button
  function catButtonClick (category) {
    setCategoryState(category)
  }
  //  filter category button
  function filterTasks() {
    if (categorystate === 'All') {
      return tasks
    } else {
        return tasks.filter(task => task.category === categorystate)
    }
  }


  function onTaskFormSubmit(event){
    event.preventDefault();
    const newTask = {
      text,
      category
    }
    console.log(newTask);
    setTasks([...tasks,newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
                      catButtonClick={catButtonClick}
                      /*handleCategoryChange={handleCategoryChange} */ />
      <NewTaskForm  categoryChoices={categoryChoices} setDetails={setDetails} setCategoryChoice={setCategoryChoice} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filterTasks()} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
