import React from "react";

const Banner = ({title, imageURL}) => {
    //const title = "Chez vous, et partout ailleurs";
    return (
        <>
            <section className="mainContainer">
                <div className="opacityBg">
                <h1>{title}</h1>
                </div>
            </section>
        </>
    );
};

export default Banner;
