import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom'
 
function QueryStringExample(props) {
  const [searchParams, setSearchParams] = useSearchParams();
 const firstInput = useRef(null);
 const secondInput = useRef(null);
  // Get the values from the URL query strings 
  // Example: http://localhost:5173/example?place=Miami&destType=Hotel

  const place = searchParams.get("place");
const destType = searchParams.get("destType");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Get the values from firstInput and secondInput
    // 2. Update the Url with the query values
    // 3. Send a query request to the server using the query values
  }
  useEffect(() => {
    console.log('place', place)
    console.log('destType', destType);
  }, []);
 
  return (
    <div>
      <h2>Query String Example</h2>
      {/* <p>
        Open the console to see the logged query string values
      </p> */}
      <form onSubmit={handleSubmit}>
        <input type="text" name='place' ref={firstInput} />
        <input type="text" name='destType'ref={secondInput} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
 
export default QueryStringExample;