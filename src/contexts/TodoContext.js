import React, { createContext, useState, useContext } from "react";

export const TodoContext = createContext();

const initialItems = [
  "Extract todo state to todo context",
  "Implement todo provider"
];

// We wrap the provider in a nice little component
// which will hold the state and provide methods to
// update the state
function TodoProvider(props) {
  const [items, setItems] = useState(initialItems);

  function add(item) {
    setItems([...items, item]);
  }

  function remove(index) {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  }

  const todoData = { items, add, remove };

  return <TodoContext.Provider value={todoData} {...props} />;
}

// Here we create a custom hook that allows us to consume
// the todo context
function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
