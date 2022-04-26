import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart , setCart] = useCart()
    const [pagesCount, setPagesCount] = useState(0)
    const [page , setPage] = useState(0)
    const [size, setSize] = useState(10)
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[page, size])
    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count
            const pages = Math.ceil(count/10)
            setPagesCount(pages)
        })
    },[])
    
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
    <div className="shop-container">
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
            <div className='pagination'>
                {
                    [...Array(pagesCount).keys()].map(number => <button
                    className={page === number?'selected':''}
                    key={number}
                    onClick={()=> setPage(number)}
                    >{number + 1}</button>)
                }
                {
                    <select className='select-count' onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option defaultValue='selected' value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                }
            </div>
        </div>
    );
};

export default Shop;