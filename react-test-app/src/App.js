import React, { Component } from 'react';
import './App.css';
import OneComp from './Components/OneComp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World"
    }
  }
  render() {
    return (
      <div className="App">
        <OneComp text={this.state.text} />
      </div>
    );
  }
}

export default App;
