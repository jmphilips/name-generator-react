import React, { Component }  from 'react';
import Heading from './Components/Heading'
import BoySubmit from './Components/BoySubmit'
import GirlSubmit from './Components/GirlSubmit'
import NameDisplay from './Components/NameDisplay'

let appStyle = {
  textAlign: 'center',
  margin: 'auto',
  fontFamily: 'calibri'
}

class App extends Component {
  constructor() {
    super()
     this.state = {
      showComponent: false,
      name: ''
    }
    this.createName = this.createName.bind(this)
  }

 createName(name) {
   this.setState({ showComponent: true, name: name })
   console.log(name)
 }

  render() {
    return (
      <div style={appStyle}>
        <Heading />
        <BoySubmit createName={this.createName} />
        <GirlSubmit createName={this.createName} />
        { this.state.showComponent? <NameDisplay name={this.state.name}/> : null }
      </div>
    )
  }
}

export default App;

