import style from "./components-css/card.module.css";
import {NavLink } from "react-router-dom";
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <div className={style.cards}>
            <div id={style.front}>
              <img src="https://wallpapercave.com/wp/wp6737010.jpg"/>
              <h1>{id}</h1>
            </div>
            <div id={style.back}>
               <button id={style.xboton} onClick={()=>onClose(id)}>X</button>
               <h2 className={style.id}>{id}</h2>
               <h1>{name}</h1>
               <ul>
               <li>State: {status}</li>
               <li>Species: {species}</li>
               <li>Gender: {gender}</li>
               <li>Origin: {origin}</li>
               </ul>
               <NavLink to={`/detail/${id}`} id={style.link}><b>i</b></NavLink>
               <img src={image} id={style.characterImg}/>
            </div>
         </div>
      </div>
   );
}
