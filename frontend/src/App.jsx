import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [joke, setjoke] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/jokes')
      .then((response) => {
        setjoke(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app-container">
      {/* Header with logo and navigation links */}
      <header className="header">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHJgqLaeDPGsZNoYkzKL08NeN0UgVewejLA&s" alt="Logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main content */}
      <h1>Jokes</h1>
      <p>Jokes: {joke.length}</p>
      {joke.map((joke, index) => {
        return (
          <div key={joke.id} className="joke-container">
            <h3>{joke.name}</h3>
            <p>{joke.joke}</p>
            <p className="idp">ID:- {joke.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
