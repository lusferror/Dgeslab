// IMPORTED METHODS
import React , {useContext} from "react";
import { Context } from "../store/appContext";

// IMPORT COMPONENTS
import Formulario from "../components/formulario/Formulario.jsx";


export default function Prueba(){// REMEMBER CHANGE PAGE'S NAME
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // LOCAL VARIABLES

    // SESSION VALIDATION
    actions.login().session();

    //LOCAL FUNCTIONS


    return (
        <div>
            <Formulario/>
        </div>

    )
}
