import React from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import App from "./App"; // Replace with the path to your main component

ReactDOM.render(
  <React.StrictMode>
    <DragDropContext>
      <App />
    </DragDropContext>
  </React.StrictMode>,
  document.getElementById("root")
);
