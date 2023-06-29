import './App.css';
import Card from './components/cards/Card.jsx';
import Cards from './components/cards/Cards';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { Rick, characters } from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards
         characters={characters}
         onClose={() => window.alert('Emulamos que se cierra la card')} />
      </div>
   );
}

export default App;
