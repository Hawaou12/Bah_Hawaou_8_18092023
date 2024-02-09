import React from "react";
import "./AboutBanner.scss";
import imgMobile from "../../assets/images/imgMobile.png";

const AboutBanner = () => {
    return (
        <div className="P">
            <div className="about">
                <img src={imgMobile} alt="montain" />
            </div>
        </div>
    );
};

export default AboutBanner;
