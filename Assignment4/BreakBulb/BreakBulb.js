import React, { Component } from 'react';
import '../App.css';

class Broke extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <input type="button" value="Break The Bulb" onClick={this.props.callBreak} />
    );
  }
}

export default Broke;
