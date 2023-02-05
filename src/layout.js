import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from '../src/js/store/appContext';
//----------------------------------- COMPONENTES--------------------------------
import { Navbar } from "./js/components/navbar.jsx";

//-----------------------------------PAGINAS-------------------------------------
import Home from "../src/js/page/home";
import HomeTecnico from "./js/page/HomeTecnico";
import Aprobacion from "./js/page/aprobacion"
import Procesamiento from "./js/page/Procesamiento"
import Despacho from "./js/page/despacho"
import Login from "./js/page/login"
import RecuperarContrasena from "./js/page/recuperarContrasena"
import RegistrarUsuario from "./js/page/registrar_usuario"
import Usuarios from "./js/page/usuarios"
import Recepcion from "./js/page/recepcion"
import Asignar from "./js/page/asignacion"
import Empacado from "./js/page/Empacado";
import Embalaje from "./js/page/Embalaje";
import EmpacadoTabla from "./js/page/EmpacadoTabla";
import Verificacionn from "./js/page/Verificacionn";
import TablaRecepcion from "./js/page/tablaRecepcion";
import TablaAsignacion from "./js/page/tablaAsignacion";
import { TablaEmpacado } from "./js/page/tablaEmpacado";
import TablaMoviles from "./js/page/tablaMoviles";

// ---------------------------------- contexto ------------------------------------

//create your first component
const Layout = () => {  
    return (
        <BrowserRouter >

            <Navbar contenido={
                <Routes>
                    <Route element={<Login />} path="/login" />
                    <Route element={<HomeTecnico />} path="/HomeTecnico" />
                    <Route element={<Home/>} path="/" />
                    <Route element={<Aprobacion />} path="/aprobacion" />
                    <Route element={<Procesamiento />} path="/Procesamiento" />
                    <Route element={<Despacho />} path="/HomeSupervisor" />
                    <Route element={<RecuperarContrasena />} path="/recuperar_contrasena" />
                    <Route element={<RegistrarUsuario />} path="/registrar_usuario" />
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
                    <Route element={<TablaMoviles/>} path="/tablaMoviles" />
                </Routes>
            }>
            </Navbar>
        </BrowserRouter>
    );
}
export default injectContext(Layout);
