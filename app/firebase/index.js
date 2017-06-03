import firebase from 'firebase';

try{
    var config = {
        apiKey: "AIzaSyDStMnSzde5xQBA0mjFwOrpxjQPY4KxEPM",
        authDomain: "todoapp-3b4bc.firebaseapp.com",
        databaseURL: "https://todoapp-3b4bc.firebaseio.com",
        projectId: "todoapp-3b4bc",
        storageBucket: "todoapp-3b4bc.appspot.com",
        messagingSenderId: "945095260258"
    };
    firebase.initializeApp(config);
} catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;