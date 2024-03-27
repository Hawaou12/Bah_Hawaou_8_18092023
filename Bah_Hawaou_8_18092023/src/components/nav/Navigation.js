import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    return (
        <ul className="navigation">
            <li>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    Accueil
                </NavLink>
            </li>

            <li>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    A Propos
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
