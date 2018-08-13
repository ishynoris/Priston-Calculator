import * as React from 'react';

import ITitle from '../interfaces/ITitle';

const TitleSmall = (props: ITitle) => {
    return <label className={"small-title"} >{props.title}</label>
}

export default TitleSmall;