import React, { useState } from "react";
 
function Timer() {
  const [count, setCount] = useState(0);
 
//   setCount(count + 1);
//   setInterval(() => {
   
//   }, 1000);
 
  return (
    <div className="Timer">
      <h2>Timer</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
 
export default Timer;