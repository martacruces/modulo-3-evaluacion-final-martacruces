import React from 'react';

const Searcher = (props) => {
    const handleChange = evt => {
        const value = evt.target.value;
        props.handleChange(value)
    }

    return <form><label>Buscador de personajes</label><input type="text" onChange={handleChange} value={props.searchCharacter}/></form>
}

export default Searcher;