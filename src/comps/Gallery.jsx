import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Import your image data from data.js
import cardData from "../comps/data.js"; // Make sure the path is correct

const Gallery = () => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Rename dataSearch to something else, e.g., galleryData
  const [galleryData, setGalleryData] = useState([]);

  const navigate = useNavigate();

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const onDragEnd = (e, startIndex) => {
    e.preventDefault();
    const dropIndex = parseInt(e.target.dataset.index);

    const newGalleryData = [...galleryData];
    const [draggedItem] = newGalleryData.splice(startIndex, 1);
    newGalleryData.splice(dropIndex, 0, draggedItem);

    setGalleryData(newGalleryData);
  };

  const simulateLogin = () => {
    const email = "user@example.com";
    const password = "MyPass01";

    if (email === "user@example.com" && password === "1Password") {
      setLoggedIn(true);
      setGalleryData(cardData.cardData); // Load image data when logged in
      toast.success("Login successful");
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1 second (replace with your actual data loading)
  }, [filter]);

  const filteredData = galleryData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="py-2 container">
        <div className="row">
          <div className="col-md-6 text-md-start text-center">
            <h2>Welcome to Tife's Bakery</h2>
          </div>
          <div className="col-md-6 text-md-end text-center">
            {!loggedIn ? (
              <input
                type="button"
                value="Log Out"
                className="header-button"
                onClick={simulateLogin}
              />
            ) : (
              <p>Logged in as user@example.com</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Search term"
                value={filter}
                onChange={searchText}
              />
            </div>
          </div>
        </div>
        {loading ? (
          <div className="text-center">
            <ClipLoader color="#007BFF" size={100} loading={loading} />
          </div>
        ) : (
          <div className="row justify-content-center content">
            {loggedIn &&
              filteredData.map((item, index) => {
                return (
                  <div
                    className="col-11 col-md-6 col-lg-3 mx-0 mb-4 wrapper"
                    key={index}
                    draggable={loggedIn}
                    onDragStart={(e) => e.preventDefault()}
                    onDragEnd={(e) => onDragEnd(e, index)}
                    data-index={index}
                  >
                    <div className="card p-0 overflow-hidden h-100 shadow">
                      <img src={item.img} alt="" className="card-img" />
                      <p className="img-tag text-center">{item.tag}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        <ToastContainer />
      </section>
    </DndProvider>
  );
};

export default Gallery;
