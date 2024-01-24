import React from "react";
import "./Header.scss";
import Navigation from "../../components/nav/Navigation";
import Logo from "../../assets/images/Logo.png";


const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa" className="logo" />

            <Navigation />
        </header>
    );
};

export default Header;
