import React from "react";
import { Link } from 'react-router-dom';

const Registrar = ()=>{
    return (
        <>
      
       
        <div className="container">
            <div className="text-center">
                <h1 className="text-uppercase display-1 fst-italic"><strong>dgeslab</strong></h1>
                <p>Sistema de Gestión de Laboratorio</p>
            </div>
            <p className="text-center text-uppercase fw-bold">registro de técnico</p>
            <div className="d-flex justify-content-center mb-5">
                <div className="form bg-white rounded-4 p-5 border border-2 shadow">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombres</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombres"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Apellidos</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Apellidos"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">RUT</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="RUT"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Usuario</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Usuario"/>
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">Registrar</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>       
        </>
    )
}

export default Registrar;