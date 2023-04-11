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
            <h1>Name: {character?.name}</h1>
            <h2 >{character?.id}</h2>
            <h2>Status: {character?.status}</h2>
            <h2>Species: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            <img src={character?.image}/>
        </div>
    )
}
export default Detail;