// IMPORTED METHODS
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default class Login{

	constructor (objeto,setStore,getStore,getActions){
		this.objeto = objeto;
		this.setStore = setStore;
		this.getStore = getStore;
		this.getActions = getActions;
	}

	/**
	 * Function that redirect to home, if session is started
	 */
	inicioLogin = () => {
		const history = useNavigate()
		useEffect(() => {
			document.body.classList.add('bg-dark');
			this.setStore({showTopNavBar:'d-none'})
			const session = sessionStorage.getItem("session");
			if (session == "true") {
				history("/");
			}
		}, [])
	}

	ingreso(user=this.objeto.user, password=this.objeto.password, history=this.objeto.history){
	
				this.setStore({ load: true })
				this.setStore({ login: false })
				this.setStore({ error: false})
				this.setStore({ alerta: false})

				fetch(this.getStore().ip+'/login', {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						user: user,
						password: password
					}),
				})
					.then(response => response.json())
					.then(result => {
						if (result.status == "ok") {
							this.setStore({ token: result.token, role_id: result.rol, alerta: false })
							sessionStorage.setItem("token", result.token)
							if (result.token != undefined && result.token != null) {
								sessionStorage.setItem("session", true)
								sessionStorage.setItem("rol", result.rol)
								sessionStorage.setItem("user", result.user)
								sessionStorage.setItem("id",result.id_user)
								sessionStorage.setItem("rol_name",result.rol_name)
								this.setStore({ sesion: true })
								this.setStore({showTopNavBar:''})
								document.body.classList.remove('bg-dark')
								history("/")
	
							}
						}
						else {
							this.setStore({ alerta: true })

						}
						this.setStore({ load: false })
	
					})
					.catch(err => {
						this.setStore({ load: false })
						this.setStore({ alerta: true })
						this.setStore({ error : true})
						console.log(err)});
	}

	/**
	 * This function validate the user's session
	 */
	session (){
		const history = useNavigate()
		const session = sessionStorage.getItem("session")
		useEffect(() => {
			if (session !== "true") {
				history('/login')
			}
			else {
				fetch(this.getStore().ip+'/private', {
					method: 'GET',
					headers: {
						"Authorization": `Bearer ${sessionStorage.getItem("token")}`
					},
					redirect: "follow"
				})
					.then(response => response.json())
					.then(result => {
						if (result.role_id != undefined && result.role_id != null) {
							this.setStore({
								usuario: {
									sesion: true,
									role_id: result.role_id,
									user_name: result.user_name
								}
							})
							sessionStorage.setItem("session", true)
						}
						this.getActions().datosFinancieros()
					})
					.catch(err => console.log(err));
			}
		},
			[])
	}

}