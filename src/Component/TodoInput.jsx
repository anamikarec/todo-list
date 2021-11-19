import React from "react";

function TodoInput({ onClick }) {
  const [title, setTitle] = React.useState("");

  return (
    <div>
         <button className="add-btn" onClick={() => onClick(title)}>➕</button>
   
      <input
        placeholder="Add something"
        className="input-btn"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
  );
}

export { TodoInput };
