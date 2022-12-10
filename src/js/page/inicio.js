import React from "react";

const Inicio = ()=>{

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md col1">
                    <p className="text-center text-uppercase fw-bold">inicio de sesión</p>
                    <div className="d-flex justify-content-center">
                    <div className="form bg-white rounded-4 p-5 border border-2 shadow">
                    <form className="needs-validation" novalidate>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Usuario</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usuario" required/>                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                        </div>
                        <div className="text-center mb-4 mt-4">
                            <button  className="btn btn-primary">Ingresar</button>
                        </div>
                        <div className="text-center mt-4">
                            {/* <a className="btn btn-primary" href="recupera" role="button">Recuperar Contraseña</a> */}
                            <a class="text-muted" href="recupera">Recuperar Contraseña</a>
                        </div>
                    </form>                    
                    </div>
                    </div>
                </div>
                <div className="col-md text-center col2">
                    <h1 className="text-uppercase display-1 fst-italic"><strong>dgeslab</strong></h1>
                    <p>Sistema de Gestión de Laboratorio</p>
                </div>                
            </div>
        </div>        
    )
}

export default Inicio;