import { useState } from "react";
import "./App.css";
import DropDownList from "./components/DropDownComponent/DropDownList";

function App() {
  return (
    <div className="App">
      <h1>State Hook</h1>
      <DropDownList classList="Dropdown" title={"--Project List--"}>
        <h3>Project-1</h3>
        <h3>Project-2</h3>
        <h3>Project-3</h3>
        <h3>Project-4</h3>
      </DropDownList>
    </div>
  );
}

export default App;
