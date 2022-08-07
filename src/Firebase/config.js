import firebase from "firebase"
import 'firebase/auth';
import "firebase/firestore"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCCScrTS3VPAUFnYzcfltWcO8OnvPAG49Q",
    authDomain: "twostrok-82ee4.firebaseapp.com",
    projectId: "twostrok-82ee4",
    storageBucket: "twostrok-82ee4.appspot.com",
    messagingSenderId: "232422675788",
    appId: "1:232422675788:web:b41e7566f7e5682e0fabe9",
    measurementId: "G-FT0MKZ59GG"
  };

 export default  firebase.initializeApp(firebaseConfig);