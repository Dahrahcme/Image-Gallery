import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    // Check if the user entered the correct email and password
    if (email === "user@example.com" && password === "MyPass01") {
      toast.success("login successful");
      // Redirect to the User component
      navigate("/user");
    } else {
      navigate("/");
      // Show a toast message for login failure
      toast.error(".");
    }
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="text-center">Tife's Bakery</h1>
        <form className="form text-center">
          <label htmlFor="user-email">Email</label> <br />
          <input
            type="email"
            placeholder="Enter your email here"
            id="user-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="user-password">Password</label> <br />
          <input
            type="password"
            placeholder="Enter your password here"
            id="user-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-primary login" onClick={handleLogin}>
            Log Out
          </button>
          <Link to="/guest">
            <button className="btn btn-secondary guest">View Gallery</button>
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default User;
