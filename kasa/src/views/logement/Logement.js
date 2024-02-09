import React from "react";
import Carroussel from "../../components/carroussel/Carroussel";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import NotFound from "../../components/notFound/NotFound";
import FicheInfos from "../../components/ficheInfos/FicheInfos";
import Collapse from "../../components/collapse/Collapse";

const Logement = () => {
    const { id } = useParams();
    console.log(id);

    const currentCard = data.find((apartment) => apartment.id === id);
    console.log(currentCard);

    if (!currentCard) {
        return <NotFound />;
    }

    return (
        <div className="container-logement">
            <Carroussel images={currentCard.pictures} />
            <FicheInfos apartment={currentCard} />
            <div className="collapseInfo">

                <Collapse title="Description" content={currentCard.description} />
                <Collapse title="Équipements" content={currentCard.equipments} />
                
            </div>
        </div>
    );
};

export default Logement;
