// function creates users
export const crearUsuario=(name, second_name, last_name, second_last_name, email, rut, password, role_id, history,setStore,getStore) => {
    fetch(getStore().ip+'/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            second_name: second_name,
            last_name: last_name,
            second_last_name: second_last_name,
            email: email,
            rut: rut,
            password: password,
            role_id: role_id
        }),
        redirect: "follow"
    })
        .then(response => {
            response.json()
            console.log((response.status))
            if (response.status == 200) {
                setStore({ usuarioCreado: true })
                setTimeout(() => {
                    location.reload()
                }, 4000);

            }
            else {
                setStore({ usuarioCreado: false })
            }

        }
        )
        .then(data => {
            console.log('User added: ', data)
        })
        .catch(err => console.log(err));
    }

    // funtion get users
export function usuario(setStore,getStore) {
        useEffect(() => {

            fetch(getStore().ip+'/user', {
                method: 'GET',
                headers: {
                    // "Authorization": `Bearer ${getStore().token}`,
                    "Content-Type": "application/json"
                },
                redirect: "follow"
            })
                .then(response => response.json())
                .then(data => {
                    setStore({ usuarios: data })
                    console.log("usuarios:", data)
                })
                .catch((error) => console.log(error))
        }, [])
    }

