import * as React from 'react'

import TitleSmall from './TitleSmall';

import '../assets/css/Button.css';

interface IButton {
    text: string,
    onClicked: () => void,
}

const Button = (props: IButton) => {
    return <button 
        className="outter-border background"
        onClick={props.onClicked} >
        <div className="hover-btn">
            <TitleSmall title={props.text} />
        </div>
    </button>
}

export default Button