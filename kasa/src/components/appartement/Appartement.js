import React from 'react';
import { NavLink } from "react-router-dom";
import data from "../data/data.json";

const Appartement = () => {
    return (
        <div>
            <div className="container">
            {data.map((apartment) => (
                <NavLink
                 // création de liens vers la fiche détaillée des appartements
                    to={`/logement/${apartment.id}`}
                    // un ID unique pour chaque appartement
                    key={apartment.id} 
                    //className="card"
                >
                    <img src={apartment.cover} alt={apartment.title} />
                    <h3>{apartment.title}</h3>
                </NavLink>
            ))}
        </div>
        </div>
    );
};

export default Appartement;