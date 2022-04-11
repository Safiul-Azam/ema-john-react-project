import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping * product.quantity
        quantity = quantity + product.quantity
    }
    // const tex = Number(total * 0.1.toFixed(2))
    const tex = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tex
    return (
        <div className="cart-section">
            <h2>Order summary</h2>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:{total} </p>
            <p>Total Shipping Charge:{shipping} </p>
            <p>Tax:{tex}</p>
            <h4>Grand Total:{grandTotal} </h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;