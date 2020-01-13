import React from 'react';

const Character = (props) => {
    return <div>
        <img src={props.allCharacters.image} alt={props.allCharacters.name}/>
        <h4>{props.allCharacters.name}</h4>
        <p>{props.allCharacters.species}</p>
    </div>
}

export default Character;