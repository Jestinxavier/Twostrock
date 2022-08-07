import React from 'react';
import { useContext,useState } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Storage/Context';
import './Login.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {firebase}= useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin =(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }).then(()=>history.push("/"));
  }).catch((error)=>{
      alert(error,"msg")
      let c = error.message
      swal({
        title: "Sorry!",
        text: c,
        icon: "error",
        button: "Aww yiss!",
      });
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin} autoComplete="off">
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{history.push('/signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
