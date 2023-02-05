// IMPORTED METHODS
import React , {useContext} from "react";
import { Context } from "../store/appContext";

// IMPORT COMPONENTS


export default function ContentPage(){// REMEMBER CHANGE PAGE'S NAME
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // LOCAL VARIABLES

    // SESSION VALIDATION
    actions.login().inicioLogin();

    //LOCAL FUNCTIONS


    return (
        <div>
            {/* 
                YOUR CONTENT RENDER
            */}
        </div>

    )
}
