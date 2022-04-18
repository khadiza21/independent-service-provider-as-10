import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h3>welcome to see details {serviceId}</h3>
      <div className="text-center"></div>
    </div>
  );
};

export default ServiceDetail;
