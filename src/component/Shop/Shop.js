import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb2';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handlerAddToCart = (product)=> {
     const newCart = [...cart, product]
     console.log(newCart)
     setCart(newCart)
    }

    return (
        <div className="container">
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={handlerAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;