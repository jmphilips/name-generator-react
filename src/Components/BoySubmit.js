import React, { Component } from 'react';
import { familyNames } from '../Data/family.json';
import { boysNames } from '../Data/boys.json';

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
    this.props.createName(selectRand(familyNames) + " " + selectRand(boysNames))
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
