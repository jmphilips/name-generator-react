import React, { Component } from 'react';
import { familyNames } from '../Korean-Data/family.json';
import { girlsNames } from '../Korean-Data/girls.json';

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
    const firstName = selectRand(girlsNames)
    const lastName = selectRand(familyNames)

    const korName = lastName['kor'] + firstName['kor']
    const enName = lastName['en'] + ' ' + firstName['en']

    this.props.createName(korName, enName)
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
