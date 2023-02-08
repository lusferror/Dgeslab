// IMPORTED METHODS
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types"

// IMPORT COMPONENTS
import { Form } from "react-bootstrap";

export default function InputForm(props) {// REMEMBER CHANGE COMPONENT'S NAME
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // LOCAL VARIABLES

    //LOCAL FUNCTIONS


    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-capitalize">{props.label}</Form.Label>
                <Form.Control type={props.type} placeholder={props.placeholder} />
            </Form.Group>
        </div>

    )
}

InputForm.PropTypes = {
    //CODE
}

InputForm.defaultProps = {
    //CODE
    label: 'label',
    type: 'text',
    placeholder: 'Escribe un valor...'
    
}