import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, img,  price ,shipping, quantity} = props.product
    return (
        <div className="review-item-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-info">
                <div className="item-info">
                    <h4>{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <p>shipping: ${shipping}</p>
                </div>
                <div className="delete-btn">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;