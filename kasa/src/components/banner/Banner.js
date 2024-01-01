import React from "react";
import IMG from "../../assets/images/IMG.png";
import "./Banner.scss";

const Banner = ({ title }) => {
    return (
        <>
            <section className="mainContainer">
                <div className="banner">
                    <h1>{title}</h1>
                    <img src={IMG} alt="banner" />
                </div>
            </section>
        </>
    );
};

export default Banner;
