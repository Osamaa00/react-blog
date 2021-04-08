import React from 'react'
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__items">
                <div className="navbar__left">
                    <img  src={ logo } height="50" width="50" />
                    <h3>React Blog</h3>
                </div>
                
                <div className="navbar__auth">
                    <a href="#">Signup</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
