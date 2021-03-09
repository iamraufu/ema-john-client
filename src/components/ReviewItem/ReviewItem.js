import React from 'react';

const ReviewItem = (props) => {
      const {name,quantity,img,price,seller} = props.product;
      return (
            <div className='product'>
                  <img src={img} alt="logo" />
                  <h2>${price}</h2>
                  <h6>By <small>{seller}</small></h6>
                  <h4>{name}</h4>
                  <h5>Quantity: {quantity}</h5>
                  <button> Remove</button>
            </div>
        
      );
};

export default ReviewItem;