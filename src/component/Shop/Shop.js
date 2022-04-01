import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(()=>{
    const storedProduct = getStoredCart()
    const saveCart = []
    for(const id in storedProduct){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedProduct[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    },[products])



    const handlerAddToCart = (product)=> {
     const newCart = [...cart, product]
     console.log(newCart)
     setCart(newCart)
     addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;