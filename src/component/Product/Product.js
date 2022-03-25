import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, price ,img, seller, ratings} = props.product
    return (
        <div className="product">
           <img src={img} alt="" />
            <div className="product-info">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=>props.addToCart(props.product)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;