import React from "react";
import dgeslab from "../../img/dgeslab.png"; 
import { Link } from "react-router-dom";


const Recupera = ()=>{
    document.body.classList.add("sb-sidenav-toggled")

    return (
        <div className="d-flex h-100 mx-auto col-xxl-4 col-md-6 col-sm-10 p-0">
            <div className="row  d-flex w-100 align-items-center">
                <div className="col-md ">
                    <div className="text-center w-100 mb-5">
                        <img src={dgeslab} className="border  border-warning border-1 rounded-circle shadow" style={{width:"40%"}}></img>
                    </div>
                    <p className="text-center text-uppercase fw-bold fs-3 fst-italic">Recuperar Contraseña</p>
                    <div className="d-flex justify-content-center">
                        <div className="form bg-white rounded-4 p-5 border border-1 border-warning shadow w-100" style={{borderRadius:"20px"}}>
                            <form className="needs-validation fs-4" novalidate>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label mb-4">Ingrese Correo Electrónico:</label>
                                    <div className="d-flex border rounded-3 bg-light">
                                        <i className="bi bi-people-fill mx-2 mt-1 fs-5"></i>
                                        <input type="email" className="form-control border-end-0 border-top-0 border-bottom-0 h-100 m-0 p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" required />
                                    </div>
                                </div>
                                <div className="text-center mb-3 mt-5 d-flex ">
                                    <button className="btn btn-success w-50 me-3">Recuperar Contraseña</button>
                                    <Link to="/login" className="w-50"><button className="col btn btn-primary w-100">Volver a Inicio</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <>
        // <div className="col text-center mt-3 mb-5">
        //     <h1 className="text-uppercase display-1 fst-italic"><strong>dgeslab</strong></h1>
        //     <p>Sistema de Gestión de Laboratorio</p>
        // </div>
        // <p className="text-center text-uppercase fw-bold">recuperación de contraseña</p>
        // <div className="d-flex justify-content-center m-2">
        //     <div className="form bg-white rounded-4 p-5 border border-2 shadow">
        //     <form>
        //         <div className="mb-3">
        //             <label for="exampleInputEmail1" className="form-label">Usuario</label>
        //             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario"/>                            
        //         </div>
        //         <div className="mb-3">
        //             <label for="exampleInputPassword1" className="form-label">Email</label>
        //             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
        //         </div>                
        //         <div className="text-center mt-4">
        //             <button type="submit" className="btn btn-primary">Recuperar Contraseña</button>
        //         </div>
        //         <div className="text-center mt-4">
        //             <a className="btn btn-primary" href="/" role="button">Volver al Inicio</a>                            
        //         </div>
        //     </form>                    
        // </div>
        // </div>
        
        // </>
        
    )
}

export default Recupera;