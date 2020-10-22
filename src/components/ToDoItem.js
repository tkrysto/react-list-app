import { render } from "@testing-library/react";
import React, { Component } from "react";

function ToDoItem(props) {
  return (
    <li style={{ display: props.label ? "block" : "none" }}>
      <input
        className="form-check-input"
        type="checkbox"
        id="thing2"
        name="subscribe"
        value="newsletter"
      />
      <label for="thing2" className="form-check-label">
        {props.label}
      </label>
    </li>
  );
}

export default ToDoItem;
