import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const world = "Hello World";
const pk = "Hello Pakistan";


class App extends Component {
  constructor(){
    super();

    this.state = {
      text : world,
      flag : false,
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState(){
    console.log(this);
    this.setState({
      text : this.state.flag? world : pk,
      flag : !this.state.flag,
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* -------------toggle Code----------------- */}

          <h1 className="App-title">{this.state.text}</h1>
          <button onClick={this.changeState}>click me</button>

          {/* ---------------code ends---------------- */}


        </header>
      </div>
    );
  }
}

export default App;
