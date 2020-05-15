import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDTmBItGXcBOVpNl1KXBtutoYr9JwCsu10",
    authDomain: "idook-console.firebaseapp.com",
    databaseURL: "https://idook-console.firebaseio.com",
    projectId: "idook-console",
    storageBucket: "idook-console.appspot.com",
    messagingSenderId: "395446687801",
    appId: "1:395446687801:web:28626e91cd1f8349d395e8",
    measurementId: "G-WBZ3XEM7GX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;
