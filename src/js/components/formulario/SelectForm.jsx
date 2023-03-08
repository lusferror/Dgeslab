// IMPORTED METHODS
import React , {useContext} from "react";
import { Context } from "../../store/appContext";
import PropTypes from   "prop-types"

// IMPORT COMPONENTS
import { Form } from "react-bootstrap";


export default function SelectForm(props){// REMEMBER CHANGE SelectForm'S NAME
    // GLOBAL VARIABLES
    const { store, actions } = useContext(Context)

    // LOCAL VARIABLES

    //LOCAL FUNCTIONS


    return (
        <Form.Group className={`position-relative ${props.size ? `col-${props.size}` : 'col'} m-1`} controlId={props.id}>
            <Form.Label className="text-capitalize fw-bold">
                {props.label}
            </Form.Label>
            <Form.Select value={props.value} required>
                <option>{props.firstOption}</option>    
                {props.options.map(option=>
                <option value={option.id}>{option.name}</option>
                )}
            </Form.Select>
            <Form.Control.Feedback tooltip>Correcto</Form.Control.Feedback>
        </Form.Group>

    )
}

SelectForm.propTypes = {
    options:PropTypes.array,
    lable:PropTypes.string,
    size:PropTypes.string,
    firstOption: PropTypes.string,
    value: PropTypes.any,
}

SelectForm.defaultProps = {
    options: [],
    label: 'Label',
    size: null,
    firstOption: 'Seleccione una opción',
    value: null,
}