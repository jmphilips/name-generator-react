import React, { Component }  from 'react';
import Heading from './Components/Heading'
import BoySubmit from './Components/BoySubmit'
import GirlSubmit from './Components/GirlSubmit'

let appStyle = {
  textAlign: 'center',
  margin: 'auto',
  fontFamily: 'calibri'
}

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Heading />
        <BoySubmit />
        <GirlSubmit />
      </div>
    )
  }
}

export default App;

