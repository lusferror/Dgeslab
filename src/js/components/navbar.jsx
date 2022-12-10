import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Inicio from "../page/inicio";
import { Context } from "../store/appContext";

export const Navbar = ({contenido}) => {
    const {actions} = useContext(Context);
    const {logueado} = actions;
    return (
        <div className="sb-nav-fixed">
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark w-100">
                <div className="col pt-2">
                    <a className="navbar-brand ps-3 fs-3 " href="/">Dgeslab</a>
                    <button className="btn btn-link btn-sm order-1 order-lg-0 mb-2 me-lg-0 ms-5 border border-secondary" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                </div>
                <div className="col"></div>
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Perfil</a></li>
                            <li><a className="dropdown-item" href="#!">Ajustes</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" onClick={logueado}>Logout</Link></li>
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
                                <Link className="nav-link" to="/">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </Link>
                                <div className="sb-sidenav-menu-heading text-warning fst-italic">Operaciones</div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="true" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Produccion
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link to='/Verificacion' className="nav-link" href="/">Aprobar Equipos</Link>
                                        <Link to='/Procesamiento' className="nav-link" >Móviles</Link>
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
                                                <Link to='/registrar' className="nav-link" >Registro</Link>
                                                <a className="nav-link" >Tabla de Usuarios</a>
                                                <a className="nav-link" >Restablecer Contraseña</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Bodega
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="401.html">Recepcion</a>
                                                {/* <a className="nav-link" href="404.html">Despacho</a> */}
                                                <Link to='/HomeSupervisor' className="nav-link" >Despacho</Link>
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
{/* -------------------------- corresponde a  el contenido toda esta parte -------------------------------------------------------- */}


                        {contenido}



{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
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
