import React, { Component } from 'react';
import { familyNames } from '../Korean-Data/family.json';
import { boysNames } from '../Korean-Data/boys.json';

let buttonDivStyle = {
  margin: '5%',
  display: 'inline'
}

const selectRand = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

class BoySubmit extends Component {
  constructor() {
    super()
    this.createBoyName = this.createBoyName.bind(this)
  }

  createBoyName(e) {
    const firstName = selectRand(boysNames)
    const lastName = selectRand(familyNames)

    const korName = lastName['kor'] + firstName['kor']
    const enName = lastName['en'] + ' ' + firstName['en']

    this.props.createName(korName, enName)
    e.preventDefault()
  }

  render (){
    return (
      <div style={buttonDivStyle}>
        <button type="submit" onClick={this.createBoyName.bind(this)}>Boy</button>
      </div>
    )
  }
}

export default BoySubmit;
