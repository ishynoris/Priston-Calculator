import * as React from 'react'

import '../assets/css/Button.css';

interface IButton {
    text: string,
    onClicked?: () => void,
}

const Button = (props: IButton) => {
    return <button 
        className="outter-border background"
        onClick={props.onClicked} >
        <div className="btn-hover">
            <label className={"small-title lbl-hover"} >{props.text}</label>
        </div>
    </button>
}

export default Button