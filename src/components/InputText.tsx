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
        this.state = { value: props.minValue !== undefined ? props.minValue.toString() : "0" }
    }

    public getValue(): { title: string, value: number } {
        return { title: this.props.title, value: Number(this.state.value) };
    }

    public setValue(newValue: string) {
        this.setState({ value: newValue });
    }

    public render() {

        const renderValue = () => {
            let classes = "value";
            if (this.props.disable) {
                const toNumber = Number(this.state.value);
                const value = isNaN(toNumber) ? this.state.value : toNumber;
                classes = "disable" + (value < 0 ? " invalid" : "");
                return <label className={classes}>{value}</label>
            }
            return <input 
                className={classes} 
                type="number" 
                value={this.state.value} 
                onChange={this.onChanged}
                onBlur={this.onBlur} />
        }

        return (
            <div className="row align-items-center">
                <div className="col-md-8">
                    <TitleSmall title={this.props.title} />
                </div>
                <div className="col-md-4">
                    {renderValue()}
                </div>
            </div>
        );
    }

    public componentDidMount() {
        this.onChangeValue();
    }

    public componentDidUpdate(prevProps: IInputText, prevState: { value: number }) {
        this.onChangeValue(prevState.value);
    }

    private onChangeValue = (oldValue?: number) => {
        if(this.props.onChangeValue === undefined){
            return;
        }
        const newValue = Number(this.state.value);
        oldValue = oldValue === undefined ? NaN : oldValue;
        const disable = this.props.disable === undefined ? false : this.props.disable;
        if (!disable && !isNaN(newValue) && !isNaN(oldValue)) {
            this.props.onChangeValue(this.props.title, newValue, oldValue);
        }
    }

    private onChanged = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ value: e.currentTarget.value });
    }
    
    private onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        let val = Number(e.currentTarget.value);
        if (!isNaN(val)) {
            if(this.props.minValue !== undefined){
                const minValue = this.props.minValue;
                val = val > minValue ? val : minValue;
            }
            this.setState({ value: val.toString() });
        }
    }
}

export default InputText;