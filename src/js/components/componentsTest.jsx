import React from "react";

const ComponentsTest = ({cabecera , cuerpo , pie}) =>{
    return (
        <>
            <div id="Cabecera" className="text-primary fw-bold fsw-italic">{cabecera}</div>
            <div id="Cuerpo">{cuerpo}</div>
            <div id="Pie">{pie}</div>
        </>
    )
}

export default ComponentsTest;