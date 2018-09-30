import React, { Component } from "react";
import "../App.css";


class Kid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: 'nervous',
            danceSteps: [],
            currentStepIndex: 0,
            startedPerforming: false
        };

        this.qualified = this.qualified.bind(this);
    }
    
    qualified() {
        this.setState( { startedPerforming : false } );
        this.props.provideLeaveButton();
    }

    static getDerivedStateFromProps (props , state) {
        return {
            danceSteps : state.danceSteps.length < 5 ? [ ...state.danceSteps , ...props.furtherSteps] : state.danceSteps ,
            startedPerforming : !!props.furtherSteps.length,
            emotion : props.status,
        }
    }

    componentDidUpdate( prevProps , prevState ) {
        if(prevProps.stars === 4 && this.props.stars === 5 )
        {this.qualified();}
    }

    componentDidMount() {
        this.setState( {danceSteps : [ "step1","step2" ]} )
    }

    componentWillUnmount() {
        this.props.judgesLeft();
    }
    
    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
        return (
            <div>
                <div>dressColor: {dressColor}</div>
                <div className="colordiv" style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Emotion: {emotion}</div>
                {startedPerforming && 
                <div>
                    <hr/>
                    <div>Performance started</div>
                    Current Step: {danceSteps[currentStepIndex]}
                    <br/>
                    <button className="light" onClick={ () => this.setState({ currentStepIndex: this.state.currentStepIndex<3? currentStepIndex + 1 : 4}) }>
                        Perform Next Step
                    </button>
                </div>
                }
            </div>
        );
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };


export default Kid;
