import React, { Component } from 'react';
import SubComp2 from './SubComp2';

export default class SubComp extends Component {
  constructor() {
    super();
    this.state = {
      newState: 'Hello World2!'
    }
  }

  clickHandler = (e) => {
    this.setState({
      newState: 'Yaba Daba Doo!'
    })
  }
  render() {
    return (
      <div className="container">
        <SubComp2 text={this.state.newState} />
        <button className="btn btn-danger" onClick={this.clickHandler.bind(this)}>Switch</button>
      </div>
    )
  }
}

