import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, removeTask }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
      {/* <button style={{ margin: "20px" }} onClick={removeTask}>
        Clear Completed
      </button> */}
    </div>
  );
};

export default ToDoList;