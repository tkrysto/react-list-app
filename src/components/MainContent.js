import React from "react";
import ToDoItem from "./ToDoItem";

function MainContent() {
  return (
    <main role="main" className="container">
      <div>
        <ul className="todo-list">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
