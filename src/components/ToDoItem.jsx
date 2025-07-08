import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick(event) {
    setIsDone((prev) => !prev);
  }

  function handleDelete() {
    props.onChecked(props.id);
  }

  return (
    <div>
      <li>
        <span
          onClick={handleClick}
          style={{
            textDecoration: isDone ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {props.text}
        </span>

        <button
          onClick={handleDelete}
          style={{
            marginLeft: "10px",
            background: "none",
            border: "none",
            color: "red",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ❌
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
