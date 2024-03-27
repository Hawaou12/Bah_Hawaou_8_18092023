import React, { useState } from "react";
import "./Carroussel.scss";
import arrowLeft from "../../assets/images/arrowLeft.png";
import arrowRight from "../../assets/images/arrowRight.png";

const Carroussel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    //  vérification plus d' image
    const showControls = images.length > 1;

    return (
        <div className="carrousel-container">
            {showControls && <img src={arrowLeft} alt="Left" className="arrowButton arrow-left" onClick={goToPrevSlide} />}

            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />

            {showControls && <img src={arrowRight} alt="Right" className="arrowButton arrow-right" onClick={goToNextSlide} />}

            {showControls && (
                <div className="slides-info">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default Carroussel;
