import React, { useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png"

export const Navbar = ({contenido}) => {
    const {actions, store} = useContext(Context);
    const {salida} = actions;
    const {usuario} = actions;
    const session = sessionStorage.getItem("session")
    if (session=="true"){
        document.body.classList.remove('sb-sidenav-toggled');
    }
    else{
        document.body.classList.add('sb-sidenav-toggled');
    }
    return (
        <div className="sb-nav-fixed">
            <nav className={"sb-topnav navbar navbar-expand navbar-dark bg-dark w-100 "+store.showTopNavBar}>
                <div className="col-1 me-5 pt-2">
                    <Link to={session=="true"?"/":"/login"} className="navbar-brand ps-3 fs-3 ">
                        <img className="rounded-circle w-25 mb-1 me-3" src={logo}/>
                        <span className="fst-italic">Dgeslab</span>
                    </Link>
                </div>
                {session=="true"?
                <div className="col ms-4">
                    <button className="btn btn-link btn-sm order-1 order-lg-0 mt-2 mb-2 me-lg-0 ms-2 border-0 border-secondary" onClick={()=>actions.barraLateral()} id="sidebarToggle"><i className="fas fa-bars"></i></button>
                </div>:
                <></>
                }
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                            {session=="true"?
                                <>
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        {/* <li><a className="dropdown-item" href="#!">Perfil</a></li>
                                        <li><a className="dropdown-item" href="#!">Ajustes</a></li>*/}
                                        <li><a className="dropdown-item">{sessionStorage.getItem("user")}</a></li>
                                        <li><hr className="dropdown-divider" /></li> 
                                        <li><Link to="/login" className="dropdown-item" onClick={()=>salida()}>Logout</Link></li>
                                    </ul>
                                </>
                                :<></>
                            }
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav" >
                <div id="layoutSidenav_nav" >
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu contenedor">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading text-warning fst-italic">Inicio</div>
                                <Link className="nav-link" to={session?"/":"/login"}>
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
                                        <Link to='/verificacion' className="nav-link" >Verificacion</Link>
                                        <Link to='/aprobacion' className="nav-link" >Aprobar Equipos</Link>
                                        <Link to='/Procesamiento' className="nav-link" >Móviles</Link>
                                        <Link to='/empacado' className="nav-link" >Empacado</Link>
                                        <Link to='/embalaje' className="nav-link" >Embalado</Link>
                                    </nav>
                                </div>
                                {parseInt(sessionStorage.getItem("rol")) == 1 ?<>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Supervisor
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" >
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Bodega
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <Link to="/recepcion" className="nav-link" >Recepcion</Link>
                                                {/* <a className="nav-link" href="404.html">Despacho</a> */}
                                                <Link to='/HomeSupervisor' className="nav-link" >Despacho</Link>
                                                <a className="nav-link" href="500.html">Bodega</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="true" aria-controls="pagesCollapseAuth">
                                            Usuarios
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <Link to='/registrar' className="nav-link" >Registrar</Link>
                                                <Link to='/usuarios' className="nav-link" onClick={usuario} >Tabla de Usuarios</Link>
                                                <a className="nav-link" >Restablecer Contraseña</a>
                                            </nav>
                                        </div>
                                        <Link to="/asignar" className="nav-link" href="#">
                                                Asignar
                                        </Link>
                                    </nav>
                                </div>
                                
                                <div className="sb-sidenav-menu-heading text-warning fst-italic">Utilidad</div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#Registros" aria-expanded="true" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Registros
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="Registros" aria-labelledby="headingOne" >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link to="/tablaRecepcion" className="nav-link">Recepcion</Link>
                                        <Link to='/tablaAsignacion' className="nav-link" >Asignaciones</Link>
                                        <Link to='/tablaMoviles' className="nav-link" >Móviles</Link>
                                        <Link to="/tablaEmpacado" className="nav-link" >Salida</Link>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading text-warning fst-italic">Administracion de Sistema</div>
                                <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#usuarios" aria-expanded="true" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="bi bi-person-gear fs-5"></i></div>
                                    <div>Usuarios</div>
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="usuarios" aria-labelledby="headingOne" >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link to='/registrar_usuario' className="nav-link" >Registrar</Link>
                                        <Link to='/usuarios' className="nav-link" onClick={usuario} >Tabla de Usuarios</Link>
                                        <a className="nav-link" >Restablecer Contraseña</a>
                                    </nav>
                                </div>
                                </>:
                                 <></>                                
                                }   
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Peril Trabajador:</div>
                            {sessionStorage.getItem("rol_name")}
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main className=" h-100 p-2">
{/* -------------------------- corresponde a  el contenido toda esta parte -------------------------------------------------------- */}


                        {contenido}



{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
                    </main>
                    <footer className="py-4 bg-light mt-auto" >
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Sistema de Gestion de Laboratorio (Copyright &copy; Your Website 2022)</div>
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
