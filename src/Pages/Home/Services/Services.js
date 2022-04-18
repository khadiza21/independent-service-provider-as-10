import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Service from "../Service/Service";
import "./Services.css";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

 
  return (
    <div>
        <Fade top>
        <h1 className="text-center py-4 fw-bold mt-5">
          My <span className="sp">Services </span>
        </h1>
      </Fade>
    <div id="services"  className=" container reviews-container my-5 pb-5">
     
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}

     
    </div></div>
  );
};

export default Services;
