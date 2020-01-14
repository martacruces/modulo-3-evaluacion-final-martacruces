import React from 'react';
import {Link} from 'react-router-dom';
import Character from './Character';

const CharacterList = (props) => {
    return <ul className="character__list">{props.allCharacters
        .filter(character =>
            props.searchCharacter === '' || character.name.toLowerCase().includes(props.searchCharacter.toLowerCase())
        )
        .map(character =>
            <li key={character.id}>
                <Link to={`/${character.id}`}>
                    <Character allCharacters={character}/>
                </Link>
            </li>
        )}
    </ul>
}

export default CharacterList;