import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/js/page/home";
import HomeTecnico from "./js/page/HomeTecnico";
import Procesamiento from "./js/page/Procesamiento";
import Verificacion from "./js/page/Verificacion";
import HomeSupervisor from "./js/page/HomeSupervisor";
import injectContext from '../src/js/store/appContext';

//create your first component
const Layout = () => {

    return (
        <div>
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
