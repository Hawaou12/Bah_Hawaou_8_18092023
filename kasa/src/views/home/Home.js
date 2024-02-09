import React from "react";
import Banner from "../../components/banner/Banner";
import "./Home.scss";
import Card from "../../components/card/Card";
import data from "../../data/data.json";

const Home = () => {
    console.log(data);
    data.forEach(function (item, index, array) {
        console.log(item, index);
    });

    return (
        <>
            <section className="homeContainer">
                <Banner title="Chez vous, partout et ailleurs" />

                <div className="gallery">
                    {data.map((apartment) => (
                        // un ID unique pour chaque appartement
                        <Card key={apartment.id} title={apartment.title} cover={apartment.cover} id={apartment.id} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
