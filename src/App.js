import React, { useState } from "react";
import { ItemList, NewItem } from "./components/Items";
import "./App.css";

const initialItems = ["Setup basic components", "Add some styling"];

function App() {
  // useState hook returns two values. First is the state itself
  // and second is a function that we can use to update the state
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(index) {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>🚀 ToDo App</h2>
        <NewItem add={handleAddItem} />
        <ItemList items={items} remove={handleRemoveItem} />
      </header>
    </div>
  );
}

export default App;
