import React from 'react';

const FourComp = props => {
  return (
    <div className="jumbotron bg-danger text-white">
      <div className="card">
        <div className="card-header bg-danger">
          <h1>{props.text}</h1>
        </div>
        <div className="card-body text-dark">
          <p>{props.fruit}</p>
        </div>
      </div>
    </div>
  )
}

export default FourComp;