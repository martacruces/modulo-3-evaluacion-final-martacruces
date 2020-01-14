import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props =>{
    const isAlive = "Alive";
    const isHuman = "Human";
    console.log(props.character);
    return <div className="character-detail">
        <Link to='/'><p className="back-button"><i class="fas fa-arrow-left back-button__icon"></i>Volver</p></Link>
        <div className="character character--no-hover">
            <img className="character__avatar" src={props.character.image} alt={props.character.name}/>
            <div className="character__info-wrapper">
                <p className="character__name">{props.character.name}</p>
                <p className="character__info-line">{isAlive === props.character.status ? (<i className="fas fa-heartbeat  character__info-line-icon"></i>) : (<i className="fas fa-skull-crossbones character__info-line-icon"></i>)}{props.character.status}</p>
                <p className="character__info-line">{isHuman === props.character.species ? (<i className="fas fa-grimace character__info-line-icon"></i>) : (<i className="fab fa-reddit-alien character__info-line-icon"></i>)}{props.character.species}</p>
                <p className="character__info-line"><i class="fas fa-globe character__info-line-icon"></i>{props.character.origin.name}</p>
                <p className="character__info-line character__info-line--no-margin"><i class="fas fa-film character__info-line-icon"></i>{props.character.episode.length} Capítulos</p>
            </div>
        </div>
    </div>
}

export default CharacterDetail;