import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products , setProducts] = useProducts()
    const handleDelete = id => {
        const url = `http://localhost:5000/product/${id}`
        console.log(url)
        fetch(url, {
            method:'delete'
        })
        .then(res => res.json())
        .then(data => {
            const restProduct = products.filter(product => product._id !== id)
            setProducts(restProduct)
        })
    }
    return (
        <div>
            <h2>Manage Product</h2>
        {
          products.map(product => <div 
          key={product._id}
          >
              <h3>{product.name} <button onClick={()=>handleDelete(product._id)}>X</button></h3>
          </div>)
        }
        </div>
    );
};

export default ManageProduct;