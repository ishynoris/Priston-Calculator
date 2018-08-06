import * as React from 'react'

import TitleSmall from './TitleSmall';

interface IButton {
    text: string,
    onClicked: () => void,
}

const Button = (props: IButton) => {
    const style: React.CSSProperties = {
        borderRadius: 6,
        padding: "0 10px",
        textTransform: "uppercase",
    }
    return <button
        className="outter-border background "
        onClick={props.onClicked}
        style={style}>
            <TitleSmall title={props.text} />
    </button>
}

export default Button