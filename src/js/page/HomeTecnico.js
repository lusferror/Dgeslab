import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const HomeTecnico = ()=>{

    const {actions,store} = useContext(Context)
    // -------------------------validacion de sesion--------------------------------------
    actions.inicio()
    // -----------------------------------------------------------------------------------
  return (

        <div className="position-absolute top-50 start-50 translate-middle">
            <strong><h1 className=" display-1 text-center ">DGESLAB</h1></strong>
        </div>
    
    )
}
export default HomeTecnico;