import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dgeslab from "../../img/dgeslab.png";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Inicio = () => {
    const {actions} = useContext(Context)
    const history = useNavigate()
    const haddleClick=()=>{
        actions.ingreso()
        history('/')
    }


    return (
        <div className="d-flex h-100  col-xxl-4 col-md-6 col-sm-10 p-0 container-fluid">
            <div className="row  d-flex w-100 align-items-center">
                <div className="col-md ">
                    <div className="text-center w-100 mb-5">
                        <img src={dgeslab} className="border  border-warning border-1 rounded-circle shadow" style={{width:"40%"}}></img>
                    </div>
                    <p className="text-center text-uppercase fw-bold fs-3 fst-italic">BIENVENIDOS</p>
                    <div className="d-flex justify-content-center">
                        <div className="form bg-white rounded-4 p-5 border border-1 border-warning shadow w-100">
                            {/* <form className="needs-validation fs-4" nov1alidate> */}
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                                    <div className="d-flex border rounded-3 bg-light">
                                        <i className="bi bi-people-fill mx-2 mt-1 fs-5"></i>
                                        <input type="email" className="form-control border-end-0 border-top-0 border-bottom-0 h-100 m-0 p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" required />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                    <div className="d-flex border rounded-3 bg-light">
                                        <i className="bi bi-lock-fill mx-2 mt-1 fs-5"></i>
                                        <input type="password" className="form-control border-end-0 border-top-0 border-bottom-0 h-100 m-0 p-2" id="exampleInputPassword1" placeholder="Contraseña" />
                                    </div>
                                    <Link to="/recupera" className="text-primary float-end m-1" style={{ fontSize: "60%" }} >Recuperar Contraseña?</Link>
                                </div>
                                <div className="text-center mb-3 mt-5">
                                    <button className="btn btn-primary w-100" onClick={()=>haddleClick()}>Ingresar</button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;