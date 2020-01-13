import React from 'react';

const Character = (props) => {
    const isHuman = "Human";
    return <div className="character">
        <img className="character__avatar" src={props.allCharacters.image} alt={props.allCharacters.name}/>
        <div className="character__info-wrapper">
            <h4 className="character__name">{props.allCharacters.name}</h4>
            <p className="character__info-line">{isHuman === props.allCharacters.species ? (<i class="fas fa-grimace character__info-line-icon"></i>) : (<i class="fab fa-reddit-alien character__info-line-icon"></i>)}{props.allCharacters.species}</p>
        </div>
    </div>
}

export default Character;