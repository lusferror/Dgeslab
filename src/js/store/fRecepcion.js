
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