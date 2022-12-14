import React ,{useContext}from "react";
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
import Inicio from "./js/page/inicio"
import Recupera from "./js/page/recupera"
import Registrar from "./js/page/registrar"
import Recepcion from "./js/page/recepcion"
import Asignar from "./js/page/asignar"
// ---------------------------------- contexto ------------------------------------
import { Context } from "../src/js/store/appContext";

//create your first component
const Layout = () => {  
    const {store} = useContext(Context)
    return (
        <BrowserRouter >

            <Navbar contenido={
                <Routes>
                    <Route element={<Home/>} path="/" />
                    <Route element={<HomeTecnico />} path="/HomeTecnico" />
                    <Route element={<Verificacion />} path="/Verificacion" />
                    <Route element={<Procesamiento />} path="/Procesamiento" />
                    <Route element={<HomeSupervisor />} path="/HomeSupervisor" />
                    <Route element={<Inicio />} path="/login" />
                    <Route element={<Recupera />} path="/recupera" />
                    <Route element={<Registrar />} path="/registrar" />
                    <Route element={<Recepcion />} path="/recepcion" />
                    <Route element={<Asignar/>} path="/asignar" />
                </Routes>
            }>
            </Navbar>
        </BrowserRouter>
    );
}
export default injectContext(Layout);
