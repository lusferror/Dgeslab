import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

const Registrar = () => {
    const { store, actions } = useContext(Context)

    // ------------------------------------ validacion de inicio ------------------------
    actions.inicio()
    //-----------------------------------------------------------------------------------
    const [name, setName] = useState("")
    const [second_name, setSecond_Name] = useState("")
    const [last_name, setLast_Name] = useState("")
    const [second_last_name, setSecond_Last_Name] = useState("")
    const [email, setEmail] = useState("")
    const [rut, setRut] = useState("")
    const [password, setPassword] = useState("")
    const [role_id, setRole_Id] = useState("")
    const { usuarioCreado } = store
    
    const history = useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        const rol = parseInt(role_id)
        actions.crearUsuario(name, second_name, last_name, second_last_name, email, rut, password, rol,history)
}

    return (
        <div className="p-xxl-4">

            <div className="mb-5">
                <h1 >REGISTRO DE USUARIOS</h1>
            </div>
            <div className="container ">
                <div className="d-flex justify-content-center mb-5">
                    <div className="col-8 bg-white rounded-4 p-5 border border-1 border-warning shadow-lg">
                        <form id="myForm" className="row g-3 needs-validation"  onSubmit={(e) => handleClick(e)} novalidate>
                            Datos Básicos
                            <div className="border border-2 border-secondary  rounded-4 p-5 mb-3">
                                <div className="mb-3 d-flex">
                                    <div className="m-1 col">
                                        <label for="#primerNombre" className="form-label">Primer Nombre</label>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder="Primer Nombre" onChange={(e) => setName(e.target.value)} value={name} required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="m-1 col">
                                        <label for="exampleInputEmail1" className="form-label">Segundo Nombre</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Segundo Nombre" onChange={(e) => setSecond_Name(e.target.value)} value={second_name} required/>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="col m-1">
                                        <label for="exampleInputPassword1" className="form-label">Primer Apellido</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Primer Apellido" onChange={(e) => setLast_Name(e.target.value)} value={last_name} required/>
                                    </div>
                                    <div className="col m-1">
                                        <label for="exampleInputPassword1" className="form-label">Segundo Apellido</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Segundo Apellido" onChange={(e) => setSecond_Last_Name(e.target.value)} value={second_last_name} />
                                    </div>
                                </div>
                                <div className="mb-3 d-flex">
                                    <div className="mb-3 col m-1">
                                        <label for="exampleInputPassword1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                    </div>
                                    <div className="mb-3 col m-1">
                                        <label for="exampleInputPassword1" className="form-label">RUT</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="RUT" onChange={(e) => setRut(e.target.value)} value={rut} size={10} maxLength={10} required/>
                                    </div>
                                </div>
                            </div>
                            Datos de sistema
                            <div className="border border-secondary border-2 p-4 rounded-4">
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input size={10} maxLength={10} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Role</label>
                                    <select class="form-select" aria-label="Default select example" onChange={(e) => setRole_Id(e.target.value)} required>
                                        <option selected>Selecciona el Rol</option>
                                        <option value={1} >Supervisor</option>
                                        <option value={2}>Tecnico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center ">
                                <button type="submit" className="btn btn-primary col-5" >Registrar</button>
                                {/* onClick={handleClick} */}
                            </div>
                            {usuarioCreado ?
                                <div class="alert alert-success" role="alert">
                                    Usuario creado de manera exitosa
                                </div> : usuarioCreado == false ?
                                    <div class="alert alert-danger" role="alert">
                                        No se pudo crear el usuario, por favor revise los datos
                                    </div> :
                                    <></>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrar;