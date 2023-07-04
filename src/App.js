import './App.css';
import Card from './components/cards/Card.jsx';
import Cards from './components/cards/Cards';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { useState } from 'react';
import axios from "axios"

function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
         setCharacters((characters) => [...characters, data])
      })
      
   }
   return (
      <div className='App'>
         <Nav buscar={onSearch}/>
         <Cards
         characters={characters}
         onClose={() => window.alert('Emulamos que se cierra la card')} />
      </div>
   );
}

export default App;
