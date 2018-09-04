import React, { Component } from 'react';
import '../App.css';

class SwitchOn extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <input type="button" value="Turn On" onClick={this.props.callOn} />
    );
  }
}

export default SwitchOn;