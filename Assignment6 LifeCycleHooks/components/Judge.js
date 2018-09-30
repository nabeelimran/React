import React, { Component } from "react";
import "../App.css";

class Judge extends Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      available: false
    };

    this.applaud = this.applaud.bind(this);
    this.provideStars = this.provideStars.bind(this);
  }

  applaud() {
    this.props.updateKidStatus();
  }

  provideStars() {
    const { stars } = this.state;

    this.setState({ stars: stars + 1 });
    this.props.updateKidStars();
  }

  shouldComponentUpdate (newprops,newState) {
    return newState.stars <= 5;
  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button className="light" type="button" onClick={this.applaud}>
          Appreciate performance
        </button>
        <br/><br/>
        <button className="light" type="button" onClick={this.provideStars}>
          Provide stars
        </button>
        <br/><br/>
        Kid is available: {available}
        Stars gained: {stars}
      </div>
    );
  }
}

export default Judge;
