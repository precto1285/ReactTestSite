import React, { Component } from 'react';
import './App.css';
import OneComp from './Components/OneComp';
import TwoComp from './Components/TwoComp';
import ThreeComp from './Components/ThreeComp';
import FourComp from './Components/FourComponent';
class App extends Component {
  constructor() {
    super();
    this.state =
      {
        text: ["Comp One", "Comp Two", "Comp Three", "Comp Four"],
        food: ['Apple', 'Orange', 'Banana', 'Pear'],
        showState: false
      }
  }
  ClickMeHandler = (e) => {
    const showMe = this.state.showState;
    this.setState({
      showState: !showMe
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-3 p-2'>
              <OneComp
                text={this.state.text[0]}
                fruit={this.state.food[0]} />
            </div>
            <div className='col-md-3 p-2'>
              <TwoComp
                text={this.state.text[1]}
                fruit={this.state.food[1]} />
            </div>
            <div className='col-md-3 p-2'>
              <ThreeComp
                text={this.state.text[2]}
                fruit={this.state.food[2]} />
            </div>
            <div className='col-md-3 p-2'>
              <FourComp
                text={this.state.text[3]}
                fruit={this.state.food[3]} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <OneComp text={this.state.food[0]} />
            </div>
            <div className='col-md-3'>
              <TwoComp text={this.state.food[1]} />
            </div>
            <div className='col-md-3'>
              <ThreeComp text={this.state.food[2]} />
            </div>
            <div className='col-md-3'>
              <FourComp text={this.state.food[3]} />
            </div>
          </div>
          <div className="row">
            <div className="card my-3">
              <div className="card-header bg-secondary text-white"></div>
              <div className="card-body">
                <button onClick={this.ClickMeHandler} className="btn btn-danger">Click Me</button>
                {
                  this.state.showState ?
                    <div>
                      <OneComp
                        text={this.state.text[0]}
                        fruit={this.state.food[0]} />
                      <OneComp
                        text={this.state.text[1]}
                        fruit={this.state.food[1]} />
                      <OneComp
                        text={this.state.text[2]}
                        fruit={this.state.food[2]} />
                    </div> : null
                }
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
