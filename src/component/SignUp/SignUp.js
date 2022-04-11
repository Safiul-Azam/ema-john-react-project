import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    if(user) {
        navigate('/shop')
    }
    const handleConfirmPasswordBlur = e=>{
        setConfirmPassword()
    }
    const handleSubmitBlur = e =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError('password and confirm password dose not match !')
           return;
        }
        if(password.length < 6){
            setError('password must be 6 characters or more then it!')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
        <div className='form-field'>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmitBlur}>
        <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="Email" placeholder='Your Email' />
        </div>
        <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="Password" placeholder='Your Password' />
        </div>
        <div className="input-group">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="ConfirmPassword" placeholder='Your Confirm Password' />
        </div>
        <p style={{color: 'red'}}>{error}</p>
        <input className='login' type="submit" value="Sign Up" />
        <p className='new-account'>Already have an account? <Link to='/signup'>log in</Link></p>
        </form>
        </div>
    </div>
    );
};

export default SignUp;