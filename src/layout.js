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
import Usuarios from "./js/page/usuarios"
import Recepcion from "./js/page/recepcion"
import Asignar from "./js/page/asignar"
import Empacado from "./js/page/Empacado";
import Embalaje from "./js/page/Embalaje";
import EmpacadoTabla from "./js/page/EmpacadoTabla";
import Verificacionn from "./js/page/Verificacionn";
import TablaRecepcion from "./js/page/tablaRecepcion";
import TablaAsignacion from "./js/page/tablaAsignacion";
import { TablaEmpacado } from "./js/page/tablaEmpacado";

// ---------------------------------- contexto ------------------------------------

//create your first component
const Layout = () => {  
    return (
        <BrowserRouter >

            <Navbar contenido={
                <Routes>
                    <Route element={<Inicio />} path="/login" />
                    <Route element={<HomeTecnico />} path="/HomeTecnico" />
                    <Route element={<Home/>} path="/" />
                    <Route element={<Verificacion />} path="/aprobacion" />
                    <Route element={<Procesamiento />} path="/Procesamiento" />
                    <Route element={<HomeSupervisor />} path="/HomeSupervisor" />
                    <Route element={<Recupera />} path="/recupera" />
                    <Route element={<Registrar />} path="/registrar" />
                    <Route element={<Usuarios />} path="/usuarios" />
                    <Route element={<Recepcion />} path="/recepcion" />
                    <Route element={<Asignar/>} path="/asignar" />
                    <Route element={<Empacado/>} path="/Empacado" />
                    <Route element={<Embalaje/>} path="/embalaje" />
                    <Route element={<Empacado/>} path="/empacado"/>
                    <Route element={<EmpacadoTabla/>} path="/empacadoTabla"/>
                    <Route element={<Recepcion/>} path="/recepcion"/>
                    <Route element={<Verificacionn/>} path="/verificacion"/>
                    <Route element={<TablaRecepcion/>} path="/tablaRecepcion"/>
                    <Route element={<TablaAsignacion></TablaAsignacion>} path="/tablaAsignacion"></Route>
                    <Route element={<TablaEmpacado/>} path="/tablaEmpacado"/>
                </Routes>
            }>
            </Navbar>
        </BrowserRouter>
    );
}
export default injectContext(Layout);
