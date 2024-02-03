// src/App.jsx
 import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';
 
function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  if(isLoading){
    return <Spinner />
  }

  return (
    <div className="App">
      <MovieList />
    </div>
  );
}
 
export default App;