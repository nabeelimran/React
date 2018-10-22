import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAP93o2poVvJQavvXin81Y3W2Gv-aBVf9o",
    authDomain: "meetingappbynabeel.firebaseapp.com",
    databaseURL: "https://meetingappbynabeel.firebaseio.com",
    projectId: "meetingappbynabeel",
    storageBucket: "meetingappbynabeel.appspot.com",
    messagingSenderId: "811606330618"
};
firebase.initializeApp(config);

export default firebase;