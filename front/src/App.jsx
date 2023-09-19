import { useState } from 'react';
import './App.css'
import Cards from "./components/Cards.jsx"
import Nav from './components/Nav.jsx';
import axios from "axios";

function App() {
const [characters, setCharacters] = useState([]);//creo un estado para guardar los personajes iniciado en un array vacío. Ejercicio 3.
//Función para agregar un nuevo personaje al estado characters:

function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('¡No hay personajes con este ID!');
     }
  });
}

function onClose (id) {     //updated =actualizar
  const updatedCharacters = characters.filter((character) => character.id !== id);
  //Actualizo el estado con el set filtrado:
  setCharacters(updatedCharacters);
};

  return (
    
    <div>
<h1> Rick and Morty</h1>
<Cards characters={characters} onClose={onClose}/>
<Nav onSearch={onSearch}/> 
   </div>  
  )
}

export default App;
