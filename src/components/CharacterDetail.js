import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props =>{
    const isAlive = "Alive";
    const isHuman = "Human";

    return <div className="character-detail">
        <Link to='/'><p className="back-button"><i className="fas fa-arrow-left back-button__icon"></i>Volver</p></Link>
        <div className="character character--no-hover">
            {props.character ? (<React.Fragment>
                <img className="character__avatar" src={props.character.image} alt={props.character.name}/>
                <div className="character__info-wrapper">
                    <p className="character__name">{props.character.name}</p>
                    <p className="character__info-line">{isAlive === props.character.status ? (<i className="fas fa-heartbeat  character__info-line-icon"></i>) : (<i className="fas fa-skull-crossbones character__info-line-icon"></i>)}{props.character.status}</p>
                    <p className="character__info-line">{isHuman === props.character.species ? (<i className="fas fa-grimace character__info-line-icon"></i>) : (<i className="fab fa-reddit-alien character__info-line-icon"></i>)}{props.character.species}</p>
                    <p className="character__info-line"><i className="fas fa-globe character__info-line-icon"></i>{props.character.origin.name}</p>
                    <p className="character__info-line character__info-line--no-margin"><i className="fas fa-film character__info-line-icon"></i>{props.character.episode.length} Capítulos</p>
                </div></React.Fragment>
            ) : ''}
        </div>
    </div>
}

export default CharacterDetail;