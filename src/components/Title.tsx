import * as React from 'react';

import ITitle from '../interfaces/ITitle';

const Title = (props: ITitle) => {

    const classes = "title margin-title";
    const html = props.for !== undefined ? props.for : "";
    return <label htmlFor={html} className={classes}>{props.title}</label>
}

export default Title;