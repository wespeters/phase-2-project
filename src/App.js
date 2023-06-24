// import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MainBody from './Components/MainBody/MainBody';
import { useEffect, useState } from 'react';

const API = "http://localhost:3000/movies"

export default function App() {
 const[movies, setMovies] = useState([])

 useEffect(() => 
  fetch(API)
  .then(res => res.json())
  .then(console.log))
 
  return (
    <div>
      <NavBar />
      <MainBody />
    </div>
  );
}
