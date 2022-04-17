import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,img,p,price} = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
   navigate(`/service/${id}`)
    }
    return (
        <div>
          <img src={img} alt="" height={500} width={400} />
          <h2>{name}</h2>
          <p>{p}</p>
          <h5>{price}</h5>
          <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Detail</button>
        </div>
    );
};

export default Service;