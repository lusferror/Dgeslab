// IMPORTED METHODS
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import * as yup from 'yup';

//IMPORTED COMPONENTS
import PanelForm from "../components/formulario/PanelForm.jsx";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { FormikHandlers } from "formik";


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
        role_id: '',
        confirmPassword: '',
        user_name: '',
    };
    const [formRegistrarUsuario, setFormRegistrarUsuario] = useState({...formularioInit });
    const [validated, setValidated] = useState(false);
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

    /**
     * Form validation scheme
     */
    const schema = yup.object().shape({
        name: yup.string().required(),
        second_name: yup.string().required(),
        last_name: yup.string().required(),
        second_last_name: yup.string().required(),
        email: yup.string().required(),
        rut:yup.string().required(),
        password: yup.string().required(),
        role_id: yup.number().required(),
        confirmPassword: yup.string().required(),
        user_name: yup.string().required(),
    });

    function handleChange(e){
        e.preventDefault();
        setFormRegistrarUsuario({name:e.target.value})
        console.log(formRegistrarUsuario.name)
    }


    return (
        <components.Page

            header={
                'REGISTRO DE USUARIOS'
            }
            body={

                <div className="container  justify-content-center bg-white py-5 shadow-lg col-xxl-12 col-xl-10 ">
                    {/* <Formik validationSchema={schema} initialValues={formularioInit} >
                        {
                            ({handleSubmit, values, touched, isValid, errors,}) => ( */}
                                
                                <Form id="myForm" className="w-100 needs-validation" onSubmit={(e)=>{handleClick(e)}} noValidate validated={validated}>
                                    <PanelForm

                                        icon={<i className="bi bi-person-vcard"></i>}

                                        header='datos básicos'

                                        body={
                                            <div className="mb-3">

                                                <div className="mb-3 px-2 d-flex">
                                                    
                                                    <Form.Group className="position-relative col m-1">
                                                        <Form.Label className="fw-bold">Primer Nombre</Form.Label>
                                                        <Form.Control type="text" placeholder="Primer Nombre" value={formRegistrarUsuario.name} name="name"
                                                            onChange={e=>{setFormRegistrarUsuario({...formRegistrarUsuario, name:e.target.value})}} 
                                                            required />
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            "El campo es requerido"
                                                        </Form.Control.Feedback>
                                                        <Form.Control.Feedback tooltip>
                                                            "Correcto!"
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group className="position-relative col m-1">
                                                        <Form.Label className="fw-bold">Segundo Nombre</Form.Label>
                                                        <Form.Control type="text" placeholder="Segundo Nombre" value={formRegistrarUsuario.second_name} name="second_name"
                                                            onChange={e=>{setFormRegistrarUsuario({...formRegistrarUsuario, second_name:e.target.value})}} 
                                                              required/>
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            "El campo es requerido"
                                                        </Form.Control.Feedback>
                                                        <Form.Control.Feedback tooltip>
                                                            "Correcto!"
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </div>
                                                <div className="mb-3 d-flex">
                                                    <div className="col m-1">
                                                        <label  htmlFor="exampleInputPassword1" className="form-label">Primer Apellido</label>
                                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Primer Apellido" onChange={(e) => setLast_Name(e.target.value)} value={last_name}   />
                                                    </div>
                                                    <div className="col m-1">
                                                        <label  htmlFor="exampleInputPassword1" className="form-label">Segundo Apellido</label>
                                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Segundo Apellido" onChange={(e) => setSecond_Last_Name(e.target.value)} value={second_last_name} />
                                                    </div>
                                                </div>
                                                <div className="mb-3 d-flex">
                                                    <div className="mb-3 col m-1">
                                                        <label  htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}   />
                                                    </div>
                                                    <div className="mb-3 col m-1">
                                                        <label  htmlFor="exampleInputPassword1" className="form-label">RUT</label>
                                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="RUT" onChange={(e) => setRut(e.target.value)} value={rut} size={10} maxLength={10}   />
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    />
                                    {/* FIN DE PANEL FORMUALRIO */}

                                    <PanelForm

                                        icon={<i  className="bi bi-person-lines-fill"></i>}

                                        header="datos de sistema" colorIcon="success"

                                        body={
                                            <div>
                                                <div className="">
                                                    <div className="d-flex mb-3">
                                                        <div className="mx-1 col">
                                                            <label  htmlFor="password" className="form-label">Password</label>
                                                            <input size={10} maxLength={10} type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}   />
                                                            <div  className="valid-feedback">
                                                                Looks good!
                                                            </div>
                                                        </div>
                                                        <div className="mx-1 col">
                                                            <Form.Group className="position-relative">
                                                                <Form.Label className="fw-bold">Confirmar Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Confirme password" value={formRegistrarUsuario.confirmPassword} name="confirmPassword"
                                                                    onChange={(e) => setFormRegistrarUsuario({ confirmPassword: e.target.value })} 
                                                                    size={10} maxLength={10} required/>
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {"El campo es requerido"}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label  htmlFor="exampleInputPassword1" className="form-label">Role</label>
                                                        <select  className="form-select" aria-label="Default select example" onChange={(e) => setRole_Id(e.target.value)}  value={0}>
                                                            <option value={0}>Selecciona el Rol</option>
                                                            <option value={1} >Supervisor</option>
                                                            <option value={2}>Tecnico</option>
                                                        </select>
                                                    </div>
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
                            {/* )
                        } */}

                    {/* </Formik> */}
                </div>
            }

            footer={
                ''
            }

        /> //FIN DE PAGINA
    )
}

export default RegistrarUsuario;