import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './components-css/detail.module.css'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const KEY = 'f13647e1f1d7.e0e2622df60977cc36b4';

const Detail=()=>{
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div className={style.container}>
            <div className={style.info}>
            <h2 >{character?.id}</h2>
             <h1>{character?.name}</h1>
             <h4>Status: {character?.status}.</h4>
             <h4>Species: {character?.species}.</h4>
             <h4>Gender: {character?.gender}.</h4>
             <h4>Origin: {character?.origin?.name}.</h4>
             <img src={character?.image}/>
             </div>
        </div>
    )
}
export default Detail;