import { render } from "@testing-library/react";
import React, { Component } from "react";

function ToDoItem() {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        id="thing2"
        name="subscribe"
        value="newsletter"
      />
      <label for="thing2" className="form-check-label">
        second thing
      </label>
    </li>
  );
}

export default ToDoItem;
