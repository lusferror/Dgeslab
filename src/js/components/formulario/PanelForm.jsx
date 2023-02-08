// IMPORTED METHODS
import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types"

// IMPORT COMPONENTS


export default function PanelForm(props) {// REMEMBER CHANGE COMPONENT'S NAME
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // LOCAL VARIABLES

    //LOCAL FUNCTIONS


    return (
        <div className="mb-5">
            <div className="col d-flex border-bottom border-1 rounded-pill bg-dark border-bottom border-start border-warning border-2">
                <div className= {`col-3 fs-3 text-center text-${props.colorIcon}`}>
                    {props.icon}
                </div>
                <div className="col d-flex align-items-center fs-3 fst-italic text-white text-capitalize ">
                    {props.header}
                </div>
            </div>
            <div>
                {props.body}
            </div>
            <div className={`border-1 border-bottom border-${props.colorIcon}`}>
                {props.footer}
            </div>
        </div>

    )
}

PanelForm.propTypes = {
    //CODE
}

PanelForm.defaultProps = {
    //CODE
    icon: '',
    header: 'CABEZERA',
    body: 'CUERPO',
    footer: '',
    colorIcon: 'info'
}