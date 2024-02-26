import React from 'react';
import "./styles/navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <p className='navbar-logo'>Logo</p>

            <ul className='navbar-list'>
                <li className='navbar-list-element'>Home</li>
                <li className='navbar-list-element'>Como chegar?</li>
                <li className='navbar-list-element'>Contato</li>
            </ul>
        </div>
    );
}

export default Navbar;
