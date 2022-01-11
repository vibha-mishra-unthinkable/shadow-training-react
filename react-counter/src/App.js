import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [val, setVal] = useState(0);
  useEffect(() => {
    document.title = val > 0 ? `Counter(${val})` : `Counter`;
  });
  return (
    <div className="App">
      <div className="App-header">
        Counter
        <div className="App-link">
          <button className="counterSign" onClick={() => setVal(val - 1)}>
            -
          </button>
          <input type="text" className="counterText" value={val} />
          <button className="counterSign" onClick={() => setVal(val + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
