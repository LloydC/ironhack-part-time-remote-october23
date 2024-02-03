import React, { useState } from 'react';
 
function Counter({ theme }) {
  // Declare a new state variable, which we'll call "count"
  let [count, setCount] = useState(0);
  let [pageTitle, setPageTitle] = useState("Counter");

  const increaseCount = () => {
    setCount(count++)
  }

  const decreaseCount = () => {
    setCount(count--)
  }

  const updateTitle = (event) => {
    console.log(event.target.value)
    setPageTitle(event.target.value);
    // if(event.target.value.length < 4){
    //     setTitle('Counter')
    // }
    // else{
    //     setTitle(event.target.value);
    // }
    
  }
 
  return (
    <div className={`Counter ${theme}`}>
      <h2>{pageTitle}</h2>

      <input type="text" name="pageTitle" value={pageTitle} onChange={updateTitle} />
 
      <p> You clicked { count } times! </p> {/* <-- use the "count" variable here */}
 
      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount}> + </button>
    </div>
  );
}
 
export default Counter;