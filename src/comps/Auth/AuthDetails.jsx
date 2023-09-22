// import React, { useState, useEffect } from "react";
// import { auth } from "../../firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import Guest from "../guest/Guest";

// // Function to log in a user with email and password
// const loginUser = async (email, password) => {
//   try {
//     await auth.auth().signInWithEmailAndPassword(email, password);
//     // User successfully logged in
//     return true; // Return true to indicate successful login
//   } catch (error) {
//     // Handle login error
//     console.error("Login error:", error.message);
//     return false; // Return false to indicate failed login
//   }
// };

// // Function to validate if the user is currently authenticated
// const validateUser = () => {
//   const user = auth.auth().currentUser;
//   return user ? true : false;
// };

// // Function to sign out the currently authenticated user
// const signoutUser = async () => {
//   try {
//     await auth.auth().signOut();
//     // User successfully signed out
//     return true; // Return true to indicate successful signout
//   } catch (error) {
//     // Handle signout error
//     console.error("Signout error:", error.message);
//     return false; // Return false to indicate failed signout
//   }
// };

// const AuthDetails = () => {
//   const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });
  // }, [])

  // return (
    // <div>
    //   {authUser ?  : <Guest />}
    // </div>
//   )
// };

// export { loginUser, validateUser, signoutUser, AuthDetails };
