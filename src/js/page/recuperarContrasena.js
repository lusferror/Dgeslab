// IMPORTED METHODS
import React from "react";
import { Link } from "react-router-dom";

// IMPORTED COMPONENTS
import LoginPanel from "../components/loginPanel.jsx";

// IMPORTED RESOURCERS
import dgeslab from '../../img/logo.png'

const RecuperarContrasena = () => {
    // APLICATED CALASSES
    document.body.classList.add("sb-sidenav-toggled")
    document.body.classList.add("bg-dark")

    return (
        <div className="h-100 d-flex-md col-xxl-4 col-xl-6 col-lg-6 col-md-8 col-sm-10 container-fluid">
            <LoginPanel

                header={
                    <div className="w-100 p-0">
                        <div className="text-center d-flex justify-content-center align-items-center mb-5">
                            <div className="col-3 ">
                                <img src={dgeslab} className="rounded-circle shadow-lg w-50" />
                            </div>
                            <div>
                                <h2 className="text-warning font-slogan fw-bold" > DGESLAB  <span className="text-white font-slogan" style={{ fontSize: "1rem" }}>Cree en ti!</span></h2>
                            </div>
                        </div>
                    </div>
                }

                body={
                    <form className="needs-validation" noValidate>
                        <div className="mb-3 mt-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Ingrese Correo Electrónico:</label>
                            <div className="d-flex border rounded-3 bg-light">
                                <i className="bi bi-people-fill mx-2 mt-1 fs-5"></i>
                                <input type="email" className="form-control border-end-0 border-top-0 border-bottom-0 h-100 m-0 p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" required />
                            </div>
                        </div>
                        <div className="text-center mb-3 mt-5 d-flex ">
                            <button className="btn btn-success w-50 me-3">Recuperar Contraseña</button>
                            <Link to="/login" className="w-50"><button className="col btn btn-primary w-100 h-100">Volver a Inicio</button></Link>
                        </div>
                    </form>
                }
            />
        </div>


    )
}

export default RecuperarContrasena;