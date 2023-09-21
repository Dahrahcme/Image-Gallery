import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/comps/Auth/Login";
// import User from "../src/comps/Auth/User";
import Guest from "../src/comps/guest/Guest";
import Error from "../src/comps/guest/Error";
import Gallery from "./comps/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/user" element={<Gallery />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
