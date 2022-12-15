import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

const Registrar = ()=>{
    const { store, actions } = useContext(Context)
    const [ name, setName ] = useState("")
    const [ second_name, setSecond_Name ] = useState("")
    const [ last_name, setLast_Name ] = useState("")
    const [ second_last_name, setSecond_Last_Name ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ rut, setRut ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ role_id, setRole_Id ] = useState("")
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        actions.crearUsuario(name, second_name, last_name, second_last_name, email, rut, password, role_id)
        navigate("/")		
    };
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
                            <label for="exampleInputEmail1" className="form-label">Primer Nombre</label>
                            <input type="text" className="form-control" id="exampleInputText1" placeholder="Primer Nombre" onChange={(e) => setName(e.target.value)} value={name}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Segundo Nombre</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Segundo Nombre" onChange={(e) => setSecond_Name(e.target.value)} value={second_name}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Primer Apellido</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Primer Apellido" onChange={(e) => setLast_Name(e.target.value)} value={last_name}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Segundo Apellido</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Segundo Apellido" onChange={(e) => setSecond_Last_Name(e.target.value)} value={second_last_name}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">RUT</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="RUT" onChange={(e) => setRut(e.target.value)} value={rut}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Role</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Role" onChange={(e) => setRole_Id(e.target.value)} value={role_id}/>
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>Registrar</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>       
        </>
    )
}

export default Registrar;