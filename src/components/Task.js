import React, { useState } from "react";

function Task({ tasktest, category}) {

  // write "delete" function to remove task item from list
  const [removeTask, setRemoveTask] = useState('false')

  function handleRemoveTask(e) {
    setRemoveTask(e.target.value)
  }

  // console.log({ tasktest, category });
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{tasktest}</div>
      <button onClick={handleRemoveTask} className="delete">X</button>
    </div>
  );
}

export default Task;
