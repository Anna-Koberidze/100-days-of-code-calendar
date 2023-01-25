import "./App.css";
import React, { useState } from "react";
import numbers from "./numbers";
function App() {
  const [active, setActive] = useState({});
  const clicked = (index) => () => {
    setActive((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  return (
    <div>
      <h1>100 days of code challenge check off calendar</h1>
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
    </div>
  );
}

export default App;
