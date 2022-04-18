import React from 'react';

const Checkout = ({service}) => {
    const {id,name,img,p,price} = service;


//     const navigate = useNavigate();

// //     const navigateToServiceDetail = id => {
// //    navigate(`/service/${id}`)
// //     }
    return (
        <div>
            <h2>This is checkout</h2>
            <img src={img} alt="" height={500} width={400} />
          <h2>{name}</h2>
          <p>{p}</p>
          <p>{id}</p>
          <h5>{price}</h5>
        </div>
    );
};

export default Checkout;