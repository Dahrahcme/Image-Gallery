import {auth} from "../../firebase"; // Import the firebase configuration

// Function to log in a user with email and password
const loginUser = async (email, password) => {
  try {
    await auth.auth().signInWithEmailAndPassword(email, password);
    // User successfully logged in
    return true; // Return true to indicate successful login
  } catch (error) {
    // Handle login error
    console.error("Login error:", error.message);
    return false; // Return false to indicate failed login
  }
};



// Function to validate if the user is currently authenticated
const validateUser = () => {
  const user = auth.auth().currentUser;
  return user ? true : false;
};

// Function to sign out the currently authenticated user
const signoutUser = async () => {
  try {
    await auth.auth().signOut();
    // User successfully signed out
    return true; // Return true to indicate successful signout
  } catch (error) {
    // Handle signout error
    console.error("Signout error:", error.message);
    return false; // Return false to indicate failed signout
  }
};

export { loginUser, validateUser, signoutUser };
