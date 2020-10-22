import { render } from "@testing-library/react";
import React, { Component } from "react";

function ToDoItem(props) {
  return (
    <li style={{ display: props.label ? "block" : "none" }}>
      <input
        className="form-check-input"
        type="checkbox"
        id={props.key}
        name={props.name}
        value={props.value}
      />
      <label for={props.name} className="form-check-label">
        {props.label}
      </label>
    </li>
  );
}

export default ToDoItem;
