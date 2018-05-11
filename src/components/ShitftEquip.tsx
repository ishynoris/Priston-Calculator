import * as React from 'react';

import RadioButton from './RadioButton';

import '../assets/css/ShiftEquip.css';

interface IShiftEquip {
    name: string,
    titles: string[],
    default: number,
    onSelectedCallback?: (index: number) => void
}

class ShiftEquip extends React.Component<IShiftEquip>{

    public onChanged = (value: string) => {

        if (this.props.onSelectedCallback !== undefined) {
            const index = this.props.titles.indexOf(value);
            this.props.onSelectedCallback(index);
        }
    }

    public renderRadios = (key: number, mTitle: string) => {
        const config = { 
            check: key === this.props.default,
            id: this.props.name.toLowerCase() + "-" + key,
            name: this.props.name, 
            title: mTitle, 
        };
        return (
            <div key={key} className="col-sm-3">
                <RadioButton elements={config} onChangeCallback={this.onChanged} />
            </div>
        );
    }

    public render() {
        let key = 0;
        return (
            <div className="row">
                {
                    this.props.titles.map(t => {
                        return this.renderRadios(key++, t)
                    })
                }
            </div>
        );
    }
}
export default ShiftEquip;