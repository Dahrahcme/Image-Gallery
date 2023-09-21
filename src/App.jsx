import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/comps/Auth/Login";
import User from "../src/comps/Auth/User";
import Guest from "../src/comps/guest/Guest";
import Error from "../src/comps/guest/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;