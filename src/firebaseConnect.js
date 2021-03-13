import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAbhpRbsJ-IU6ghw2CmPjDSESaFjvqBd3U",
    authDomain: "anhnguyen-7c584.firebaseapp.com",
    projectId: "anhnguyen-7c584",
    storageBucket: "anhnguyen-7c584.appspot.com",
    messagingSenderId: "435615344627",
    appId: "1:435615344627:web:58e3d457ed422b32de9486",
    measurementId: "G-SXFTV6XS7L"
};

if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('/notelist/'+'note_1');
data.once("value").then(function(snapshot) {
    console.log('ok');
    console.log(snapshot);
});