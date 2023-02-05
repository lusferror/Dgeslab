// IMPORTED METHODS
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

// IMPORT COMPONENTS
import { Spinner } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import LoginPanel from "../components/loginPanel.jsx";

const Login = () => {
    // GLOBAL VARIABLES
    const { store, actions } = useContext(Context)

    // LOCAL VARIABLES
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate()

    // SESSION VALIDATION
    actions.login().inicioLogin();

    //LOCAL FUNCTIONS
    const haddleClick = (e) => {
        e.preventDefault();
        let objeto = {
            user: user,
            password: password,
            history: history
        }
        actions.login(objeto).ingreso();
    }


    return (
        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 p-0 container-fluid">
            <LoginPanel

                body={
                    <form onSubmit={(e) => haddleClick(e)}>
                        <div className="text-center font-slogan">
                            BIENVENIDOS
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userInput" className="form-label">Usuario</label>
                            <div className="d-flex border rounded-3 bg-light">
                                <i className="bi bi-people-fill mx-2 mt-1 fs-5"></i>
                                <input className="form-control border-end-0 border-top-0 border-bottom-0 h-100 m-0 p-2" id="userInput" placeholder="Usuario" 
                                value={user} onChange={(e) => setUser(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <div className="d-flex border rounded-3 bg-light">
                                <i className="bi bi-lock-fill mx-2 mt-1 fs-5"></i>
                                <input type="password" className="form-control border-end-0 border-top-0 border-bottom-0 h-100 m-0 p-2" id="password" 
                                placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className="text-center mb-3 mt-5">
                            <button type="submit" className="btn btn-primary w-100 mb-4" >Ingresar</button>

                            {store.alerta && !store.error ? <Alert variant="danger"> Usuario o Contraseña incorrectos </Alert> :
                                store.alerta && store.error ? <Alert variant="danger"> Ha ocurrido un Error al inciar sesion </Alert> : <></>}

                            {store.load ? <Spinner animation='border' variant='warning' /> : <></>}
                        </div>
                    </form>
                }
            />
        </div>

    )
}

export default Login;