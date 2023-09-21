import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import data from "../data.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { onDragEnd } from "../utils/dragAndDropUtils.js";
import { Link } from "react-router-dom";

const Guest = () => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, [filter]);

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  // Function to show the toast when attempting to drag and drop
  const handleDragStart = () => {
    toast.warning("Login to enable drag and drop");
  };

  return (
    <section className="py-2 container">
      <div className="row">
        <div className="col-md-6 text-md-start text-center">
          <h2>Welcome to Tife's Bakery</h2>
        </div>
        <div className="col-md-6 text-md-end text-center">
          <Link to="/">
            <input type="button" value="Log In" className="header-button" />
          </Link>
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
          {dataSearch.map((item, index) => {
            return (
              <div
                className="col-11 col-md-6 col-lg-3 mx-0 mb-4 wrapper"
                key={index}
                onDragStart={handleDragStart}
                draggable={false} // Disable drag-and-drop
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
  );
};

export default Guest;
