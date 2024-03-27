import React from "react";
import imgDestop from "../../assets/images/imgDestop.png";
import "./Banner.scss";

const Banner = ({ title }) => {
    return (
        <>
            <section className="mainContainer">
                <div className="banner">
                    <h1>{title}</h1>
                    <img src={imgDestop} alt="banner" />
                </div>
            </section>
        </>
    );
};

export default Banner;
