// import React from "react";

// function NewTaskForm({ onTaskFormSubmit, setDetails, categoryChoices, setCategoryChoice }) {

// // Pass the list of categories to this component from `App`. Then, update this
// // component to display `<option>` elements for each category inside of the
// // `<select>` element **except** the "All" category, so that the user can select a
// // category when adding a new task.

// // Next, update this form to be a _controlled component_, so that all form inputs
// // are captured in state.

// // _When the form is submitted_, add a new task to the list with the text and
// // category from the form. You'll need a callback prop named `onTaskFormSubmit` for
// // the tests to pass for this feature.

//   // let newTask = catgories.map(category => {
//   //   if category !== "All"<option
//   // })



//   return (
//     <form onSubmit={e => onTaskFormSubmit(e)} className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" onChange={(e) =>/>
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;




import React from "react";

function NewTaskForm({ onTaskFormSubmit, setDetails, categoryChoices, setCategoryChoice }) {
 
 
  return (
    <form  onSubmit={e => onTaskFormSubmit(e)} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select onChange={(e) => setCategoryChoice(e.target.value)} name="category">
          { categoryChoices.map(categoryChoice => <option>{categoryChoice}</option>)}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
