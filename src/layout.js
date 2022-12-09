import React from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
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
            <div className="sb-nav-fixed">
                {/* en el visual code minimicen el nav ----------------------------------------------------------------------------------------------*/}
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand ps-3 fs-3 " href="/">Dgeslab</a>
                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    </form>
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Perfil</a></li>
                                <li><a className="dropdown-item" href="#!">Ajustes</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                {/* minicen  layoutSidenav_nav*-------------------------------------------------------------------------------------------------------*/}
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu contenedor">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading text-warning fst-italic">Inicio</div>
                                    <a className="nav-link" href="index.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                                    </a>
                                    <div className="sb-sidenav-menu-heading text-warning fst-italic">Operaciones</div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="true" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                        Produccion
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" >
                                        <nav className="sb-sidenav-menu-nested nav">
                                                <span className="nav-link" >Aprobar Equipos</span>
                                            <a className="nav-link" href="/Procesamiento">Móviles</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                        Supervisor
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" >
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="true" aria-controls="pagesCollapseAuth">
                                                Usuarios
                                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="login.html">Registro</a>
                                                    <a className="nav-link" href="register.html">Tabla de Usuarios</a>
                                                    <a className="nav-link" href="password.html">Restablecer Contraseña</a>
                                                </nav>
                                            </div>
                                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Bodega
                                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="401.html">Recepcion</a>
                                                    <a className="nav-link" href="404.html">Despacho</a>
                                                    <a className="nav-link" href="500.html">Bodega</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="sb-sidenav-menu-heading text-warning fst-italic">Utilidad</div>
                                    <a className="nav-link" href="#">
                                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                        Rendimiento
                                    </a>
                                    <a className="nav-link" href="#">
                                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                        Reportes
                                    </a>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Usuario:</div>
                                Supervisor
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main className="p-3">
                            <BrowserRouter >
                                <Routes>
                                    <Route element={<Home />} path="/" />
                                    <Route element={<HomeTecnico />} path="/HomeTecnico" />
                                    <Route element={<Verificacion />} path="/Verificacion" />
                                    <Route element={<Procesamiento />} path="/Procesamiento" />
                                    <Route element={<HomeSupervisor />} path="/HomeSupervisor" />

                                </Routes>
                            </BrowserRouter>
                        </main>
                        {/* minimicen el footer */}
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; Your Website 2022</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default injectContext(Layout);
