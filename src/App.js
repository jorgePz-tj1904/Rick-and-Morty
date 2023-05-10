import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const KEY = 'f13647e1f1d7.e0e2622df60977cc36b4';
const email = 'jlgames1904@gmail.com'
const password= 'mariela1904'
let count;

function App() {
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);

   const login=(userData)=>{
      if(userData.email == email && userData.password == password){
         setAccess(true);
         navigate('/home')
      }else{
         return alert('no tenes cuenta pa, nashe')
      }
   }
   useEffect(()=>{
      !access && navigate('/');
   },[access])

   const onSearch = (id) => {
      if(characters.find((char)=> char.id == id)){
        return alert('ya esta ese mostro...');
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
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
         {
         location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
         <Routes>
            <Route path='/' element ={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/> 
         </Routes>
      </div>
   );
}

export default App;
