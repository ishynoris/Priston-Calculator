import * as React from 'react';

import '../assets/css/Select.css';

interface ISelect {
    name: string,
    values: Array<{ value: string, option: string }>
    disabled?: boolean
    onSelectedCallback?: (value: string) => void
}

class Select extends React.Component<ISelect>{

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
            this.props.onSelectedCallback(event.currentTarget.value);
        }
    }

    public render() {

        const classes = this.showOnlyNumber();
        const disabled = this.props.disabled === undefined ? false : this.props.disabled;
        let key = 0;

        return (
            <select
                name={this.props.name}
                className={classes}
                disabled={disabled}
                onChange={this.onChanged}>
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

/*

    <a href="google.com">
        <img src="link-img"/>
    </a>
*/