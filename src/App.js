import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {searchBox, SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''

    };


  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  handleChnage = (e) =>{
  this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      
      <div className="App">
       <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='Search Monsters'
        handleChnage={this.handleChnage}
        />
        <CardList monsters ={filteredMonsters}/>

          
       
      </div>
    );
   }
  }
  

export default App;
