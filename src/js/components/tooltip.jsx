import React from "react";
import PropTypes from 'prop-types';

export default function Tooltip({children,show}){
    
    let display = show?'':'none';

    return(
        <div className="bg-danger" style={{
        display: display,
        position: 'absolute',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        color: "#fff",
        fontSize: "0.875rem",
        bottom: "60%",
        right: "0%"
        }}>
        {children}
    </div>

    )
}

Tooltip.propTypes = {
    text: PropTypes.string,
}

Tooltip.defaultProps = {
    text: 'Este es el Tooltip'
}