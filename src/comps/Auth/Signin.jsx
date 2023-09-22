import { signInWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import {auth} from "../../firebase"

const Signin = (e) => {
    e.preventDefault{};
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) ={
    }).catch(error)


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={SignIn}></form>
      <h1>Log In</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Signin;
