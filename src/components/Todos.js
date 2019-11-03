import React from "react";
import { NewItem, ItemList } from "./Items";

export default function Todo() {
  return (
    <header className="App-header">
      <h2>🚀 ToDo App</h2>
      <NewItem />
      <ItemList />
    </header>
  );
}
