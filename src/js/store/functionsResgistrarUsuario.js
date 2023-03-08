const functionsResgistrarUsuario = (getStore, getActions, setStore)=>{

    return{

        store:{//Remember to put the prefix "form" for the variables
    
            registrarUsuarioForm:{// Form's initial values
                name: '',
                second_name: '',
                last_name: '',
                second_last_name: '',
                email: '',
                rut:'',
                password: '',
                role_id: '',
                confirmPassword: '',
                user_name: '',
            },
            registrarUsuarioUserNameFocus: false,
    
        },
    
            actions:{// Remembser to put the suffix "form" for the functions
            
                handleClickRegistrarUsuario(e){
                    const form = e.currentTarget;
                    e.preventDefault();
                    const { registrarUsuarioForm } = getStore();
                    console.log("Usuario: ", registrarUsuarioForm)
                    if (form.checkValidity() === false) {
                        e.stopPropagation();
                    }
                    setStore({validated: true});
                    // const rol = parseInt(role_id);
                },

                //  creates 
                registarUsuario: ( last_name, second_last_name, email, rut, password, role_id, history,setStore,getStore) => {
                    const { registrarUsuarioForm } = getStore();
                    console.log("Usuario: ", registrarUsuarioForm)
                // fetch(getStore().ip+'/usuarios/registro', {
                //     method: 'POST',
                //     headers: {
                //         "Content-Type": "application/json",
                //         'Authorization':'Bearer '+sessionStorage.getItem('token')
                //     },
                //     body: JSON.stringify({
                //         user_name:(name[0]+last_name).toLowerCase(),
                //         name: name,
                //         second_name: second_name,
                //         last_name: last_name,
                //         second_last_name: second_last_name,
                //         email: email,
                //         rut: rut,
                //         password: password,
                //         role_id: role_id
                //     }),
                //     redirect: "follow"
                // })
                //     .then(response => {
                //         response.json()
                //         console.log((response.status))
                //         if (response.status == 200) {
                //             setStore({ usuarioCreado: true })
                //             setTimeout(() => {
                //                 location.reload()
                //             }, 4000);
    
                //         }
                //         else {
                //             setStore({ usuarioCreado: false })
                //         }
    
                //     }
                //     )
                //     .then(data => {
                //         console.log('User added: ', data)
                //     })
                //     .catch(err => console.log(err));
                },
    
                // funtion get users
                usuario(setStore,getStore) {
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
                },

                onFocusUserNameRegistrarUsuario(e){
                    const { registrarUsuarioForm } = getStore();
                    const {name , last_name } = registrarUsuarioForm;
                    if(!getStore().registrarUsuarioUserNameFocus && name && last_name){
                        registrarUsuarioForm.user_name = name[0]+last_name;
                        setStore({
                            registrarUsuarioForm : registrarUsuarioForm,
                            registrarUsuarioUserNameFocus : true,
                        })
                    }
                },

                handleChangeRegistrarUsuario:function(e , params) {
                    e.preventDefault();
                    const {property} = params;
                    const { registrarUsuarioForm } = getStore();
                    registrarUsuarioForm[property] = e.target.value;
                    if(property == 'name'){
                        registrarUsuarioForm.user_name =  registrarUsuarioForm.name[0];
                    }
                    else if (property === 'last_name' && registrarUsuarioForm.name[0]){
                        registrarUsuarioForm.user_name =  registrarUsuarioForm.name[0]+registrarUsuarioForm.last_name;
                    }

                    setStore({registrarUsuarioForm: registrarUsuarioForm});
                },

                handleChangeConfirmPasswordRegistrarUsuario(e){
                    e.preventDefault();
                    const { registrarUsuarioForm } = getStore();
                    if(registrarUsuarioForm.password != e.target.value){
                        setStore({showToolip: true});
                    }
                    else{
                        setStore({showToolip: false});
                    }
                    registrarUsuarioForm.confirmPassword = e.target.value;
                    setStore({registrarUsuarioForm: registrarUsuarioForm})

                },
        
                setRutRegistrarUsuario:function (e) {
    
                    const tecla = getStore().formTecla;
                    const { registrarUsuarioForm } = getStore();
    
                    if (tecla == "1" || tecla == "2" || tecla == "3" || tecla == "4" || tecla == "5" || tecla == "6" ||
                        tecla == "7" || tecla == "8" || tecla == "9" || tecla == "0" || tecla == "k" || tecla == "Backspace") {
                        let value = e.target.value;
                        if (value.length > 1 && value.length <= 2 && tecla !== "Backspace") {
                            value = value[0] + '-' + value[1];
                        }
                        else if (value.length > 2) {
                            value = value.split('-');
                            value = value.join('');
                            value = value.slice(0, value.length - 1) + '-' + value[value.length - 1];
                        }
                        registrarUsuarioForm.rut = value;
                        setStore( {registrarUsuarioForm: {...registrarUsuarioForm}} );
                    }
        
                },
        
                setValueForm: function (value,props) {
                        let store = getStore();
                        if (typeof (props.onChange.state) === "object") {
                            props.onChange.state[props.onChange.prop] = value;
                            store[props.onChange.setState] = props.onChange.state
                            setStore({store});
    
                        }
            
                        else if (Array.isArray(props.onChange.state)) {
                            store[props.onChange.setState] = [...props.onChange.state, value]
                            setStore(store)
                        }
            
                        else {
                            store[props.onChange.setState] = value;
                            setStore(store);
                        }
                    
                },
                /**
                 * This fucntion store the key pressed
                 * @param {*} e 
                 */
                setTeclaRegistrarUsuario: function (e){
                    setStore({formTecla: e.key})
                },
        }
    }
    


}    

export default functionsResgistrarUsuario;
