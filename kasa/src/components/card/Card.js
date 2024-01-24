import React from "react";
import "./Card.scss";
import { NavLink } from "react-router-dom";


const Card = ({ title, cover, id }) => {
    return (
        <div className="Card">
           
                {/* création de liens vers la fiche détaillée des appartements */}
                <NavLink to={`/logement/${id}`}>
              
              <div className="cards">
                    <img  src={cover} alt={title} className="imageCard"/>

                    <figcaption className="card-figure">
                    <h2 className="card-title">{title}</h2>
                    </figcaption>
                    </div>
                </NavLink>
           
        </div>
    );
};

export default Card;
