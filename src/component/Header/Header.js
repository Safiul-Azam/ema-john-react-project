import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div className='navigation'>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/Order">Order</CustomLink>
                <CustomLink to="/manage-inventory">Manage Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;