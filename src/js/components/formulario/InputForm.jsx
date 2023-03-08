// IMPORTED METHODS
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

// IMPORT COMPONENTS
import { Form, InputGroup } from "react-bootstrap";
import Tooltip from "../tooltip.jsx";

export default function InputForm( props ) {// REMEMBER CHANGE COMPONENT'S NAME
    
    /**
     * Its functions are in the "funstionsForm" file
     */
    
    // GLOBAL VARIABLES
    const { store } = useContext(Context)
    const { showToolip } = store;
    console.log
    return (
        <Form.Group className={`position-relative ${props.size ? `col-${props.size}` : 'col'} m-1`} controlId={props.id}>

            <Form.Label
                className="text-capitalize fw-bold">
                {props.label}
            </Form.Label>
            <InputGroup>
                {props.inputGroup?<InputGroup.Text>{props.inputGroupHeader}</InputGroup.Text>:<></>}
                <Form.Control
                    type={props.type}
                    className={`${props.className} text-${props.textType}`}
                    placeholder={props.placeholder}
                    name={`${props.id}Name`}
                    value={props.value}
                    onChange={e => props.onChange(e,props.params)}
                    onKeyDown={e => props.onKeyDown(e,props.params)}
                    onFocus={e=>props.onFocus(e,props.params) }
                    maxLength={props.type === "rut" ? 10 : null}
                    required={props.required}
                    autoComplete={props.autoComplete}

                />
            <Form.Control.Feedback type="invalid" tooltip>"El campo {props.label} es requerido"</Form.Control.Feedback>
            {props.tooltip && showToolip? <></>:<Form.Control.Feedback tooltip>Correcto</Form.Control.Feedback>}
            {props.tooltip?<Tooltip show={showToolip}>{props.tooltip}</Tooltip>:<></>}
            </InputGroup>    
        </Form.Group>
    )
}

InputForm.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    params: PropTypes.object,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    textType: PropTypes.string,
    inputGroup:PropTypes.bool,
    inputGroupHeader:PropTypes.string,
    tooltip: PropTypes.string,
    autoComplete:PropTypes.string,
    className: PropTypes.string,
}

InputForm.defaultProps = {
    label: 'label',
    type: 'text',
    placeholder: 'Escribe un valor...',
    id: 'formBasicEmail',
    name: 'NombreCampo',
    value: null,
    onChange: ()=>null,
    onFocus: ()=>null,
    onKeyDown: ()=>null,
    params: null,
    required: false,
    defaultValue: null,
    col: null,
    password:null,
    textType: 'capitalize',
    size:null,
    inputGroup:false,
    inputGroupHeader:'',
    tooltip:null,
    autoComplete:'',
    className:''
}