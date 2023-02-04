import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export const inicio = (setStore,getStore,getActions) => {// function that validate the session
    const history = useNavigate()
    const session = sessionStorage.getItem("session")
    useEffect(() => {
        if (session !== "true") {
            history('/login')
        }
        else {
            fetch(getStore().ip+'/private', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem("token")}`
                },
                redirect: "follow"
            })
                .then(response => response.json())
                .then(result => {
                    if (result.role_id != undefined && result.role_id != null) {
                        setStore({
                            usuario: {
                                sesion: true,
                                role_id: result.role_id,
                                user_name: result.user_name
                            }
                        })
                        sessionStorage.setItem("session", true)
                    }
                    getActions().datosFinancieros()
                })
                .catch(err => console.log(err));
        }
    },
        [])
}

export const fecha = () => {// funcion de fecha actual 
    const hoy = Date.now()
    const fecha = new Date(hoy).toLocaleString("en-GB")
    return fecha;
}