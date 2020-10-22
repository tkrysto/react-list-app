import React from "react";
import ToDoItem from "./ToDoItem";
import dummyData from "../dummyData";

function MainContent() {
  const listComponents = dummyData.map((data) => {
    return <ToDoItem key={data.id} item={data} />;
  });

  return (
    <main role="main" className="container">
      <div>
        <ul className="todo-list">{listComponents}</ul>
      </div>
    </main>
  );
}

export default MainContent;
