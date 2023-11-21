import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react";


function App() {
  const [ isDark, setIsDark ] = useState(false) 
  function handleDarkMode() {
    console.log('click');
    setIsDark(!isDark)
  }

  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDark ? "Light Mode" : "Dark Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
