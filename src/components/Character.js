import React from 'react';
import PropTypes from 'prop-types';

const Character = (props) => {
    const isHuman = "Human";

    return <div className="character">
        <img className="character__avatar" src={props.allCharacters.image} alt={props.allCharacters.name}/>
        <div className="character__info-wrapper">
            <h4 className="character__name">{props.allCharacters.name}</h4>
            <p className="character__info-line character__info-line--no-margin">{isHuman === props.allCharacters.species ? (<i className="fas fa-grimace character__info-line-icon"></i>) : (<i className="fab fa-reddit-alien character__info-line-icon"></i>)}{props.allCharacters.species}</p>
        </div>
    </div>
}

Character.propTypes={
    allCharacters: PropTypes.object
}

export default Character;