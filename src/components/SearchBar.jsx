import { useState } from "react";
import style from "./components-css/searchBar.module.css";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   const handleKeyDown =(event)=>{
      if(event.key == 'Enter'){
         onSearch(id);
         setId('');
      }
   }
   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} onKeyDown={handleKeyDown} value={id} placeholder="ingresa la id del personaje"/>
         <button onClick={()=>{onSearch(id); setId('')}}>+</button>
      </div>
   );
}
