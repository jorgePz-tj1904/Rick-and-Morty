import { useState } from "react";
import style from "./components-css/searchBar.module.css";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} value={id} placeholder="ingresa la id del personaje"/>
         <button onClick={()=>{onSearch(id); setId('')}}>+</button>
      </div>
   );
}
