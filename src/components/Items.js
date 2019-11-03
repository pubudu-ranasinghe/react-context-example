import React, { useState } from "react";
import {
  useTodoContext,
  addTodo,
  removeTodo,
  clearAll
} from "../contexts/TodoContext";

export function NewItem() {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  return (
    <div className="Item">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
    </div>
  );
}

export function ItemList() {
  const { items, dispatch } = useTodoContext();

  return (
    <>
      {items.map((item, i) => (
        <Item text={item} index={i} key={i} dispatch={dispatch} />
      ))}
      {items.length > 0 && (
        <p
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={() => dispatch(clearAll())}
        >
          Clear All
        </p>
      )}
    </>
  );
}

export function Item({ text, index, dispatch }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => dispatch(removeTodo(index))}>Done</span>
    </div>
  );
}
