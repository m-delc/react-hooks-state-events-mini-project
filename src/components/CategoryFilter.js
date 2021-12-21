import React from "react";

function CategoryFilter({ categories, catButtonClick }) {


    let catButtons = categories.map((category) => {
      return <button key={category} 
                    onClick={e => catButtonClick(category)} 
                    className="selected">{category}</button>
    })

  // console.log(catButtons)

  return (
    
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
