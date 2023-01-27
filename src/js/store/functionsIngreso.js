export function ingreso(email, password, history, setStore,getStore){

        	setStore({ spinnerLogin: true })
        	setStore({ alertLogin: false })
        	fetch(getStore().ip+'/login', {
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
        				setStore({ token: result.token, role_id: result.rol, alertLogin: false })
        				sessionStorage.setItem("token", result.token)
        				if (result.token != undefined && result.token != null) {
        					sessionStorage.setItem("session", true)
        					sessionStorage.setItem("rol", result.rol)
        					sessionStorage.setItem("user", result.user)
        					sessionStorage.setItem("id",result.id_user)
        					sessionStorage.setItem("rol_name",result.rol_name)
        					setStore({ sesion: true })
        					history("/")

        				}
        			}
        			else {
        				setStore({ alertLogin: true })
        			}
        			setStore({ spinnerLogin: false })

        		})
        		.catch(err => {
        			setStore({ spinnerLogin: false })
        			setStore({ alertLogin: true })
        			console.log(err)});
}