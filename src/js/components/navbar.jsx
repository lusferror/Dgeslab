import React from "react";
import ScatterChart from "./graphs.jsx";

export const Navbar = () => {
    return (
        <div class="">
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* <!-- Navbar Brand--> */}
                <a className="navbar-brand ps-3 fs-3 " href="/">Dgeslab</a>
                {/* <!-- Sidebar Toggle--> */}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                {/* <!-- Navbar Search--> */}
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    {/* <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                    </div> */}
                </form>
                {/* <!-- Navbar--> */}
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
                                        <a className="nav-link" href="/">Aprobar Equipos</a>
                                        <a className="nav-link" href="#">Móviles</a>
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
                        
                        <ScatterChart/>
                    </main>
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
    )
}