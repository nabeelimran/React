import Cards, { Card } from 'react-swipe-deck';
import React, { Component } from 'react';
import ImgMediaCard from '../MaterialCard';
import firebase from "../../Config"
import './index.css';
import swal from 'sweetalert';

const data = ['Alexandre', 'Thomas', 'Lucien'];
const DBRef = firebase.database().ref("users/");


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            noMeeting: true,
            showCards: false,


        };
        this.filterUsers = this.filterUsers.bind(this);
    }
    componentDidMount() {
        const allUsers = [];
        DBRef.on("value",snap => {
            const vals = Object.keys(snap.val()).map(key => snap.val()[key]);            
            this.setState({ allUsers:vals },() => {saveUsers();});
        });

        const saveUsers = () => {
            var thisUser
            DBRef.child(this.props.userID).on("value",snap => {
                const thisUser = snap.val();
                this.setState({thisUser},() => {this.filterUsers();});
            });
        }
        
        

        
        
        
    }

    filterUsers() {
        const {thisUser, allUsers} = this.state;

        setTimeout(() => {
            const filteredUsers = allUsers.filter(user => {
                if(thisUser.userID === user.userID) return false;
                return thisUser.baverages.some(bav => user.baverages.includes(bav)) && thisUser.durations.some(dur => user.durations.includes(dur))  
            })
            this.setState({filteredUsers});
        }, 500);

    }



    render() {
        const {thisUser, filteredUsers} = this.state;
        console.log(thisUser, filteredUsers);
        const { noMeeting, showCards } = this.state;
        if(!filteredUsers) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
                {noMeeting && <div>
                    <h1>No scheduled meeting</h1>
                    <p>You haven’t set any meeting yet!”, try creating a new meeting!</p>
                    <br />
                    <button onClick={() => { this.setState({ showCards: true, noMeeting: false }) }}>Set a meeting</button>
                </div>}

                {showCards && <div className="frame-main">
                    <p>Swipe right to add meeting and swipe left to ignore</p>
                    <Cards onEnd={() => console.log('working')} size={[345, 400]} cardSize={[345, 400]} >
                        {filteredUsers.map(user =>
                            <Card
                                onSwipeLeft={() => {
                                    console.log('left')
                                }}
                                onSwipeRight={() => {
                                    console.log('right')
                                    swal("are you sure to set a meeting with this person", "", "info")
                                }}>
                                <ImgMediaCard name={user.userName} nickName={user.nickName} images={user.imageURLs} />
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
