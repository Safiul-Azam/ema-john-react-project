import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = ()=>{
    
    signOut(auth)
    }
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div className='navigation'>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/Order">Order</CustomLink>
                <CustomLink to="/manage-inventory">Manage Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {
                    user?
                    <button onClick={handleSignOut}>sign out</button> 
                    :
                <CustomLink to="/login">Log in</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;