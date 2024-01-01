import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Home from "./views/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    
                   
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;


//<Route
//path="/fiche-logement/:id"
//element={<FicheLogement />}
///>
//<Route path="*" element={<Error />} />