import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return <ul>{props.allCharacters
        .filter(character=> props.searchCharacter === '' || character.name.toLowerCase().includes(props.searchCharacter.toLowerCase()))
        .map(character=> <li key={character.id}><Character allCharacters={character}/></li>)}</ul>
}

export default CharacterList;