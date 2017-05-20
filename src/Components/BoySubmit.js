import React, { Component } from 'react';

let buttonDivStyle = {
  margin: '5%',
  display: 'inline'
}

const selectRand = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

class BoySubmit extends Component {
  render (){
    return (
      <div style={buttonDivStyle}>
        <button type="submit">Boy</button>
      </div>
    )
  }
}

export default BoySubmit;
