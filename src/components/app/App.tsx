import React from "react";
import { Element } from "../../models/elements";

import "./App.css";

import Header  from "../header/header";
import Elem from "../elem/Elem";

function App() {
  function handleDataChange(newItem: string) {
    console.log(newItem);
  }

  return (
    <div className="App">
      <Header onDataChange={handleDataChange}/>
      <Elem />
    </div>
  );
}

export default App;
