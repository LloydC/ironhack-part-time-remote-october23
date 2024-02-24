import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";
 
const AuthContext = React.createContext();
 
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */
    const storeToken = (token) => {       //  <==  ADD
      localStorage.setItem('authToken', token);
    }

    const authenticateUser = () => {
      // update the authentication state variables according to whether 
      // there's a token in localStorage or not
      // if there's a token ---> validate the token ---> update the state variables 
      // else ---> update the state variables accordingly
      const storedToken = localStorage.getItem('authToken'); // --> uwgdugdgwgaidg || undefined
    
      // If the token exists in the localStorage
      if (storedToken) {
        // We must send the JWT token in the request's "Authorization" Headers
        axios.get(
          `${API_URL}/auth/verify`, 
          { headers: { Authorization: `Bearer ${storedToken}`} }
        )
        .then((response) => {
          // If the server verifies that the JWT token is valid  
          const user = response.data;
        // Update state variables        
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);        
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) 
          // Update state variables         
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);        
        });      
      } else {
        // If the token is not available (or is removed)
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);      
      } 
    }

    const removeToken = () => {                    // <== ADD
      // Upon logout, remove the token from the localStorage
      localStorage.removeItem("authToken");
    }
   
   
    const logOutUser = () => {                   // <== ADD    
      // To log out the user, remove the token
      removeToken();
      // and update the state variables    
      authenticateUser();
    }  

    useEffect(()=>{
      authenticateUser(); // after the page loads, check if there's a token in localStorage
        // ---> update the state variables accordingly
    }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };