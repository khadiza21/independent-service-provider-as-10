import React from 'react';

const Expert = ({expert}) => {
    const {name,img} = expert;
    return (
        <div>
            <h5>expert pp pp pp</h5>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Expert;