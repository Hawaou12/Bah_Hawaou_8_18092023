import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
const App = () => {
    return (
        <BrowserRouter>
            <Routes></Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </BrowserRouter>
    );
};

export default App;
