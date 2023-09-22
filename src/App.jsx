import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/comps/Auth/Login";
import Guest from "../src/comps/guest/Guest";
import Error from "../src/comps/guest/Error";
import { AuthDetails } from "./comps/Auth/AuthDetails";
import Users from "./comps/loggedInUser/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/user" element={<Users />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/auth" element={<AuthDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
