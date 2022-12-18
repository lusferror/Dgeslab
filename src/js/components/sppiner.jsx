import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Spinner=()=>{
    const {store}=useContext(Context)
    return(
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        
    )
} 