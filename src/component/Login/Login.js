import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    if(user){
        navigate('/shop')
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    const handleSubmitBlur = e =>{
        signInWithEmailAndPassword(email, password)
        e.preventDefault();
    }
    return (
        <div className='form-container'>
            <div className='form-field'>
            <h2>Log in</h2>
            <form onSubmit={handleSubmitBlur} >
            <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="Email" placeholder='Your Email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="Password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="Password" placeholder='Your Password' required />
            </div>
            {
                loading && <p><p>Loading...</p></p>
            }
            <p style={{color:'red'}}>{error?.message}</p>
            <input className='login' type="submit" value="Log in" />
            <p className='new-account'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            <input type="button" value="Continue with Google" />
            </form>
            </div>
        </div>
    );
};

export default Login;