import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const url = `http://localhost:5000/product/`
        fetch(url, {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
        console.log(data);
    } 
        

    return (
        <div className='w-50 mx-auto'>
            <h2>Add New Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Seller'  {...register("seller", )} />
                <input className='mb-2' placeholder='Price'  type="number" {...register("price",)} />
                <input className='mb-2' placeholder='Ratings'  type="number" {...register("ratings",)} />
                <input className='mb-2' placeholder='photo url'  type="text" {...register("img",)} />
                <input className='mb-2' placeholder=''  type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;