import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart , setCart] = useCart(products)
    return (
        <div>
            <div className="container">
                <div className="review-container">
                    {
                        cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;