import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    // Check if the user entered the correct email and password
    if (email === "user@example.com" && password === "1Password") {
      // Redirect to the User component
      navigate("/user");
    } else {
      // Show a toast message for login failure
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center mt-3">
      <div className="container">
        <h1 className="text-center">Tife's Bakery</h1>
        <form className="form text-center">
          <div className="form-group text-center">
            <label htmlFor="user-email">Email</label> <br />
            <input
              type="email"
              placeholder="Enter your email here"
              id="user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3 mx-auto" // Center the input horizontally
              style={{ width: "50%" }} // Set width to 50% of the screen
            />
          </div>
          <div className="form-group text-center">
            <label htmlFor="user-password">Password</label> <br />
            <input
              type="password"
              placeholder="Enter your password here"
              id="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3 mx-auto" // Center the input horizontally
              style={{ width: "50%" }} // Set width to 50% of the screen
            />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <button className="btn btn-primary btn-block">Login</button>
              </div>
              <div className="col">
                <Link to="/guest">
                  <button className="btn btn-secondary btn-block">
                    View Gallery
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
