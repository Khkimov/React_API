import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import PersonInfo from './PersonInfo';

export default class App extends Component {

  state = {
    selectedPerson: 1
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="main-content">
          <Main itemSelected={this.onPersonSelected} />
          <PersonInfo personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

