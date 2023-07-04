import './App.css'
import Cards from './components/cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from "axios"

function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {
      if(id < 827){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
            if(data.name) {
               setCharacters((characters) => [...characters, data])
            }
           else {
            window.alert("Oye bro este ID no existe, busca otro, es gratarola")
           }
         
         })
      }
   }
   const onClose = (id) => {
      const nuevosCharacters = characters.filter((character) => parseInt(character.id) !== parseInt(id))
      setCharacters(nuevosCharacters)
   }
   return (
      <div className='App'>
         <Nav buscar={onSearch}/>
         <Cards
         characters={characters}
         onClose={onClose} />
      </div>
   );
}

export default App;

