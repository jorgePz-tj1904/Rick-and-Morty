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
        axios(`${URL_BASE}/${id}?key=${KEY}`)
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
            <h1>{character?.name}</h1>
            <ul>
                <li>Status: {character?.status}</li>
                <li>Species: {character?.species}</li>
                <li>Gender: {character?.gender}</li>
                <li>Origin: {character?.origin?.name}</li>
            </ul>
            <h2 >{character?.id}</h2>
        </div>
        <img src={character?.image}/>
        </div>
    )
}
export default Detail;