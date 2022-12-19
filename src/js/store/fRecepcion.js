import { ErrorResponse } from "@remix-run/router"

export const modalRecepcionEstado=(set,get,len,lista,setSeries)=>{
    set({spinnerRecepcion:true})
    if (len>0){
        set({modalRecepcion:true})
        fetch('http://127.0.0.1:3100/recepcion',{
            method:'POST',
            headers:{
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                registros:lista
            })
        })
        .then((response)=>response.json())

        .then(result=>{console.log(result)
            set({spinnerRecepcion:false})
            setSeries([])
            console.log(result.lista)
            if (result.msg=="nok") {
                set({recepcionRespusta:result.lista})
                }
            else if(result.msg=="error")
                set({modalRecepcion:false})
            else if (result.msg=="ok"){
                set({modalRecepcion:true})
            }
            else{
                set({modalRecepcion:false})
            }

        })
        .catch(err=>{console.error(err)
        if(err="error"){
        }
        })
        
    }
    else{
        set({modalRecepcion:false})
    }
}

export const registrosRecepcion = (set,get) =>{
    fetch('http://127.0.0.1:3100/registrosRecepcion',
    {
        method:'GET',
        headers:{
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },

    }
    )
    .then(response=>response.json())
    .then(data=>{
        console.log("data: ",data)
        if(data.status=="ok"){
            set({registrosRecepcion:data.lista})
            // console.log("Datos Cargados")
        }
        else{
            console.log("datos no pudieron ser cargados")
        }
    })
    .catch(error=>console.log(error))
}

export const  borrarRegistroRecepcion=(set,get,id)=>{
    const registros = get().registrosRecepcion;
    console.log("este es el id: ",registros[id].id)
    let lista = registros.filter((item,index)=>index!=id)
    set({registrosRecepcion:[...lista]})
    fetch('http://127.0.0.1:3100/borrarRegistroRecepcion',{
        method:'DELETE',
        headers:{
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            'Content-Type':'application/json'
        },
        body:{
            id:registros[id].id
        }
    })
    .then(response=>{
        response.json();
        console.log("status: ",response.status)
    })
    .then(data=>{
        console.log(data.msg)
    })
    .catch(error=>console.log(error))

}