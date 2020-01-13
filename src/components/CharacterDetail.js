import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props =>{
    console.log(props.character);
    return <div>
        <Link to='/'><p>Volver</p></Link>
        <img src={props.character.image} alt={props.character.name}/>
        <h3>{props.character.name}</h3>
        <p>Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
        <p>Origin: {props.character.origin.name}</p>
        <p>Episodes: {props.character.episode.length}</p>
    </div>
}

export default CharacterDetail;