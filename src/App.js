import './App.css'
import Cards from './components/cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Page404 from './components/404/Page404';
import { useState } from 'react';
import axios from "axios"
import { Route, Routes } from 'react-router-dom';

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
         <Routes>
         <Route path="/home" element={<Cards 
         characters={characters}
         onClose={onClose} />}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path="*" element={<Page404/>}/>
         </Routes>
         
      </div>
   );
}

export default App;

