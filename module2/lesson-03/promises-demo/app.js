const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ironhack");
    }, 2000);
  }); // executes after 2s, run resolves() with "Ironhack"
   
   
  pr1 // --> returns "Ironhack"
    .then((val) => {
        console.log("Resolved with: ", val);
        return "Hello World";
    })
    .then(valTwo => {
        console.log("New return is", valTwo);
        return "Bye World"
    })
    .then(valThree => {
        console.log("New return is", valThree);
        return "End"
    })
    .catch( error => console.log(error))


// const directions = [
//     "Starting point: Ironhack Miami",
//     "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
//     "➔ Turn right onto S Miami Ave",
//     "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
//   ];
   
   
//   function getDirections(step, callback, errorCallback) {
//     // setTimeout(() => {
//       console.log( directions[step] );
      
//       if (!directions[step]) errorCallback("Instructions not found.");
//       else callback();
//     // }, 2000); 
//   }
   
//   // Callback hell
//   getDirections(0, ()=> {
//     getDirections(1, () => {
//         getDirections(2, ()=>{
//             getDirections(3, ()=>{

//             })
//         })
//     });
//   });