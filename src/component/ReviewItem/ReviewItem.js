import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
    const {product, handlerRemoveFromCart} = props
    const {name, img,  price ,shipping, quantity} = product
    return (
        <div className="review-item-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-info">
                <div className="item-info">
                    <h4>{name}</h4>
                    <p>Quantity: <span className='color'>{quantity}</span></p>
                    <p>Price: <span className='color'>${price}</span></p>
                    <p>shipping: <span className='color'>${shipping}</span></p>
                </div>
                <div className="delete-btn">
                    <button onClick={()=> handlerRemoveFromCart(product)} className='delete-button'>
                    <FontAwesomeIcon className='icon-btn' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;