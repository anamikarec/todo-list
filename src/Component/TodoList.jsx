import React from "react";

function TodoList({ title, id, status, handleToggle }) {
  return (
    <div className="items">
        <button className="toggle-btn" onClick={() => handleToggle(id)}>
        {status ? "." : "✓"}
      </button>
      <span>{title}</span>
      <span style={{marginLeft:"190px"}}>☆</span>
    </div>
  );
}



export { TodoList };