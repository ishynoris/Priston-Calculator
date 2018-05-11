import * as React from 'react';

import ITitle from '../interfaces/ITitle';

class Title extends React.Component<ITitle>{

    public render() {
        const classTitle = "title margin-title";
        const html = this.props.for !== undefined ? this.props.for : "";
        return (
            <label htmlFor={html} className={classTitle}>
                {this.props.title}
            </label>
        )
    }
}

export default Title;