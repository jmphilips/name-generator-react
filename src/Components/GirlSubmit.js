import React, { Component } from 'react';
import { familyNames } from '../Data/family.json';
import { girlsNames } from '../Data/girls.json'

let buttonDivStyle = {
  margin: '5%',
  display: 'inline'
}

const selectRand = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

class GirlSubmit extends Component {

  createGirlName(e) {
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
