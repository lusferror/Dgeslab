
export const modalRecepcionEstado=(set,get,len,lista)=>{
    set({spinnerRecepcion:true})
    console.log("largo de lista: ",len)
    console.log("lista: ",lista)
    if (len>0){
        set({modalRecepcion:true})
        fetch('http://127.0.0.1:3100/recepcion',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                series:lista
            })
        })
        .then((response)=>response.json())
            // console.log(response.status))

        .then(result=>{console.log(result)
            set({spinnerRecepcion:false})
            if (result.msg=="nok") set({recepcionRespusta:result.lista})

        })
        .catch(err=>console.error(err))
    }
    else{
        set({modalRecepcion:false})
    }
}