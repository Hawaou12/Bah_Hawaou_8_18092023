import React from "react";
const Card = ({title, imageURL}) => {
    return (
        <section className="Card">
            <div className="ContainerCard">
                <div className="BgFiltre">
                    <h1>{title}</h1>
                </div>
            </div>
        </section>
    );
};

export default Card;
