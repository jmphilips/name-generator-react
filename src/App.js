import React, { Component }  from 'react';
import Heading from './Components/Heading'
import BoySubmit from './Components/BoySubmit'
import GirlSubmit from './Components/GirlSubmit'
import NameDisplay from './Components/NameDisplay'

let appStyle = {
  textAlign: 'center',
  margin: 'auto',
  fontFamily: 'Helvetica'
}

class App extends Component {
  constructor() {
    super()
     this.state = {
      showComponent: false,
      enName: '',
      korName: ''
    }
    this.createName = this.createName.bind(this)
  }

 createName(kor, en) {
   this.setState({ showComponent: true, enName: en, korName: kor })
 }

  render() {
    return (
      <div style={appStyle}>
        <Heading />
        <BoySubmit createName={this.createName} />
        <GirlSubmit createName={this.createName} />
        { this.state.showComponent? <NameDisplay enName={this.state.enName} korName={this.state.korName} /> : null }
      </div>
    )
  }
}

export default App;

