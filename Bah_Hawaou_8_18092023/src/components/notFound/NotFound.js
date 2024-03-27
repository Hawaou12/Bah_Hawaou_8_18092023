import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
import notFound from "../../assets/images/logo404.png";

const NotFound = () => {
    return (
        <div className="notFound">
            <span className="notFoundImg">404</span>

            <p className="pageError">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default NotFound;
