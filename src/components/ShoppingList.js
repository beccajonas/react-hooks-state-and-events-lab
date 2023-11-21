import React from "react";
import Item from "./Item";
import {useState} from "react";


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleFilter(e) {
    console.log(e.target.value);
    setSelectedCategory(e.target.value)
  }

  const itemsToDisplay = items.filter(item => {
    if (selectedCategory === 'All') {
      return true
    } else {
      return item.category === selectedCategory
    }
  })
  
  console.log(itemsToDisplay);
  const filteredItems = itemsToDisplay.map(item => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
