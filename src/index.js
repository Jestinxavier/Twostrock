import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./Storage/Context";
import Context from './Storage/Context'
import firebase from "./Firebase/config";
ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />   
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
