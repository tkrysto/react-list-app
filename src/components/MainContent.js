import React from "react";

function MainContent() {
  return (
    <main role="main" className="container">
      <div>
        <ul className="todo-list">
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id="thing1"
              name="subscribe"
              value="newsletter"
            />
            <label for="thing1" className="form-check-label">
              first thing
            </label>
          </li>
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
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id="thing3"
              name="subscribe"
              value="newsletter"
            />
            <label for="thing3" className="form-check-label">
              third thing
            </label>
          </li>
          <li>
            <input
              className="form-check-input"
              type="checkbox"
              id="thing4"
              name="subscribe"
              value="newsletter"
            />
            <label for="thing4" className="form-check-label">
              forth thing
            </label>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
