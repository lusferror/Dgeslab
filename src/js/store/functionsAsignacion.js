    // function get list users type "tecnicos"
    export function listaTecnicosAsignacion (setStore,getStore) {
        useEffect(() => {
            fetch(getStore().ip+'/asignacionUsers', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.msg == "ok") {
                        setStore({ listaTecnicosAsigacion: data.list_users })
                    }

                })
                .catch(error => console.log(error))
        }, [])
    }

    //function  assign "tecnico" 
    export function asignar(setStore,getStore) { 
        const { asignarTecnico } = getStore();
        if (asignarTecnico == "") {
            setStore({ asignado: false })
        }
        else {
            setStore({ asignado: true })

        }
    }

    //----------------------------------- funcion que guarda el item de la asignacion ------------------
    export const itemAsignacion =  (fecha, imei, tecnico, tecla,setStore,getStore) => {
        const fecha_hoy=new Date(Date.now())
        if (tecla == "Enter" && imei != "") {
            const { listaAsignacion } = getStore()
            let duplicado=false
            if (listaAsignacion.length > 0) {
                for (let i of listaAsignacion) {
                    if (imei == i.serie) {
                        console.log("duplicado")
                        duplicado=true
                        setStore({asignacionSerieValida:false})
                    }
                }
            }
            if(duplicado==false){
            fetch(getStore().ip+'/serieAsignacion', {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    serie: imei
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.msg == "ok") {
                        let item = {}
                        const { listaAsignacion } = getStore()
                        item = {
                            fecha_asignacion: fecha_hoy.toLocaleString("en-GB"),
                            serie: parseInt(imei),
                            tecnico_id: parseInt(tecnico),
                            check: false,
                            estado: "Pendiente"
                        }
                        const lista = listaAsignacion.concat([item])
                        setStore({ listaAsignacion: lista, modal: true, })
                        setStore({ asignarImei: "" })
                        setStore({ asignacionSerieValida: true })
                    }
                    else {
                        setStore({ asignacionSerieValida: false })
                        console.log("asignacion errada")
                    }
                })
                .catch(err => console.log(err))
            }
            else{
                setStore({ asignacionSerieValida: false })
                console.log("asignacion errada")
            }
        }
    }

    // ------------------------------------- funcion para eliminar registros asignados------------------------------
    export const asignacionEliminar = (setStore,getStore,id) => {
        console.log(id)
        const { listaAsignacion } = getStore()
        let lista = []
        lista = listaAsignacion.filter((item, index) => id !== index)
        console.log(lista)
        setStore({ listaAsignacion: [...lista] })
    }

    // ------------------------ funcion de guardado de lista asignada -------------------------------
    export const asignacionGuaradar = (setStore, getStore) => {
        const { listaAsignacion } = getStore()
        setStore({ listaAsignacionFinal: [...listaAsignacion] })
        setStore({ listaAsignacion: [], asignado: false })
        fetch(getStore().ip+'/asignacionGuardar',{
            method:'POST',
            headers:{
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                "Content-Type":"application/json"

            },
            body:JSON.stringify({
                lista:listaAsignacion
            })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }