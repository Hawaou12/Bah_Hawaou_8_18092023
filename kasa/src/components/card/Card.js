import React from "react";
import "./Card.scss";
import { NavLink } from "react-router-dom";



const Card = ({title}) => {
    return (
        <div className="Card">
      
                <div className="cards">
                <NavLink to={"/apparte"}>
                    <h2>{title}</h2>
                    </NavLink>
                </div>
               
        </div>
    );
};

export default Card;
//<a href=""> </a>