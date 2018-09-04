import React, { Component } from 'react';
import '../App.css';

class SwitchOff extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <input type="button" value="Switch Off" onClick={this.props.callOff} />
    );
  }
}

export default SwitchOff;
