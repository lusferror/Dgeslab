export class Login{

	constructor (objeto,setStore,getStore){
		this.objeto = objeto;
		this.setStore = setStore;
		this.getStore = getStore;
	}
	
	ingreso(email=this.objeto.email, password=this.objeto.password, history=this.objeto.history){
	
				this.setStore({ spinnerLogin: true })
				this.setStore({ alertLogin: false })
				fetch(this.getStore().ip+'/login', {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					}),
					redirect: "follow"
				})
					.then(response => response.json())
					.then(result => {
						if (result.status == "ok") {
							this.setStore({ token: result.token, role_id: result.rol, alertLogin: false })
							sessionStorage.setItem("token", result.token)
							if (result.token != undefined && result.token != null) {
								sessionStorage.setItem("session", true)
								sessionStorage.setItem("rol", result.rol)
								sessionStorage.setItem("user", result.user)
								sessionStorage.setItem("id",result.id_user)
								sessionStorage.setItem("rol_name",result.rol_name)
								this.setStore({ sesion: true })
								history("/")
	
							}
						}
						else {
							this.setStore({ alertLogin: true })
						}
						this.setStore({ spinnerLogin: false })
	
					})
					.catch(err => {
						this.setStore({ spinnerLogin: false })
						this.setStore({ alertLogin: true })
						console.log(err)});
	}

}