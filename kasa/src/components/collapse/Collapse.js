import React, { useState } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";



const Collapse = ({ title, content }) => {
    // useState gestion d'ouverture/fermeture du contenu
    const [isOpen, setIsOpen] = useState(false);

    // fonction ouvrir/fermer (le contenu)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div
                className={`collapse-header ${isOpen ? "radius" : ""}`}
                onClick={toggleCollapse} // l'ouverture/Fermeture
            >
                <h3 className="collapseTitle">{title}</h3>
                <i className={`collapseIcon ${isOpen ? "open" : ""}`}>
                    <FontAwesomeIcon icon={faChevronUp} />{" "}
                </i>
            </div>
            {isOpen && ( // affichage du contenu  si isOpen est vrai
                <div className="collapseContent">
                    {Array.isArray(content) ? ( // vérifie si le contenu est un tableau
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li> // l'affichage des éléments du tableau
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p> // si le contenu n'est pas un tableau, affiche un paragraphe
                    )}
                </div>
            )}
        </div>
    );
};

export default Collapse;
