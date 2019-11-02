import React, { useState } from "react";
import { ItemList, NewItem } from "./components/Items";
import TodoContext from "./contexts/TodoContext";
import "./App.css";

const initialItems = [
  "Setup todo context",
  "Consume context from child components"
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(index) {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  }

  // We wrap the entire application with TodoContext provider, so that it
  // _provides_ the value defined here(items) to the entire component heirachy
  return (
    <TodoContext.Provider
      value={{ items, add: handleAddItem, remove: handleRemoveItem }}
    >
      <div className="App">
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <NewItem />
          <ItemList />
        </header>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
