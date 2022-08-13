import React, { useContext, useEffect } from "react";
import "./App.css";

/**
 * ?  =====Import Components=====
 */
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "../src/Pages/Signup"
import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import View from "./Pages/ViewPost"
import Posts from "./Storage/PostContext" 

import { AuthContext, FirebaseContext } from "./Storage/Context";

function App() {
const { firebase } = useContext(FirebaseContext);
  const {setUser} = useContext(AuthContext)
  useEffect(() => {
    // console.log(user,"user,***");
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
   
  }, [])
  
  return (
    <div>
      <Posts>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/view'>
        <View />
        </Route>
      </Router>
      </Posts>
    </div>
  );
}

export default App;
