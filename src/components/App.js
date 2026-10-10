import React, { useState } from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h1>Hover over me</h1>
      <Tooltip text="This is a simple tooltip">
        <p> This is another tooltip</p>
      </Tooltip>
      <p>Hover over me to see another tooltip</p>
    </div>
  );
};
export default App;
