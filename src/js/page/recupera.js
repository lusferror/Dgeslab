import React from "react";

const Recupera = ()=>{
    return (
        <>
        <div className="col text-center mt-3 mb-5">
            <h1 className="text-uppercase display-1 fst-italic"><strong>dgeslab</strong></h1>
            <p>Sistema de Gestión de Laboratorio</p>
        </div>
        <p className="text-center text-uppercase fw-bold">recuperación de contraseña</p>
        <div className="d-flex justify-content-center m-2">
            <div className="form bg-white rounded-4 p-5 border border-2 shadow">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario"/>                            
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
                </div>                
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">Recuperar Contraseña</button>
                </div>
                <div className="text-center mt-4">
                    <a className="btn btn-primary" href="/" role="button">Volver al Inicio</a>                            
                </div>
            </form>                    
        </div>
        </div>
        
        </>
        
    )
}

export default Recupera;