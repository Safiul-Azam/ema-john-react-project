import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart , setCart] = useCart(products)
    const handlerRemoveFromCart = product =>{
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div>
            <div className="container-product">
                <div className="review-container">
                    {
                        cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handlerRemoveFromCart={handlerRemoveFromCart}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/shipment'>
                        <button>Proceed shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;