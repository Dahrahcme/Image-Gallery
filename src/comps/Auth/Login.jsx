import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user@example.com" && password === "1Password") {
      toast.success("Login Successful");
      navigate("/user");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1 className="text-center">Tife's Bakery</h1>
        <form className="form text-center">
          <div className="form-group">
            <label htmlFor="user-email">Email</label> <br />
            <div className="mx-auto" style={{ width: "50%" }}>
              <input
                type="email"
                placeholder="Enter your email here"
                id="user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="user-password">Password</label> <br />
            <div className="mx-auto" style={{ width: "50%" }}>
              <input
                type="password"
                placeholder="Enter your password here"
                id="user-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
              />
            </div>
          </div>

          <div className="button">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>

            <Link to="/guest">
              <button className="btn">View Gallery</button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
