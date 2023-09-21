import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../data.js";
import { onDragEnd } from "../utils/dragAndDropUtils.js";
import { auth } from "./userAuth.js";
import { loginUser, validateUser, signoutUser } from "../Auth/userAuth.js"; // Import your authentication functions
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const User = () => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(data.cardData);

  // ... (other code)

  // Function to handle user login
  const handleLogin = async () => {
    const email = "user@example.com";
    const password = "MyPass01";

    const success = await loginUser(email, password);

    if (success) {
      setUser({ email }); // Set user state upon successful login
      toast.success("Logged in successfully");
    } else {
      toast.error("Login failed");
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    const success = await signoutUser();

    if (success) {
      setUser(null);
      toast.success("Logged out successfully");
    } else {
      toast.error("Error logging out");
    }
  };

  // ... (other code)

  return (
    <section className="py-2 container">
      <div className="row">
        {/* ... */}
        <div className="col-md-6 text-md-end text-center">
          {user ? (
            <button className="header-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="header-button" onClick={handleLogin}>
              Log In
            </button>
          )}
        </div>
      </div>
      <div className="row">{/* ... */}</div>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#007BFF" size={100} loading={loading} />
        </div>
      ) : (
        <>
          {user && user.email === "user@example.com" ? (
            <DragDropContext onDragEnd={onDragEnd}>
              {/* ... (drag-and-drop code) */}
            </DragDropContext>
          ) : (
            <div className="row justify-content-center content">
              {/* ... (display images for users who are not logged in) */}
            </div>
          )}
        </>
      )}
      <ToastContainer />
    </section>
  );
};

export default User;
