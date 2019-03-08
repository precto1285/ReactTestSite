import React, { useState } from 'react';
import SubCompOne from './SubComp/SubOne';

const OneComp = props => {
  const [recipeName, swapRecipe] =
    useState({
      recipe: ['apple pie', 'apple sauce', 'apple fritter']
    })

  const switchHandler = (e) => {
    swapRecipe({
      recipe: ['apple cobbler', 'caramel candy apple', 'pen pineapple apple pen']
    })
  }

  return (
    <div>
      <div className="jumbotron bg-success text-white">
        <div className="card">
          <div className="card-header bg-success">
            <h1>{props.text}</h1>
          </div>
          <div className="card-body text-dark">
            <p>{props.fruit}</p>
          </div>
        </div>
      </div>
      <div className="card">
        <ul>
          <li>{recipeName.recipe[0]}</li>
          <li>{recipeName.recipe[1]}</li>
          <li>{recipeName.recipe[2]}</li>
        </ul>
        <button className="btn btn-block btn-secondary" onClick={switchHandler}>switch!</button>
      </div>
      <br />
      <SubCompOne />
    </div>
  )
}

export default OneComp;