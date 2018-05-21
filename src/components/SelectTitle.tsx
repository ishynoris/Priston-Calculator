import * as React from 'react';

import Select from './Select';
import TitleSmall from './TitleSmall';

interface ISelectTitle {
    title: string,
    name: string,
    values: Array<{ value: string, option: string }>
    disabled?: boolean
    onSelectedCallback?: (index: number, value: string) => void
}

const SelectTitle = (props: ISelectTitle) => {
    return(
        <div className="item-size outter-border background padding">
            <TitleSmall title={props.title}/>
            <Select name={props.name} values={props.values} onSelectedCallback={props.onSelectedCallback}/>
        </div>
    )
}
export default SelectTitle;