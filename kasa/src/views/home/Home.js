import React from "react";
import Banner from "../../components/banner/Banner";
import "./Home.scss";
import Appartement from "../../components/appartement/Appartement";
import Card from "../../components/card/Card";


const Home = () => {
    return (
        <>
            <section className="homeContainer">
                <Banner title="Chez vous, et partout ailleurs" />
             
                <div className="gallery">
                <Appartement/>
                    <Card title="Titre de la location" />
                    <Card title="Titre de la location" />
                    <Card title="Titre de la location" />
                    <Card title="Titre de la location" />
                    <Card title="Titre de la location" />
                    <Card title="Titre de la location" />
                </div>
                
            </section>
        </>
    );
};

export default Home;
