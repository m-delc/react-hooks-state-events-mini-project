import React from "react";

function Task({ junk, category, handleDeleteTask}) {

  // write "delete" function to remove task item from list
  //  remember to add onClick to button

  // const [removeTask, setRemoveTask] = useState('false')

  // function handleRemoveTask(e) {
  //   setRemoveTask(e.target.value)
  // }

  // console.log({ tasktest, category });
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{junk}</div>
      <button onClick={e => handleDeleteTask(junk)} className="delete">X</button>
    </div>
  );
}

export default Task;
