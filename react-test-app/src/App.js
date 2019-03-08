import React, { Component } from 'react';
import './App.css';
import OneComp from './Components/OneComp';
import TwoComp from './Components/TwoComp';
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World",
      textagain: "Hello Again World"
    }
  }
  render() {
    return (
      <div className="App jumbotron bg-success text-white">
        <OneComp text={this.state.text} />
        <TwoComp text={this.state.textagain} />
      </div>
    );
  }
}

export default App;
