import React from "react";
import { ItemList, NewItem } from "./components/Items";
import { TodoProvider } from "./contexts/TodoContext";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header className="App-header">
          <h2>🚀 ToDo App</h2>
          <NewItem />
          <ItemList />
        </header>
      </div>
    </TodoProvider>
  );
}

export default App;
