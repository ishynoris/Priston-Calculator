import * as React from 'react';

import TitleSmall  from "./TitleSmall";

import '../assets/css/InputText.css';

interface IInputText {
    title: string,
    defaultValue?: string,
    disable?: boolean
    onChangeValue?: (title: string, newValue: number) => void,
}

class InputText extends React.Component<IInputText>{

    public state = { value: "" }

    constructor(props: IInputText) {
        super(props);

        if (props.defaultValue !== undefined) {
            this.state = { value: props.defaultValue }
        }
    }

    public onChanged = (e: React.FormEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        if (val.match("[0-9]") || val === "") {
            this.setState({ value: val });
        }
    }

    public setValue(newValue: string) {
        this.setState({ value: newValue });
    }

    public renderValue() {
        
        if (this.props.disable) {
            const toNumber = Number(this.state.value);
            const value = isNaN(toNumber) ? this.state.value 
                : toNumber > 0 ? toNumber
                : 0;
            return <label className="disable">{value}</label>
        }
        return <input className={"value"} type="text" value={this.state.value} onChange={this.onChanged} />
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

    public componentWillUpdate(newProps: IInputText, newState: { value: string }){
        const newValue = Number(newState.value);
        if(this.props.onChangeValue !== undefined && !isNaN(newValue)){
            this.props.onChangeValue(this.props.title, newValue);
        }
    }
}

export default InputText;