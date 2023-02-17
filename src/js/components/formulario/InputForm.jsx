// IMPORTED METHODS
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// IMPORT COMPONENTS
import { Form } from "react-bootstrap";
import Tooltip from "../tooltip.jsx";

export default function InputForm({ props }) {// REMEMBER CHANGE COMPONENT'S NAME
    
    /**
     * Its functions are in the "funstionsForm" file
     */
    
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)
    const { handleChangeInputForm , setTeclaForm } = actions;
    const { formShowToolip } = store;
  
    return (
        <Form.Group className={`position-relative ${props.size ? `col-${props.size}` : 'col'} m-1`} controlId={props.id}>

            <Form.Label
                className="text-capitalize fw-bold">
                {props.label}
            </Form.Label>

                <Form.Control
                    type={props.type=='rut'?'text':props.type=='confirmPassword'?'password':props.type}
                    placeholder={props.placeholder}
                    name={`${props.id}Name`}
                    value={props.value}
                    onChange={e => handleChangeInputForm(e,props)}
                    required={props.required}
                    maxLength={props.type === "rut" ? 10 : null}
                    className={`border-warning ${props.type == "email" ? 'text-lowcase' : props.type !== "password" ? 'text-uppercase' : ''}`}
                    onKeyDown={e => setTeclaForm(e)}
                />
            <Form.Control.Feedback type="invalid" tooltip>"El campo {props.label} es requerido"</Form.Control.Feedback>
            <Form.Control.Feedback tooltip>Correcto</Form.Control.Feedback>
            {props.type=='confirmPassword'?<Tooltip show={formShowToolip}> No coinciden los password</Tooltip>:<></>}
        </Form.Group>
    )
}

InputForm.propTypes = {
    //CODE
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
}

InputForm.defaultProps = {
    //CODE
    label: 'label',
    type: 'text',
    placeholder: 'Escribe un valor...',
    id: 'formBasicEmail',
    name: 'NombreCampo',
    value: null,
    onChange: {         //this props must built whit as object
        setState: null, //this is set state of parent component
        state: null,    //this is state of parent component
        prop: null      //this is the attriubute in case of objects
    },
    required: false,
    defaultValue: null,
    col: null,
    password:null

}