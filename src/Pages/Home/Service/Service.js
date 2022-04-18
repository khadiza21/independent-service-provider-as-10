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
        <div className="h-50 mb-4 d-flex justify-content-center align-items-center rounded">
           <img className="img-r img-fluid h-50 w-50" src={img} alt="" />
        </div>
       


        <div>

          <Fade top>
          <h4 className=" mt-2 fw-bold">Service Name: {name}</h4>
        
          <h5>Price: {price}</h5>
        </Fade> 
          <Fade bottom>
          <p className="my-3 ">
       
            <span className="fw-bold">Service Detail: </span>{" "}
            <span className="service-text">{p}</span>{" "}
          </p>
        </Fade>

       
      <Fade bottom>
        <button
       
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary"
        >
          Detail
        </button>
      </Fade> 


        </div>
       
      
      </div>

    </div>
  );
};

export default Service;
