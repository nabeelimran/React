import React, { Component } from 'react';
import bulb from './bulb.jpg';
import bulbGlow from './bulbGlow.webp';
import bulbBroken from './bulbBroken.jpg';
import OnComponent from './SwitchOn/SwitchOn';
import OffComponent from './SwitchOff/SwitchOff';
import BreakComponent from './BreakBulb/BreakBulb';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on : false,
      off : false,
      broken : false,
    }

    this.Break = this.Break.bind(this);
    this.TurnOn = this.TurnOn.bind(this);
    this.TurnOff = this.TurnOff.bind(this);
  }


  TurnOn() {
    this.setState({ on : true, off : false, broken : false })
  }
  TurnOff() {
    this.setState({ on : false, off : true, broken : false })
  }
  Break() {
    this.setState({ on : false, off : false, broken : true })
  }



  render() {
    const { on , off , broken } = this.state;
    return (
      <div className="App">
        <div className="dabba">
          <hr className="line" />
          <h1 className="App-title App-header">Bulb n Props</h1>
          <hr className="line" />
        </div>
        { off && <span><p>From OffComponent</p><img src={bulb} className="size-img" alt="bulb" /></span> }

        { on && <span><p>From OnComponent</p><img src={bulbGlow} className="size-img" alt="bulb" /></span> }
        
        { broken && <span><p>From BreakComponent</p><img src={bulbBroken} className="size-img" alt="bulb" /></span> }

        { !on && !off && !broken && <img src={bulb} className="size-img" alt="bulb" /> }
        <br/>
        <OnComponent callOn={this.TurnOn}/>
        &nbsp;
        <OffComponent callOff={this.TurnOff}/>
        &nbsp;
        <BreakComponent callBreak={this.Break} />
      </div>
    );
  }
}

export default App;