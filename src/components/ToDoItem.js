import { render } from "@testing-library/react";
import React, { Component } from "react";

function ToDoItem(props) {
  return (
    <li style={{ display: props.item.label ? "block" : "none" }}>
      <input
        className="form-check-input"
        type="checkbox"
        id={props.item.id}
        name={props.item.name}
        value={props.item.value}
        checked={props.item.completed}
        onClick={() => props.handleChange(props.item.id)}
      />
      <label for={props.item.name} className="form-check-label">
        {props.item.label}
      </label>
    </li>
  );
}

export default ToDoItem;
