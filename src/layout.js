import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "../src/js/page/home";
import injectContext from '../src/js/store/appContext';

//create your first component
const Layout = () => {

    return (
        <div>
            <BrowserRouter >
                    <Routes>
                        <Route element={<Home />} path="/" />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
