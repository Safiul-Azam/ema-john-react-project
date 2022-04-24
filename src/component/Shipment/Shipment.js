import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const[user] = useAuthState(auth)
    const [name, setName] =useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePhoneBlur = e =>{
        setPhone(e.target.value)
    }
    const handleAddressBlur = e =>{
        setAddress(e.target.value)
    }

    const handleSubmitBlur = e =>{
        e.preventDefault()
    }
    return (
        <div className='form-container'>
        <div className='form-field'>
        <h2>Shipping information</h2>
        <form onSubmit={handleSubmitBlur}>
        <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleEmailBlur} type="name" name="name" placeholder='Your Name' />
        </div>
        <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input value={user?.email} readOnly type="email" name="Email" placeholder='Your Email' />
        </div>
        <div className="input-group">
            <label htmlFor="phone">Your Phone</label>
            <input onBlur={handlePhoneBlur} type="number" name="phone" placeholder='Your Phone' />
        </div>
        <div className="input-group">
            <label htmlFor="address">Your Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" placeholder='Your Address' />
        </div>
        <input className='login' type="submit" value="Shipment" />
       
        </form>
        </div>
    </div>
    );
};

export default Shipment;