import React, { Component } from "react";
import Kid from "./components/Kid"
import Teacher from "./components/Teacher"
import Judge from "./components/Judge"
import "./App.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      volume : 0,
      status : "nervous :{",
      stars : 0,
      leaveButton : false,
      isKidOnStage : true,
      isJudges : true,
    };

    this.updateSteps = this.updateSteps.bind(this);
    this.updateKidStatus = this.updateKidStatus.bind(this);
    this.updateKidStars = this.updateKidStars.bind(this);
    this.provideLeaveButton = this.provideLeaveButton.bind(this);
    this.askKidToLeave = this.askKidToLeave.bind(this);
    this.judgesLeft = this.judgesLeft.bind(this);
  }

  static getDerivedStateFromProps() {
    return { volume : 5 };
  }

  updateSteps(furtherSteps) {
    this.setState({furtherSteps});
  }

  updateKidStatus() {
    this.setState( {status : "happy :)"} );
  }

  updateKidStars() {
    const {stars} = this.state;
    stars + 1 === 5 ?
    this.setState( {stars : stars + 1 , furtherSteps : []} )
    :
    this.setState( {stars : stars + 1 } );
  }

  provideLeaveButton() {
    this.setState( {leaveButton : true} );
  }

  askKidToLeave() {
    this.setState( { isKidOnStage : false } );
  }
  
  judgesLeft() {
    this.setState( { isJudges : false } );
  }


  render() {
    const { isKidOnStage, isJudges, furtherSteps, status, stars, leaveButton} = this.state;
    return (
      <div className="App">
        {isKidOnStage && 
        <Kid
          dressColor="tomato"
          furtherSteps={furtherSteps}
          status={status}
          stars={stars}
          provideLeaveButton={this.provideLeaveButton} 
          judgesLeft={this.judgesLeft}
        />
        }
        <br/><br/><br/><hr/>

        <Teacher updateSteps={this.updateSteps} />

        <br/><br/><br/><hr/>

        {isJudges &&
        <div>
          <Judge updateKidStatus={this.updateKidStatus} updateKidStars={this.updateKidStars} />
          <br/>
          {leaveButton && <button onClick={this.askKidToLeave} >Ask the Kid to leave</button>}
        </div>}
      </div>
    );
  }
}

export default App;
