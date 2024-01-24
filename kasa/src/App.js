import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import Logement from "./views/logement/Logement";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
