// IMPORTED METHODS
import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types"

// IMPORT COMPONENTS


export default function PanelForm(props) {// REMEMBER CHANGE COMPONENT'S NAME
    // GLOBAL VARIABLES
    const { store, actions } = useContext(Context)
    
    // LOCAL VARIABLES
    
    //LOCAL FUNCTIONS
    
    
    return (
        <div className="mb-5">
            {props.children}
        </div>

)
}

PanelForm.propTypes = {
    // icon: PropTypes.string,
    colorIcon: PropTypes.string,
}

PanelForm.defaultProps = {
    //CODE
    icon: '',
    colorIcon: 'info'
}

//COMPOSITE COMPONENTS
PanelForm.Header = Header;
PanelForm.Body = Body;
PanelForm.Footer = Footer;

function Header(props){
    return(
        <div className="col d-flex border-bottom border-1 rounded-pill bg-dark border-bottom border-start border-warning border-2"> 
            <div className= {`col-3 fs-3 text-center text-${props.colorIcon}`}>
                {props.icon}
            </div>
            <div className="col d-flex align-items-center fs-3 fst-italic text-white text-capitalize ">
                {props.children}
            </div>
        </div>
    )
}
Header.propTypes = {
    colorIcon: PropTypes.string,
}
Header.defaultProps = {
    colorIcon: 'info'
}

function Body(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

function Footer(props){
    return(
        <div className={`border-1 border-bottom border-${props.colorIcon}`}>
            {props.children}
        </div>
    )
}