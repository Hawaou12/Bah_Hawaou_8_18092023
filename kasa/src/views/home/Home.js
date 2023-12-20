import React from "react";
import Navigation from "../../components/nav/Navigation";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";
const Home = () => {
    return (
        <>
         <div>
                <Navigation />
                <h1>Accueil</h1>
            </div>
        <section className="homeContainer">
            <Banner title = "Chez vous, et partout ailleurs"/>
            <div className="gallery">
                <Card title="Titre de la location" />
            </div>
           
        </section>
        </>
    );
};

export default Home;
