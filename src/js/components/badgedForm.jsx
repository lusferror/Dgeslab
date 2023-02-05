import React from "react";
import PropTypes from 'prop-types';

export default function BadgeForm({props}) {

    console.log(props)
    return (
        <span className={`fw-bold  bg-dark w-25 text-center rounded-4 fst-italic text-${props.textColor.toLowerCase()} text-uppercase`}>
            {props.text}
        </span>
    )
}

BadgeForm.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
}

BadgeForm.defaultProps = {
    text: 'Texto de prueba',
    textColor: 'info',
}