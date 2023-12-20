import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <div className='header'>
               <img
                src="/images/Logo.png"
                alt="Logo Kasa"
                className="logo-desktop"
            />
            <img
                src="/images/Logo-mobile.png"
                alt="Logo Kasa"
                className="logo-mobile"
            />
        </div>
    );
};

export default Header;