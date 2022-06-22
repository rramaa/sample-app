import logo from './logo.svg';
import './App.css';
import Ticker from "./Ticker"
import Blinky from "./BlinkY"
import {useRef, useState} from "react";

function App() {
    let inputRef = useRef()
    let [startFrom, updateStartFrom] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
          <input ref={inputRef} type={"number"} />
          <button onClick={() => {
              updateStartFrom(inputRef.current.value)
          }} >Click to change ticker</button>
          <Ticker startFrom={startFrom} />
          <Blinky/>
      </header>
    </div>
  );
}

export default App;
