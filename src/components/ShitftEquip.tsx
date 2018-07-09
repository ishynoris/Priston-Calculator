import * as React from 'react';

import RadioButton from './RadioButton';

import '../assets/css/ShiftEquip.css';

interface IShiftEquip {
    name: string,
    titles: string[],
    default: number,
    onSelectedCallback?: (value: string, oldValue?: string) => void
}

class ShiftEquip extends React.Component<IShiftEquip>{

    private oldValue?: string;

    constructor (props: IShiftEquip){
        super(props)
        this.oldValue = undefined;
    }

    public render() {
        
        return <div className="row">
            {
                this.props.titles.map((t, i) => {
                    return ((key: number, title: string) => {
                        const config = { 
                            check: key === this.props.default,
                            id: this.props.name.toLowerCase() + "-" + key,
                            name: this.props.name, 
                            title: t, 
                        };
                        return <div key={key} className="col-sm-3">
                            <RadioButton 
                                elements={config} 
                                onChangeCallback={this.onChanged} />
                        </div>
                    })(i, t)
                })
            }
        </div>
    }

    private onChanged = (value: string) => {
        if (this.props.onSelectedCallback !== undefined) {
            this.props.onSelectedCallback(value, this.oldValue);
            this.oldValue = value;
        }
    }
}
export default ShiftEquip;