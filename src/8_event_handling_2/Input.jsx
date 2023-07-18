import React from "react";
//import "./LoginComponent.css";

function Input(props){
    return(
        <input
        className="form-group__input"
        type={props.type}
        id={props.id}
        placeholder={props.label}
        disabled={props.disabled}
        />
    )
}

export default Input;
