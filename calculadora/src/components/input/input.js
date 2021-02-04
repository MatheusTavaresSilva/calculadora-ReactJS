import React from 'react';
import './input.css'

const Input = (props) => {
    return(
        <input type = 'text' readOnly className = 'input' defaultValue = {props.value} onChange = {props.onChange}/>
    )
}

export default Input;