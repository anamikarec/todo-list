import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { v4 as uuid } from "uuid";

function Todo() {
  const [data, setData] = React.useState([]);
  const [showAll, setShowAll] = React.useState(true);

  const handleAdd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    setData([...data, payload]);
  };

  const handleDelete = (id) => {};

  const handleToggle = (id) => {
    const updatedTodo = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updatedTodo);
  };

  return (
    <div>
      <TodoInput onClick={handleAdd} />
      {data
        .filter((item) => (showAll ? true : !item.status))
        .map((item) => (
          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={item.id}
            {...item}
          />
        ))}

      <button className="show-hide-btn"onClick={() => setShowAll(!showAll)}>
        {showAll ? "SHOW ONLY UNFINISHED TASKS" : "SHOW ALL TASKS"}
      </button>
    </div>
  );
}

export { Todo };
