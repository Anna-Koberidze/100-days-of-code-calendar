import "./App.css";
import React, { useEffect, useState } from "react";
import numbers from "./numbers";
function App() {
  const [active, setActive] = useState({});
  const clicked = (index) => () => {
    setActive((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  let [saved, setSaved] = useState(0);
  const handleSave = (e) => {
    e.preventDefault();
    setSaved((saved = saved + 1));
    console.log("saved successfully");
  };
  useEffect(() => {
    if (saved > 0) {
      localStorage.setItem("active", JSON.stringify(active));
    }
  }, [saved]);

  useEffect(() => {
    const json = localStorage.getItem("active");
    const savedActive = JSON.parse(json);
    if (savedActive) {
      setActive(() => ({
        ...savedActive,
      }));
    }
  }, []);

  return (
    <div>
      <h1>100 days of code challenge check off calendar</h1>

      <div className="App">
        <div className="button-container">
          <button className="note__save" onClick={handleSave}>
            Save
          </button>
        </div>
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
