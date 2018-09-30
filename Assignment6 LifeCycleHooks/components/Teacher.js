import React, { Component } from "react";
import "../App.css";


class Teacher extends Component {
  constructor() {
    super();

    this.state = {
    };

    this.sendDataToKid = this.sendDataToKid.bind(this);
  }
  
  sendDataToKid() {
    const furtherSteps = ['step3','step4','step5'];
    this.props.updateSteps(furtherSteps);
   }
  
   render() {
     
     return (
       <button className="light" onClick={this.sendDataToKid}>Get Help From Teacher</button>
     );
   }
}

export default Teacher;
