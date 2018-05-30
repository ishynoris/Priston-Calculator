import * as React from 'react';

import TitleSmall from "./TitleSmall";

import '../assets/css/InputText.css';

interface IInputText {
    title: string,
    minValue?: number,
    disable?: boolean
    onChangeValue?: (title: string, newValue: number, oldValue: number) => void,
}

class InputText extends React.Component<IInputText>{

    public state: { value: string }

    constructor(props: IInputText) {
        super(props);
        this.state = { value: "" }
    }

    public onChanged = (e: React.FormEvent<HTMLInputElement>) => {
        let val = Number(e.currentTarget.value);
        if (!isNaN(val)) {
            if(this.props.minValue !== undefined){
                const minValue = this.props.minValue;
                val = val > minValue ? val : minValue;
            }
            this.setState({ value: val.toString() });
        }
    }

    public asNumber(): number {
        return Number(this.state.value);
    }

    public setValue(newValue: string) {
        this.setState({ value: newValue });
    }

    public renderValue() {
        let classes = "value";
        if (this.props.disable) {
            classes = "disable";
            const toNumber = Number(this.state.value);
            const value = isNaN(toNumber) ? this.state.value : toNumber;
            if (value < 0){
                classes += " invalid";
            }
            return <label className={classes}>{value}</label>
        }
        return <input className={classes} type="number" value={this.state.value} onChange={this.onChanged} />
    }

    public render() {

        return (
            <div className="row align-items-center">
                <div className="col-md-7">
                    <TitleSmall title={this.props.title} />
                </div>
                <div className="col-md-5">
                    {this.renderValue()}
                </div>
            </div>
        );
    }

    public componentDidUpdate(prevProps: IInputText, prevState: { value: string }) {

        if(this.props.onChangeValue === undefined){
            return;
        }
        const newValue = Number(this.state.value);
        const oldValue = Number(prevState.value);
        const disable = this.props.disable === undefined ? false : this.props.disable;
        if (!disable && !isNaN(newValue) && !isNaN(oldValue)) {
            this.props.onChangeValue(this.props.title, newValue, oldValue);
        }
    }
}

export default InputText;