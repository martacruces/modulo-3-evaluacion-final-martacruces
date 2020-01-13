import React from 'react';
import '../stylesheets/App.scss';
import { fetchCharacters } from '../services/Api';
import CharacterList from './CharacterList';
import Searcher from './Searcher';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetchCharacters()
      .then(character => {
        this.setState({
          allCharacters: character.results,
          searchCharacter: ''
        })
      })
  }
  handleChange(value){
    this.setState({searchCharacter:value})
  }

  render() {
    console.log(this.state.allCharacters)
    return (
      <div className="App">
        <Searcher searchCharacter={this.state.searchCharacter} handleChange={this.handleChange}/>
        <CharacterList allCharacters={this.state.allCharacters} searchCharacter={this.state.searchCharacter}/>
      </div>
    );
  }
}

export default App;
