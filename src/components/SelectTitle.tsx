import * as React from 'react';

import Select from './Select';
import TitleSmall from './TitleSmall';

interface ISelectTitle {
    title: string,
    name: string,
    values: Array<{ value: string, option: string }>
    disabled?: boolean
    onSelectedCallback?: (name: string, index: number, value: string) => boolean
}

class SelectTitle extends React.Component <ISelectTitle>{

    private select: Select | null;

    public setIndex(index: number) {
        if (this.select !== null) {
            this.select.changeValue(index);
        }
    }

    public render(){
        return(
            <div className="item-size outter-border background padding">
                <TitleSmall title={this.props.title}/>
                <Select 
                    ref={ref => this.select = ref} 
                    name={this.props.name} 
                    values={this.props.values} 
                    onSelectedCallback={this.props.onSelectedCallback}/>
            </div>
        )
    }
}
export default SelectTitle;