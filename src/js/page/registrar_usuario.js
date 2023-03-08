// IMPORTED METHODS
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

//IMPORTED COMPONENTS
import { Form } from "react-bootstrap";
import PanelForm from "../components/formulario/PanelForm.jsx";
import InputForm from "../components/formulario/InputForm.jsx";
import Page from "../templates/page.jsx";
import SelectForm from "../components/formulario/SelectForm.jsx";

const RegistrarUsuario = () => {
    //GLOBAL VARIABLES
    const { store, actions} = useContext(Context)
    const { registrarUsuarioForm , validated , usuarioCreado } = store;
    const { handleChangeRegistrarUsuario , setRutRegistrarUsuario, handleClickRegistrarUsuario,
        setTeclaRegistrarUsuario, handleChangeConfirmPasswordRegistrarUsuario } = actions;
    // VALIDATE SESSION
    actions.login().session();

    //LOCAL VARIABLES

    const history = useNavigate()
    const rowClass = 'mb-4 px-2 d-flex'

    //FUNCTIONS
    /**
     * The functions are in 'functionsRegistrarUsuario.js' file
     */
    
    return (    
        <Page>

            <Page.Header>
                REGISTRO DE USUARIOS
            </Page.Header>
            
            <Page.Body>
                
                <div className="container  justify-content-center bg-white py-5 shadow-lg col-xxl-12 col-xl-10 ">
                                
                                <Form id="myForm" className="w-100 needs-validation" onSubmit={(e)=>{handleClickRegistrarUsuario(e)}} noValidate validated={validated} autoComplete="off">
                                    <PanelForm>
                                        <PanelForm.Header icon={<i className="bi bi-person-vcard"></i>}>
                                            Datos Básicos
                                        </PanelForm.Header>
                                        <PanelForm.Body>

                                            <div className="mb-3">

                                                <div className={rowClass}>

                                                    <InputForm  id="text" label="Primer Nombre" placeholder="Primer Nombre..." value={registrarUsuarioForm.name} 
                                                        onChange={handleChangeRegistrarUsuario} params={{property:'name'}} texType='capitalize' required/>
                                                    
                                                    <InputForm  id="segundoNombre" label="Segundo Nombre" placeholder="Segundo Nombre..." value={registrarUsuarioForm.second_name} 
                                                        onChange={handleChangeRegistrarUsuario} params={{property:'second_name'}} texType='capitalize' />
                                                    
                                                </div>
                                                <div className={rowClass}>

                                                    <InputForm  id="firstLastName" label="Primer Apellido" placeholder="Primer Apellido..." value={registrarUsuarioForm.last_name} 
                                                        onChange={handleChangeRegistrarUsuario} params={{property:'last_name'}} texType='capitalize' required/>
                                                    
                                                    <InputForm  id="secondLastName" label="Segundo Apellido" placeholder="Segundo Apellido..." value={registrarUsuarioForm.second_last_name} 
                                                        onChange={handleChangeRegistrarUsuario} params={{property:'second_last_:name'}} texType='capitalize'/>

                                                </div>
                                                <div className={rowClass}>
                                                    <InputForm  id="email" type="email" label="Email" placeholder="Email..." value={registrarUsuarioForm.email} 
                                                        onChange={handleChangeRegistrarUsuario} params={{property:'email'}} inputGroup={true} inputGroupHeader="@" 
                                                        textType={'lowercase'} required/>

                                                    <InputForm  id="rut" type="rut" label="Rut" placeholder="Rut..." value={registrarUsuarioForm.rut}  
                                                        onChange={setRutRegistrarUsuario} params={{property:'rut'}} onKeyDown={setTeclaRegistrarUsuario} texType='capitalize' required/>   
                                                </div>
                                                
                                            </div>
                                        </PanelForm.Body>
                                    </PanelForm>

                                    <PanelForm>
                                        <PanelForm.Header colorIcon="success" icon={<i  className="bi bi-person-lines-fill"></i>}>
                                            datos de sistema 
                                        </PanelForm.Header>

                                        <PanelForm.Body>
                                            <div className="mb-3">

                                                <div className={rowClass}>
                                                    <InputForm  id="password" type="password" label="Password" placeholder="Password..." value={registrarUsuarioForm.password}  
                                                            onChange={handleChangeRegistrarUsuario} params={{property:'password'}} required/>
                                                    <InputForm  id="passwordConfirm" type="password" label="Confirme Password" placeholder="Password..." value={registrarUsuarioForm.confirmPassword}  
                                                            onChange={handleChangeConfirmPasswordRegistrarUsuario} params={{property:'confirmPassword'}} tooltip="No coinciden los password" required/>
                                                </div>
                                                <div className={rowClass}>
                                                    <InputForm id="userName" label={"Nombre de Usuario"} defaultValue={(registrarUsuarioForm.name[0]+registrarUsuarioForm.last_name).toLowerCase()}
                                                        value={registrarUsuarioForm.user_name} onChange={handleChangeRegistrarUsuario} params={{property:'user_name'}} textType="lowercase" 
                                                        autoComplete={'off'} size={'6'} required/>
                                                    <SelectForm label="Rol" value={registrarUsuarioForm.role_id} />
                                                </div>

                                            </div>
                                            
                                        </PanelForm.Body>
                                    </PanelForm>

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

            </Page.Body>

        </Page>
    )
}

export default RegistrarUsuario;