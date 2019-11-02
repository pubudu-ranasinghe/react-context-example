import React from "react";
import { ItemList, NewItem } from "./components/Items";
import "./App.css";

const initialItems = ["Setup basic components", "Add some styling"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>🚀 ToDo App</h2>
        <NewItem />
        <ItemList items={initialItems} />
      </header>
    </div>
  );
}

export default App;
