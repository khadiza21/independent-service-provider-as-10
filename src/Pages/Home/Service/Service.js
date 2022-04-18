import React from "react";
import "./Service.css";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, p, price } = service;

  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };


  // Each service should have a relevant name, price, image, short description, and a specific button. 
  return (
    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">
      <div className="">
        <img className="img-r " src={img} alt="" />
        <Fade top>
          <h3 className="ps-3 mt-2 fw-bold"> {name}</h3>
          <p>{p}</p>
          <h5>{price}</h5>
        </Fade>
        <Fade bottom>
          <p className="my-3 ">
            {" "}
            <span className="fw-bold">Service Detail: </span>{" "}
            <span className="review-text">{p}</span>{" "}
          </p>
        </Fade>
      </div>

      <Fade bottom>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary"
        >
          Detail
        </button>
      </Fade>
    </div>
  );
};

export default Service;
