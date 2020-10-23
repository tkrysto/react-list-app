import React from "react";
import ToDoItem from "./ToDoItem";
import dummyData from "../dummyData";


class MainContent extends Rails.Component {
  state = { 
    dummyData = dummyData
   }
  
  render() { 
    const listComponents = this.state.dummydata.map((data) => {
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
}
 
export default MainContent;