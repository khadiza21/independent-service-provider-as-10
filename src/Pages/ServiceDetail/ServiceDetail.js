import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h3>welcome to see details {serviceId}</h3>
            <div className="text-center">
                  <Link to="/checkout">
                      <button className='btn btn-primary'>Proceed Checkout</button>
                  </Link>
            </div>
          
        </div>
    );
};

export default ServiceDetail;