// IMPORTED METHODS
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

//IMPORTED COMPONENTS
import PanelForm from "../components/formulario/PanelForm.jsx";
import { Form } from "react-bootstrap";
import InputForm from "../components/formulario/InputForm.jsx";

const RegistrarUsuario = () => {
    //GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // VALIDATE SESSION
    actions.login().session();

    //LOCAL VARIABLES
    const formularioInit = {// Form's initial values
        name: '',
        second_name: '',
        last_name: '',
        second_last_name: '',
        email: '',
        rut:'',
        password: '',
        passwordCofirm:'',
        role_id: '',
        confirmPassword: '',
        user_name: '',
    };
    const [formRegistrarUsuario, setFormRegistrarUsuario] = useState({...formularioInit });
    const [validated, setValidated] = useState(false);
    const { usuarioCreado } = store
    const history = useNavigate()

    //FUNCTIONS
    const handleClick = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        // actions.crearUsuario(name, second_name, last_name, second_last_name, email, rut, password, rol, history)
        const rol = parseInt(role_id)

    }

    function handleChange(e){
        e.preventDefault();
        setFormRegistrarUsuario({name:e.target.value})
    }

    // console.log(formRegistrarUsuario)
    return (    
        <components.Page

            header={
                'REGISTRO DE USUARIOS'
            }
            body={

                <div className="container  justify-content-center bg-white py-5 shadow-lg col-xxl-12 col-xl-10 ">
                                
                                <Form id="myForm" className="w-100 needs-validation" onSubmit={(e)=>{handleClick(e)}} noValidate validated={validated}>
                                    <PanelForm

                                        icon={<i className="bi bi-person-vcard"></i>}

                                        header='datos básicos'

                                        body={
                                            <div className="mb-3">

                                                <div className="mb-3 px-2 d-flex">

                                                    <components.InputForm  id="text" label="Primer Nombre" placeholder="Primer Nombre..." value={formRegistrarUsuario.name} 
                                                        onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'name'}} required/>
                                                    
                                                    <components.InputForm  id="segundoNombre" label="Segundo Nombre" placeholder="Segundo Nombre..." value={formRegistrarUsuario.second_name} 
                                                        onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'second_name'}} />
                                                    
                                                </div>
                                                <div className="mb-3 px-2 d-flex">

                                                    <components.InputForm  id="firstLastName" label="Primer Apellido" placeholder="Primer Apellido..." value={formRegistrarUsuario.last_name} 
                                                        onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'last_name'}} required/>
                                                    
                                                    <components.InputForm  id="secondLastName" label="Segundo Apellido" placeholder="Segundo Apellido..." value={formRegistrarUsuario.second_last_name} 
                                                        onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'second_last_name'}} />

                                                </div>
                                                <div className="mb-3 px-2 d-flex">
                                                    <components.InputForm  id="email" type="email" label="Email" placeholder="Email..." value={formRegistrarUsuario.email} 
                                                        onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'email'}} required/>

                                                    <components.InputForm  id="rut" type="rut" label="Rut" placeholder="Rut..." value={formRegistrarUsuario.rut}  
                                                        onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'rut'}} required/>   
                                                </div>
                                                
                                            </div>
                                        }

                                    />
                                    {/* FIN DE PANEL FORMUALRIO */}

                                    <PanelForm

                                        icon={<i  className="bi bi-person-lines-fill"></i>}

                                        header="datos de sistema" colorIcon="success"

                                        body={
                                            <div className="mb-3">

                                                <div className="mb-3 px-2 d-flex">
                                                    <components.InputForm  id="password" type="password" label="Password" placeholder="Pasword..." value={formRegistrarUsuario.password}  
                                                            onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'password'}} required/>
                                                    <components.InputForm  id="passwordConfirm" type="confirmPassword" label="Confirme Password" placeholder="Confirme Password..." value={formRegistrarUsuario.passwordCofirm}  
                                                            onChange={{setState: setFormRegistrarUsuario, state: formRegistrarUsuario, prop:'passwordCofirm'}} password={formRegistrarUsuario.password} required/>    
                                                </div>

                                            </div>
                                            
                                        }
                                    />
                                    {/* FIN DE PANEL FORMUALRIO */}

                                    <div>
                                        <div className="text-center mb-4">
                                            <button type="submit" className="btn btn-primary col-5" >Registrar</button>
                                        </div>
                                        {usuarioCreado ?
                                            <div  className="alert alert-success" role="alert">
                                                Usuario creado de manera exitosa
                                            </div> :
                                            usuarioCreado == false ?
                                                <div  className="alert alert-danger" role="alert">
                                                    No se pudo crear el usuario, por favor revise los datos
                                                </div> :
                                                <></>
                                        }
                                    </div>
                                </Form>
                </div>
            }

            footer={
                ''
            }

        /> //FIN DE PAGINA
    )
}

export default RegistrarUsuario;