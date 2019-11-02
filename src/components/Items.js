import React from "react";

export function NewItem({ add }) {
  return (
    <div className="Item">
      <input type="text" placeholder="New Task"></input>
      <button onClick={() => add("New")}>Add</button>
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
