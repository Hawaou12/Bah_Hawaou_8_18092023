import React from "react";

import Card from "../../components/appartement/Appartement";
import Banner from "../../components/banner/Banner";
import "./Home.scss";
import Appartement from "../../components/appartement/Appartement";
const Home = () => {
    return (
        <>
            <section className="homeContainer">
                <Banner title="Chez vous, et partout ailleurs" />
                <div className="gallery">
                    <Appartement title="Titre de la location" />
                    <Appartement title="Titre de la location" />
                    <Appartement title="Titre de la location" />
                    <Appartement title="Titre de la location" />
                    <Appartement title="Titre de la location" />
                    <Appartement title="Titre de la location" />
                </div>
            </section>
        </>
    );
};

export default Home;
