import * as React from 'react';

import ITitle from '../interfaces/ITitle';

const TitleSmall = (props: ITitle) => {
    const classTitle = "small-title qst-margin";
    return <label className={classTitle}>{props.title}</label>
}

export default TitleSmall;