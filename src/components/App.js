import React from 'react';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import { fetchCharacters } from '../services/Api';
import Header from './Header';
import CharacterList from './CharacterList';
import Searcher from './Searcher';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      searchCharacter:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderSingleCharacter = this.renderSingleCharacter.bind(this);
  }

  componentDidMount(){
    fetchCharacters()
      .then(character => {
        this.setState({
          allCharacters: character.results
        });
      });
  }
  handleChange(value){
    this.setState({searchCharacter:value});
  }
  renderSingleCharacter(props){
    const selectedId = parseInt(props.match.params.id);
    const selectedCharacter = this.state.allCharacters.find((character) =>
      character.id === selectedId
    );
    return <CharacterDetail character={selectedCharacter}/>
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Searcher searchCharacter={this.state.searchCharacter} handleChange={this.handleChange}/>
            <CharacterList allCharacters={this.state.allCharacters} searchCharacter={this.state.searchCharacter}/>
          </Route>
          <Route path="/:id/" render={this.renderSingleCharacter}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
