import './App.css'
import Cards from './components/cards/Cards';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import Page404 from './components/404/Page404';
import { useState, useEffect } from 'react';
import axios from "axios"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = 'a@gmail.com';
   const PASSWORD = 'Pass123';
   const navigate = useNavigate();


   const login = (userData) => {
      if(EMAIL == userData.email && PASSWORD == userData.password) {
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      if(id < 827){
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
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

   const location = useLocation();


   return (
      <div className='App'>
         {location.pathname !=='/' && <Nav buscar={onSearch}/>}
         <Routes>
         <Route path="/" element={<Form login={login}/>}/>
         <Route path="/home" element={<Cards 
         characters={characters}
         onClose={onClose} />}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path="*" element={<Page404/>}/>
         <Route path='/favorites' element={<Favorites />} />
         </Routes>
         
      </div>
   );
}

export default App;

