import * as React from 'react';

import ITitle from '../interfaces/ITitle';

const TitleSmall = (props: ITitle) => {
    const classTitle = "small-title";
    return <label className={classTitle} >{props.title}</label>
}

export default TitleSmall;