import * as React from 'react';

import ITitle from '../interfaces/ITitle';

class Title extends React.Component<ITitle>{

    public render() {
        const classTitle = "small-title qst-margin";
        return <label className={classTitle}>{this.props.title}</label>
    }
}

export default Title;