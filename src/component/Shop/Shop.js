import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useProducts()
    // const [cart , setCart] = useState([])
    const [cart , setCart] = useCart(products)

    
    const handlerAddToCart = (selectedProduct)=> {
        const exists = cart.find(product => product._id === selectedProduct._id)
        let newCart = []
        if(!exists){
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }else{
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest,exists]
        }
        // console.log(selectedProduct)
    //  const newCart = [...cart, selectedProduct]
    //  console.log(newCart)
     setCart(newCart)
     addToDb(selectedProduct._id)
    }

    return (
        <div className="container">
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    addToCart={handlerAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/order'>
                     <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;