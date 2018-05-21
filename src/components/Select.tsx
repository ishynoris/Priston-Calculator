import * as React from 'react';

import '../assets/css/Select.css';

interface ISelect {
    name: string,
    values: Array<{ value: string, option: string }>
    disabled?: boolean
    onSelectedCallback?: (index: number, value: string) => boolean
}

class Select extends React.Component<ISelect>{

    public state: {lastIndex: number}
    private select: HTMLSelectElement | null;

    constructor(props: ISelect){
        super(props);
        this.state = {lastIndex: 0};
        this.select = null;
    }

    public showOnlyNumber() {
        let classes = "mix-select number";
        this.props.values.forEach(v => {
            const n = Number(v.option);
            if (isNaN(n)) {
                classes = "mix-select";
            }
        });
        return classes;
    }

    public onChanged = (event: React.FormEvent<HTMLSelectElement>) => {
        if (this.props.onSelectedCallback !== undefined) {
            const target = event.currentTarget;
            const update = this.props.onSelectedCallback(target.selectedIndex, target.value);
            
            if(update && this.select !== null){
                this.setState({lastIndex: target.selectedIndex});
            } else {
                target.selectedIndex = this.state.lastIndex;
            }
        }
    }

    public render() {

        const classes = this.showOnlyNumber();
        const disabled = this.props.disabled === undefined ? false : this.props.disabled;
        let key = 0;

        return (
            <select
                ref={ref => this.select = ref}
                name={this.props.name}
                className={classes}
                disabled={disabled}
                onChange={this.onChanged} >
                {
                    this.props.values.map(v => {
                        return <option key={key++} value={v.value}>{v.option}</option>
                    })
                }
            </select>
        );
    }
}

export default Select