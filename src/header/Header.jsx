/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header  justify-between   '>
            <div>
            <h1 className='text-5xl'>Knowledge Cafe</h1>
            </div>
            <div>
            <img className='header-img rounded-full' src="../../public/img/Shifat ullah.JPG" alt="" />
            
            </div>
        </div>
    );
};

export default Header;