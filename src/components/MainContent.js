import React from "react";
import ToDoItem from "./ToDoItem";
import dummyData from "../dummyData";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      dd: dummyData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    console.log("changed", id);
    this.setState((prevState) => {
      const updatedList = prevState.dd.map((todo) => {
        console.log(todo.id);
        if (todo.id === id) {
          console.log("it matched");
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        dd: updatedList,
      };
    });
  }

  render() {
    const listComponents = this.state.dd.map((data) => {
      return (
        <ToDoItem key={data.id} item={data} handleChange={this.handleChange} />
      );
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
