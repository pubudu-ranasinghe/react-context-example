import React, { useState } from "react";

export function NewItem({ add }) {
  const [text, setText] = useState("");

  return (
    <div className="Item">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <button onClick={() => add(text)}>Add</button>
    </div>
  );
}

export function ItemList({ items, remove }) {
  return items.map((item, i) => <Item text={item} index={i} key={i} remove={remove} />);
}

export function Item({ text, index, remove }) {
  return (
    <div className="Item">
      {index + 1} {text}
      <span onClick={() => remove(index)}>Done</span>
    </div>
  );
}
