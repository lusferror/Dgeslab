import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from '../src/js/store/appContext';
//----------------------------------- COMPONENTES--------------------------------
import { Navbar } from "./js/components/navbar.jsx";
//-----------------------------------PAGINAS-------------------------------------
import Home from "../src/js/page/home";
import HomeTecnico from "./js/page/HomeTecnico";
import Verificacion from "./js/page/Verificacion"
import Procesamiento from "./js/page/Procesamiento"
import HomeSupervisor from "./js/page/HomeSupervisor"

//create your first component
const Layout = () => {

    return (
        <div>
            <Navbar />
            <BrowserRouter >
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<HomeTecnico />} path="/HomeTecnico" />
                    <Route element={<Verificacion />} path="/Verificacion" />
                    <Route element={<Procesamiento />} path="/Procesamiento" />
                    <Route element={<HomeSupervisor />} path="/HomeSupervisor" />

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
