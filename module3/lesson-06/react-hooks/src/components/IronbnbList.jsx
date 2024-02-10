import { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from 'antd';
import ApartmentCard from "./ApartmentCard";
 
const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";
 
function IronbnbList() {
  // 1. State variables are initialized
  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);
 
  // 3. useEffect runs
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    // setTimeout(()=>{
      axios.get(apiURL).then((response) => { // this will fetch the apartments data from the api
        setApartments(response.data); // add the list of apartments to the state
        setFetching(false); // remove the spin animation
      });
    // }, 3000)
  }, []);
 
  // 2. return () gets rendered
  return (
    <div>
      <h3>List of apartments</h3>
      {fetching &&  <Spin />}
 
      {apartments.map((apt) => {
        return <ApartmentCard key={apt._id} apt={apt} />
      })}
    </div>
  );
}
 
export default IronbnbList;