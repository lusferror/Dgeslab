const functionsForm = function (getStore,getActions,setStore) {
    
    return {

        store:{ //Remember to put the prefix "form" for the variables
            formTecla:null,
            formShowToolip:false,
        },

        actions:{ // Remembser to put the suffix "form" for the functions

            /**
             * This function stores the value of input in a state
             * @param {*} e Corresponds to the event
             * @param {*} props Corresponds to the component's props
             */
            handleChangeInputForm:function (e,props) {
                e.preventDefault();
                if (props.type == "rut") {
                    getActions().setRutForm(e,props);
                }
                else if (props.type=="confirmPassword"){
                    if(props.password!==e.target.value){
                        setStore({formShowToolip: true});
                    }
                    else{
                        setStore({formShowToolip: false});
                    }
                    getActions().setValueForm(e.target.value,props);
                }
                else {
                    getActions().setValueForm(e.target.value,props);
                }
    
            },
    
            setRutForm:function (e,props) {

                const tecla = getStore().formTecla;

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
    
                    getActions().setValueForm(value,props);
                }
    
            },
    
            setValueForm: function (value,props) {
                    if (typeof (props.onChange.state) === "object") {
                        props.onChange.state[props.onChange.prop] = value;
                        props.onChange.setState({ ...props.onChange.state })
                    }
        
                    else if (Array.isArray(props.onChange.state)) {
                        props.onChange.setState([...props.onChange.state, value])
                    }
        
                    else {
                        props.onChange.setState(value)
                    }
                
            },
            /**
             * This fucntion store the key pressed
             * @param {*} e 
             */
            setTeclaForm: function (e){
                setStore({formTecla: e.key})
            }
        }
    }
}   

export default functionsForm;