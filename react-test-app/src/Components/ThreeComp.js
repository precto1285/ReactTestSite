import React from 'react';

const ThreeComp = props => {
  return (
    <div className="jumbotron bg-warning text-white">
      <div className="card">
        <div className="card-header bg-warning">
          <h1>{props.text}</h1>
        </div>
        <div className="card-body text-dark">
          <p>{props.fruit}</p>
        </div>
      </div>
    </div>
  )
}

export default ThreeComp;