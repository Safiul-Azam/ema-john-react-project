import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;