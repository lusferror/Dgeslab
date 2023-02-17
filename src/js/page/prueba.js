// IMPORTED METHODS
import React , {useContext} from "react";
import { Context } from "../store/appContext";
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';
import functionsForm from "../store/funtionsForm";

// IMPORT COMPONENTS
import Formulario from "../components/formulario/Formulario.jsx";


export default function Prueba(){// REMEMBER CHANGE PAGE'S NAME
    // GLOBAL VARIABLES
    const { store, actions, components } = useContext(Context)

    // LOCAL VARIABLES
    const target = useRef(null);
    const [show, setShow] = useState(false);

    // SESSION VALIDATION
    actions.login().session();

    //LOCAL FUNCTIONS
    const muestra = ()=>{
        return {
        valor:2,
        mustra: function(){
            console.log(this)
            }
        }
    }
    
    const objeto1=()=>{
        return {
            pripiedad1:null,
            funcion:function (){
                return {
                    objeto:"objeto"
                }
            }
        }
    }

    const objeto2={
        ...objeto1(),
        proppiedad2:null,
        ...functionsForm()
    }

    console.log(objeto2);
    // muestra().mustra();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} className='tooltip tooltip-bg-primary'  arrowProps={{style:{backgroundColor:"red"}}}>
          Simple tooltip
        </Tooltip>
      );
    
      return (
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
          arrowProps={{style:{color:"red",backgroundColor:"red"}}}
        >
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
      );
}
