import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../Storage/Context";
import "./Signup.css";

export default function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firebase, "Firebase*********");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result,"result*****");
        result.user.updateProfile({ displayName: username }).then(() => {
          console.log(result.user.uid, username, phone, "000000");
          firebase
            .firestore()
            .collection("usem")
            .add({
              id: result.user.uid,
              username: username,
              phone: phone,
            })
            .then((msg) => {
              // console.log(msg,"msg*********")
              history.push("/login");
            });
        });
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{history.push("/login")}}>Login</a>
      </div>
    </div>
  );
}
