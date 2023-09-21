import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import data from "../data.js";
import { onDragEnd } from "../utils/dragAndDropUtils.js";



const Guest = () => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  // Use an effect to set loading state while filtering
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1 second (replace with your actual data loading)
  }, [filter]);

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <section className="py-2 container">
      <div className="row">
        <div className="col-md-6 text-md-start text-center">
          <h2>Welcome to Tife's Bakery</h2>
        </div>
        <div className="col-md-6 text-md-end text-center">
          <input type="button" value="logout" className="header-button" />
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
      {loading ? ( // Display loader while loading is true
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
    </section>
  );
};

export default Guest;
