import { useState, useEffect } from "react";
import axios from 'axios';
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

 
  useEffect(()=>{
    // how to update the apartments state with data
    axios.get('http://localhost:5005/apartments')
    .then(response => setApartments(response.data))
    .catch(err => console.log(err))
  
  }, [])

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map(apartment => {
        return <div key={apartment._id}>
            <h4>{apartment.title}</h4>
            <img src={apartment.img} alt="apartment_image" />
            <p>${apartment.pricePerDay}</p>
        </div>
      })}
    </div>
  );
}
 
export default ApartmentsPage;