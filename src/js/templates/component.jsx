// IMPORTED METHODS
import React , {useContext} from "react";
import { Context } from "../store/appContext";
import PropTypes from   "prop-types"

// IMPORT COMPONENTS


export default function Component(props){// REMEMBER CHANGE COMPONENT'S NAME
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // LOCAL VARIABLES

    //LOCAL FUNCTIONS


    return (
        <div>
            {/* 
                YOUR CONTENT RENDER
            */}
        </div>

    )
}

Component.PropTypes = {
    //CODE
}

Component.defaultProps = {
    //CODE
}