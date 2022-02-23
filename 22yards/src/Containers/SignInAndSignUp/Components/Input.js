function Input(props){
    function handleInputOnChange(event){
        props.onChange(event.target.value)
    }
    function handleFocusIn(){
        if(props.onFocus){
        props.onFocus()
        }
    }
    function handleFocusout(){
        if(props.onFocusOut){
            props.onFocusOut()
        }
    }
    return(
        <input 
            className={props.className}
            type={props.type} 
            onChange={handleInputOnChange} 
            placeholder={props.placeholder}
            onFocus={handleFocusIn}
            onBlur={handleFocusout}         
            style={props.style}
            //style={{borderColor:"yellow"}}   
        />
    )
}

export default Input