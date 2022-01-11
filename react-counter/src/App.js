import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [counterValue, setCounterValue] = useState(0);
  useEffect(() => {
    document.title = counterValue > 0 ? `Counter(${counterValue})` : `Counter`;
  });
  return (
    <div className="App">
      <div className="App-header">
        <p className="App-link">Counter</p>
        <div className="counter">
          <button
            className="counterSign"
            onClick={() => setCounterValue(counterValue + 1)}
          >
            +
          </button>
          <input type="text" className="counterValue" value={counterValue} />
          <button
            className="counterSign"
            onClick={() => setCounterValue(counterValue - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
