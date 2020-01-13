import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props =>{
    const isAlive = "Alive";
    const isHuman = "Human";
    console.log(props.character);
    return <div>
        <Link to='/'><p><i class="fas fa-arrow-left"></i>Volver</p></Link>
        <img src={props.character.image} alt={props.character.name}/>
        <h3>{props.character.name}</h3>
        <p>Status: {isAlive === props.character.status ? (<i class="fas fa-heartbeat"></i>) : (<i class="fas fa-skull-crossbones"></i>)}</p>
        <p>Species: {isHuman === props.character.species ? (<i class="fas fa-grimace"></i>) : (<i class="fab fa-reddit-alien"></i>)}</p>
        <p>Origin: {props.character.origin.name}</p>
        <p>Episodes: {props.character.episode.length}</p>
    </div>
}

export default CharacterDetail;