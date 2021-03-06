import React from 'react';

const TwoComp = props => {
  return (
    <div className="jumbotron bg-primary text-white">
      <div className="card">
        <div className="card-header bg-primary">
          <h1>{props.text}</h1>
        </div>
        <div className="card-body text-dark">
          <p>{props.fruit}</p>
        </div>
      </div>
    </div>
  )
}

export default TwoComp;