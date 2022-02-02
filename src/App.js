import "./App.css";
import { useState } from "react";

import { Dice, Biscuit } from "./lib";
import { DiceClock } from "./lib/dice/DiceClock";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <DiceClock />
      </div>
    </div>
  );
}

export default App;
