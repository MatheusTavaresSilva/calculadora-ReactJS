import React from 'react';
import './button.css'

const Button = (props) => {
    return(
        <button className = {'button' + props.whichOne} onClick = {props.onClick}>
            {props.Content}
        </button>
    )
}

export default Button;