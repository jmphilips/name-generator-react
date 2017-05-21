import React, { Component } from 'react';

class NameDisplay extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.enName}</h1>
        <h1>{this.props.korName}</h1>
      </div>
    )
  }
}

export default NameDisplay