//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.

//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>My favourite songs</h1>
    <ul>
      <li> Numb by Linkin Park </li>
      <li> Cha Cha </li>
      <li> Astronaut </li>
    </ul>
  </div>,
  document.getElementById("root")
);
