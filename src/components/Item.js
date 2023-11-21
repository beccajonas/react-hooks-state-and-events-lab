import React from "react";
import {useState} from "react";

// ! Lab code 
// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;

function Item({ name, category }) {
  let [isAdded, setIsAdded] = useState(false)
  function handleAdd() {
    setIsAdded(!isAdded)
  }

  return (
    <li className={isAdded? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} 
      className= {isAdded? "remove": "add"}>{isAdded ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
