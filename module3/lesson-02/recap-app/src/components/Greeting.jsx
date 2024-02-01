// function Greeting({ firstName, lastName }){
function Greeting(props) {
    const message = `Hello ${props.firstName} ${props.lastName}`;
    // const message = `Hello ${firstName} ${lastName}`;
    return (
      <div>
        <u>{message}</u>
      </div>
    );
  }
   
  export default Greeting;