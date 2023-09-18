import React from "react";
import { Element } from "../../models/elements";

import "./App.css";

import Header from "../header/header";
import Elem from "../elem/Elem";

function App() {
  const [elements, setElements] = React.useState<any>([]);

  function handleDataChange(newItem: string) {
    setElements([
      ...elements,
      {
        Name: newItem,
        Done: true,
      },
    ]);
  }

  return (
    <div className="App">
      <Header onDataChange={handleDataChange} />
      <div className="App-container">
        {elements.map((el: { Name: string }) => {
          return <Elem Name={el.Name} Done={true} />;
        })}
      </div>
    </div>
  );
}

export default App;
