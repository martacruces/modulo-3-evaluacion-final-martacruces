import React from 'react';

const Searcher = (props) => {
    const handleChange = evt => {
        const value = evt.target.value;
        props.handleChange(value)
    }

    return <form className="searcher-form">
        <div className="searcher-form__input-wrapper">
            <input 
                className="searcher-form__input"
                placeholder="Buscar personaje"
                type="text"
                onChange={handleChange}
                value={props.searchCharacter}
                id="searcher"/>
            <label htmlFor="searcher" className="fas fa-search searcher-form__label"></label>
        </div>
    </form>
}

export default Searcher;