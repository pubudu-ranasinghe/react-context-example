import React, { useState } from "react";
import TodoContext from "../contexts/TodoContext";

export function NewItem({ add }) {
  const [text, setText] = useState("");

  return (
    <TodoContext.Consumer>
      {values => (
        <div className="Item">
          <input
            type="text"
            placeholder="New Task"
            value={text}
            onChange={e => setText(e.target.value)}
          ></input>
          <button onClick={() => values.add(text)}>Add</button>
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export function ItemList() {
  // Here we consume the values from TodoContext using the TodoContext Consumer
  return (
    <TodoContext.Consumer>
      {values =>
        values.items.map((item, i) => (
          <Item text={item} index={i} key={i} remove={values.remove} />
        ))
      }
    </TodoContext.Consumer>
  );
}

export function Item({ text, index, remove }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => remove(index)}>Done</span>
    </div>
  );
}
