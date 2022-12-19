import { useEffect, useSyncExternalStore } from "react";

export function nroCajaVerificacion(set,get){
    useEffect(()=>{
        fetch('http://127.0.0.1:3100/nroCajaVerificacion',{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            }
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data.msg)
            if (data.msg=="ok"){
                console.log("no esta entrando")
                set({nroCaja:data.result})
            }
            // const {nroCajaVerificacion}= get().store
            console.log(get().nroCaja)
        })

        .catch(error=>console.log(error))
    },[])
}

export function registrarDocumentoVerificacion(set,get){
    set({documentoRegistrado:true})
}

export function onChangeDocumentoVerificacion(set,get,e){
    set({registrarDocumentoVerificacion:e})
}