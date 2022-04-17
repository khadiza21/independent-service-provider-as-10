import React from 'react';

const Service = ({service}) => {
    const {name,img,p,price} = service;
    return (
        <div>
          <img src={img} alt="" height={500} width={400} />
          <h2>{name}</h2>
          <p>{p}</p>
          <h5>{price}</h5>
        </div>
    );
};

export default Service;