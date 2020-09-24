import React from "react";
import ToDoItem from "./ToDoItem";

function MainContent() {
  return (
    <main role="main" className="container">
      <div>
        <ul className="todo-list">
          <ToDoItem label="first thing" />
          <ToDoItem label="second thing" />
          <ToDoItem label="third thing" />
          <ToDoItem label="fourth thing" />
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
