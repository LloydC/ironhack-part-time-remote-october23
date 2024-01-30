import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './App.css'

function App() {

  const heading = <h1> React is cool! </h1>;

  const student = {
    firstName: 'ana',
    lastName: 'martinez'
  };

  return (
    <>
      <Navbar />
      {heading}
      <p>My name is {student.firstName.toUpperCase()}</p>
      <Gallery />
      <Footer />
    </>
  )
}

export default App
