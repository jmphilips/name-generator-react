import React, { Component } from 'react';
import { familyNames } from '../Data/family.json';
import { girlsNames } from '../Data/girls.json';

let buttonDivStyle = {
  margin: '5%',
  display: 'inline'
}

const selectRand = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

class GirlSubmit extends Component {
  constructor() {
    super() 
    this.createGirlName = this.createGirlName.bind(this)
  }

  createGirlName(e) {
    this.props.createName(selectRand(familyNames) + " " + selectRand(girlsNames))
    e.preventDefault()
  }

  render() {
    return (
      <div style={buttonDivStyle}>
        <button type="submit" onClick={this.createGirlName.bind(this)}>Girl</button>
      </div>
    )
  }
}

export default GirlSubmit
