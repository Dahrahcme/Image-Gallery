import React from "react";
import error from "../assets/img/error.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div class="container">
      <div class="d-flex justify-content-center align-items-center flex-column min-vh-100 bg-lightRose">
        <div>
          <img src={error} alt="under construction svg" />
        </div>
        <p class="text-center text-rose font-bold fs-5">
          Oops! This page cannot be found
        </p>
        <p
          class="text-center text-rose font-semibold fs-4 hover-underline cursor-pointer"
          onClick={() => navigate("/*")}
        >
          Click here to go back
        </p>
      </div>
    </div>
  );
};

export default Error;
