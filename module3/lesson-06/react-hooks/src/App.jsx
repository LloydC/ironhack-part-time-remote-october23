// import { useState, useEffect } from "react";
// import Counter from './components/Counter';
// import Timer from './components/Timer'
import IronbnbList from "./components/IronbnbList";
import TimerFour from "./components/TimerFour";
import './App.css';
 
function App() {
  // const [show, setShow] = useState(true);

  // useEffect(()=>{
  //   console.log('Hi')
  // }, [])

  // useEffect(()=>{
  //   console.log('Hello')
  // }, [])

  return (
    <div className="App">
      {/* <IronbnbList /> */}
      <TimerFour />
      {/* <Timer /> */}
       {/* <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />} */}
    </div>
  );
}
export default App;
