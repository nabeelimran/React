import Cards, { Card } from 'react-swipe-deck';
import React, { Component } from 'react';
import ImgMediaCard from '../MaterialCard';
import './index.css';
import swal from 'sweetalert';

const data = ['Alexandre', 'Thomas', 'Lucien']

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            noMeeting : true,
            showCards:false,


        };
    }
    
  render() {
      const {noMeeting, showCards} = this.state; 
    return (
        <div>
            {noMeeting && <div>
                <h1>No meeting</h1>
                <p>You haven’t done any meeting yet!”, try creating a new meeting!</p>
                <br/>
                <button onClick={() => {this.setState({showCards:true,noMeeting : false})}}>Set a meeting</button>
            </div>}
            
            {showCards && <div className="frame-main">
                <p>Swipe right to add meeting and swipe left to ignore</p>
                <Cards onEnd={() => console.log('working')} size={[345,400]} cardSize={[345,400]} >
                    {data.map(item =>
                        <Card
                            onSwipeLeft={() => {
                                console.log('left')

                            }}
                            onSwipeRight={() => {
                                console.log('right')
                               swal("are you sure to set a meeting with this person","","info") 
                            }}>

                            <ImgMediaCard />

                            {/* <div class="container">
                                <div class="card" style={{ width: 18 + 'rem', height: 500 + 'px !important' }}>
                                    <img class="card-img-top" style={{ width: "100%" }} src={logo} alt="Card image cap" />
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div> */}
                        </Card>
                    )}
                </Cards>
            </div>
            }
        </div>
    )
  }
}



export default Dashboard

