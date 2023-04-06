import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const KEY = 'f13647e1f1d7.e0e2622df60977cc36b4';



function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      if(characters.find((char)=> char.id == id)){
        return alert('ya esta ese mostro...');
      }
      axios(`${URL_BASE}/${id}?key=${KEY}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert('No hay personajes con este ID');
          }
        });
  

}
const onClose=(id)=>{
   const charactersFiltered = characters.filter(characters=> characters.id !== id)
   setCharacters(charactersFiltered);
}
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/> 
         </Routes>
      </div>
   );
}

export default App;
