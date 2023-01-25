import "./App.css";
import React, { useState } from "react";
import numbers from "./numbers";
function App() {
  let [active, setActive] = useState({});
  const clicked = (index) => () => {
    setActive((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  return (
    <div className="App">
      <div className="container">
        {numbers.map((number, index) => {
          return (
            <div
              id={index}
              key={index}
              className={`days ${active[index] ? "active" : ""}`}
              onClick={clicked(index)}
            >
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
