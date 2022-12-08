import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "../src/js/page/home";
import injectContext from '../src/js/store/appContext';
import { Navbar } from "./js/components/navbar.jsx";

//create your first component
const Layout = () => {

    return (
        <div>
            <Navbar/>
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
