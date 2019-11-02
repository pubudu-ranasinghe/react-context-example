import React, { useState, useContext } from "react";
import TodoContext from "../contexts/TodoContext";

export function NewItem() {
  const [text, setText] = useState("");
  const todoContext = useContext(TodoContext);

  return (
    <div className="Item">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button onClick={() => todoContext.add(text)}>Add</button>
    </div>
  );
}

export function ItemList() {
  const todoContext = useContext(TodoContext);

  return todoContext.items.map((item, i) => (
    <Item text={item} index={i} key={i} remove={todoContext.remove} />
  ));
}

export function Item({ text, index, remove }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => remove(index)}>Done</span>
    </div>
  );
}
