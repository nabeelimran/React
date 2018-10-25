import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./Config"
import FbButton from "./Components/FB_button"
import LogoutButton from "./Components/Logout_button"
import BasicInfo from "./Components/BasicInfo"
import ProfilePics from "./Components/ProfilePics";
import BaveragesAndTime from "./Components/baveragesAndTime";
import Dashboard from "./Components/Dashboard";
import AppBar from "./Components/AppBar";
import Avatar from "./Components/Avatar";
import Map from "./Components/Map";


var provider = new firebase.auth.FacebookAuthProvider();
const DBRef = firebase.database().ref("users/");

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLogin:false,
      step:1,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.saveBasicInfo = this.saveBasicInfo.bind(this);
    this.saveProfilePics = this.saveProfilePics.bind(this);
    this.saveBaveragesAndTime = this.saveBaveragesAndTime.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
    this.pushUserData = this.pushUserData.bind(this);
  }

  login() {
    var user;
    const saveUserData = user => {
      this.setState({userName:user.displayName, userEmail:user.email, FBImgURL:user.photoURL, userID:user.uid, isLogin:true});
      console.log("logged in");
    }
    firebase.auth().signInWithPopup(provider).then(function(result) {
      user = result.user;
      saveUserData(user);     
    }).catch(function(error) {
      console.log( error.message);
    });
  }
  
  logout() {
    firebase.auth().signOut().then(() => {
      console.log("Sign-out successful");
      this.setState({ step:1 });
      this.setState({isLogin:false});
    }).catch(function(error) {
    });
  }

  saveBasicInfo(userName, phNumber) {
    const {step} = this.state;
    this.setState({ step:step+1, nickName:userName, phNumber});
  }

  saveProfilePics(images) {
    const {step} = this.state;
    const imageURLs = [];
    images.map( (value,index) => {
      const timestamp = Number(new Date());
      const storageRef = firebase.storage().ref(timestamp.toString()+value.name);
      storageRef.put(value)
      .then( snapshot => snapshot.ref.getDownloadURL())
      .then( url => imageURLs.push(url));
      return null;
    });

    this.setState({ step:step+1, imageURLs});
  }

  saveBaveragesAndTime(baverages, durations) {
    const {step} = this.state;
    this.setState({ step:step+1, baverages, durations});
  }
  
  saveLocation(coords) {
    const {step} = this.state;
    this.setState({step:step+1, coords},() => {this.pushUserData()} );
  }
  pushUserData() {
    const {userName, userEmail, userID,
      FBImgURL, nickName, phNumber,
      imageURLs, baverages, durations,
      coords  } = this.state;

    const user = {userName, userEmail, userID,
      FBImgURL, nickName, phNumber,
      imageURLs, baverages, durations,
      coords};
    
    DBRef.child(userID).set(user);
  }


  render() {
    const {isLogin, step, FBImgURL, userID} = this.state;

    return <div className="App">
        <AppBar>
          {!isLogin ? <FbButton login={this.login} />
           : 
            <span className="avatar">
              <Avatar fbimg={FBImgURL} />
              <LogoutButton logout={this.logout} />
            </span>}
        </AppBar>
        {/* {!isLogin ?
          <div className="login-screen">
            <h1>Please Login/signup to continue</h1>
          </div> 
          :
          <div>
            {step < 4 && <div className="registration">
                {step === 1 && <BasicInfo saveBasicInfo={this.saveBasicInfo} />}
                {step === 2 && <ProfilePics saveProfilePics={this.saveProfilePics} />}
                {step === 3 && <BaveragesAndTime saveBaveragesAndTime={this.saveBaveragesAndTime} />}
              </div>}
            {step === 4 && <Map saveLocation={this.saveLocation} />} */}
            {isLogin && step === 1 && <Dashboard userID={userID}/>}
          {/* </div>} */}
      </div>;
  }
}
      
export default App;
