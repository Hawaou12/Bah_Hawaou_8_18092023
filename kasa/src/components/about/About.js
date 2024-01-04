import React from 'react';
import Navigation from"../nav/Navigation";
import aboutIMG from "../../assets/images/aboutIMG.png";
import "./About.scss";


const About = () => {
    return (
        <div>
              <div className="about">
            <img src={aboutIMG} alt="about" />
        </div>
        </div>
    );
};

export default About;