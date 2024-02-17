import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import defaultApartmentImg from '../assets/default-apartment.jpg';

function AddApartmentPage() {
    const [headline, setHeadline] = useState("");     // <== ADD
    const [price, setPrice] = useState(1);            // <== ADD
   
    const navigate = useNavigate()
    
   const handleSubmit = (e) => {
        e.preventDefault();
        //1. Define a new apartment object
        const newApartment = {
            title: headline,
            img: defaultApartmentImg,
            pricePerDay: price
        }
        //2. Send a Post request to the API in order to create the apartment
        axios.post('http://localhost:5005/apartments', newApartment)
            .then(response => {
                console.log('response.data', response.data)
                //3. Navigate back to the page with all the apartments to confirm it worked
                navigate("/")
            })
            .catch(err => console.log(err))
        
   }
    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>
        
        {/*    ADD   */}
        <form onSubmit={handleSubmit} >
          <label>Title</label>
          <input
            type="text"
            name="headline"
            onChange={(e) => setHeadline(e.target.value)}
            value={headline}
          />
   
          <label>Price per Day</label>
          <input
            type="number"
            name="pricePerDay"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          
          <button type="submit">Create Apartment</button>
          
        </form>
      </div>
    );
  }
   
  export default AddApartmentPage;