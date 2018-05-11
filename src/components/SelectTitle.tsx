import * as React from 'react';

import Select from './Select';
import TitleSmall from './TitleSmall';

interface ISelectTitle {
    title: string,
    name: string,
    values: Array<{ value: string, option: string }>
    disabled?: boolean
    onSelectedCallback?: (value: string) => void
}

class SelectTitle extends React.Component<ISelectTitle>{

    public render(){
        return (
            <div className="outter-border background padding">
                <TitleSmall title={this.props.title}/>
                <Select name={this.props.name} values={this.props.values} onSelectedCallback={this.props.onSelectedCallback}/>
            </div>
        );
    }
}

export default SelectTitle;