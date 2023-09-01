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


   // const login = (userData) => {
   //    if(EMAIL == userData.email && PASSWORD == userData.password) {
   //       setAccess(true);
   //       navigate("/home");
   //    }
   // }

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
        const response = await axios.get(URL + `?email=${email}&password=${password}`)
        
        if(response.data){
         const { access } = response.data;
            setAccess(userData);
            access && navigate('/home');
        }
      }
      catch (error) {
         if(error) throw new Error ("No se pudo verificar los datos")
      }
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // const onSearch = (id) =>{
   //    if(id<827){
   //       axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //       .then(({data}) => {
   //          if(data.name) {
   //             setCharacters((characters) => [...characters, data])
   //          }
   //          else{
   //             window.alert("Oye bro este ID no existe, busca otro, es gratarola")
   //          }
   //       })
   //       .catch((error) =>{
   //          console.log(error)
   //          window.alert(error.response.data)
   //       })
   //    }
   // }

   const onSearch = async (id) =>{
      if(id<827){
      try {
      const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      if(data.name) {
         setCharacters((characters) => [...characters, data])
      }
      else{
         window.alert("Oye bro este ID no existe, busca otro, es gratarola")
      }
      }
      catch(error){
         console.log(error)
         window.alert(error.response.data)
      }
      }
   }


   const location = useLocation();
   
   const onClose = (id) => {
      const nuevosCharacters = characters.filter((character) => parseInt(character.id) !== parseInt(id))
      setCharacters(nuevosCharacters)
   }

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

