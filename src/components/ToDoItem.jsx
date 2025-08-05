import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(props.text);

  function handleClick() {
    setIsDone((prev) => !prev);
  }

  function handleDelete() {
    props.onChecked(props.id);
  }

  function handleEditToggle() {
    setIsEditing(true);
  }

  function handleUpdateChange(event) {
    setUpdatedText(event.target.value);
  }

  function handleSave() {
    props.onUpdate(props.id, updatedText);
    setIsEditing(false);
  }

  return (
    <div>
      <li
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >

        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedText}
              onChange={handleUpdateChange}
              style={{
                padding: "6px 10px",
                border: "2px solid #f7c04a",
                borderRadius: "8px",
                outline: "none",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={handleSave}
              style={{
                backgroundColor: "#f7c04a",
                border: "none",
                borderRadius: "8px",
                padding: "6px 12px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#333",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span
              onClick={handleClick}
              style={{
                textDecoration: isDone ? "line-through" : "none",
                cursor: "pointer",
                fontSize: "16px",
                fontFamily: "inherit",
              }}
            >
              {props.text}
            </span>

            <button
              onClick={handleEditToggle}
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
              title="Edit"
            >
              ✏️
            </button>

            <button
              onClick={handleDelete}
              style={{
                background: "none",
                border: "none",
                color: "red",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
              title="Delete"
            >
              ❌
            </button>
          </>
        )}
      </li>
    </div>
  );
}

export default ToDoItem;
