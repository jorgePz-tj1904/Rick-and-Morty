import style from "./components-css/card.module.css";
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={()=>onClose(id)}>X</button>
         <h2 className={style.id}>{id}</h2>
         <h1>{name}</h1>
         <ul>
         <li>State: {status}</li>
         <li>Species: {species}</li>
         <li>Gender: {gender}</li>
         <li>Origin: {origin}</li>
         </ul>
         
         <img src={image} alt=''/>
      </div>
   );
}
