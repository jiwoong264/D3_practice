import { useState } from 'react';
import './App.css';
import Drawing from "./components/Drawing";

function App() {
  // const draw = "circles";
  const [draw, setDraw] = useState("circles");
  const how = "D3";

  const changeDraw = () => {
    if (draw == "circles") setDraw("rects");
    else                   setDraw("circles");
  }

  return (
    <div className='App'>
      <div style={{display: "flex"}}>
        {["Drawing", draw].join(" ")}
        <button style={{marginLeft: 5}} onClick={changeDraw}>
          {draw === "circles" ? "rects" : "circles"}
        </button>
      </div>
      <Drawing
        draw={draw}
        how={how}
      />
    </div>
  );
}

export default App;
